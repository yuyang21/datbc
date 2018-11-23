<template>
	<div id="communication">
		<head-top></head-top>
    <div class="banner"></div>
		<nav-top :newsNav="newsNav" :widthLi="widthLi"></nav-top>
		<div class="expert" id="anchor0">
			<div class="title-style">
				<p class="title-cn">专家智库</p>
				<p class="title-en">EXPERT THINK TANK</p>
			</div>
			<div class="member">
				<p class="title_1 ft-b">研究院会员</p>
				<p class="content">重庆数资区块链研究院作为国内中西部地区唯一一家国有控股区块链技术应用研究机构，致力于筑造国内顶级数资政企领袖深度交流服务平台，打通政企资源，护航企业发展</p>
			</div>
			<div class="advantages">
				<p class="title_1 ft-b">我们的优势</p>
				<ul>
					<li>
						<p>领袖人脉</p>
						<p>汇聚数资领域政企领袖人物，拓展人脉资源视野。</p>
					</li>
					<li>
						<p>开放场景</p>
						<p>发挥国家单位智库职能，以政府引导为驱动，链接社会化应用场景与企业技术资源，加速技术创新落地。</p>
					</li>
					<li>
						<p>交流互访</p>
						<p>搭建会议交流平台，企业与政府零距离，共商数资产业大计。</p>
					</li>
					<li>
						<p>落地资源</p>
						<p>权威解读政策指引，配套产业基金、产业基地专属落地资源，鼎力支撑实体经济。</p>
					</li>
				</ul>
			</div>
			<div class="plan">
				<p class="title_1 ft-b">2018会员单位工作计划</p>
				<div class="left timeLine"><p>2018</p></div>
				<div class="right">
					<div class="content">
						<p class="title_02">2018年首届数资区块链政企产研峰会</p>
						<p>会议目的 <br> 重庆市经信委、涪陵区政府、传统金融行业、实体经济集团与区块链行业企业深入探讨交流，共同商议2019年政企项目合作、配套基金建设等问题。部分会员单位入驻产业基地签约仪式。</p>
						<p class="time">2018年10月18日</p>
					</div>
					<div class="content">
						<p class="title_02">2019年重庆市产业技术创新联盟 申报工作</p>
						<p>前20名入驻产业基地的企业组成创新联盟申报小组，针对数资区块链行业发展，以研究院名义共同申请。 </p>
						<p class="time">2018年12月18日</p>
					</div>
					<div class="content">
						<p class="title_02">2019年重庆市政府项目申报政策解读，申报指导</p>
						<p class="time">2018年12月18日</p>
					</div>
				</div>
			</div>
			<div class="join">
				<p class="title_1 ft-b">会员单位 加入办法</p>
				<ul>
					<li>
						<p class="num">01</p>
						<p class="txt">添加工作人员微信，获取 “会员申请表</p>
					</li>
					<li>
						<p class="num">02</p>
						<p class="txt">填写申请表，发送至 members@datbc.com</p>
					</li>
					<li>
						<p class="num">03</p>
						<p class="txt">通过申请的单位，工作人员将联系您颁发证书</p>
					</li>
					<li>
						<p class="num">04</p>
						<p class="txt">邀请您加入会员单位交流微信社群，更多会员政策落地解答将通过微信沟通</p>
					</li>
				</ul>
			</div>
			<div class="committee">
				<div class="part01">
					<p class="title03 ft-b">专家委员会</p> <br><br>
					<p class="txt">重庆数资区块链研究院专家委员会，共设以下五组</p>
					<ul>
						<li>
							<p>技术组</p>
							<p>（技术研发公司）</p>
						</li>
						<li>
							<p>应用组</p>
							<p>（系统应用方案提供商）</p>
						</li>
						<li>
							<p>咨询组</p>
							<p>（行业调研咨询）</p>
						</li>
						<li>
							<p>培训组</p>
							<p>（技术培训指导）</p>
						</li>
						<li>
							<p>评测组</p>
							<p>（技术检测评级）</p>
						</li>
					</ul>
					<p class="txt">设置目的：</p>
					<p class="txt">充分发挥重庆数资区块链研究院政府智库智能，汇聚业界“最强大脑”，为政府发展区块链产业献计献策。</p> <br>
					<p class="txt">专家委员会工作：</p>
					<p class="txt">不定期参加政府工作讨论会；</p>
					<p class="txt">参与制定行业相关标准及规范；</p>
					<p class="txt">会员单位咨询辅导</p>
					<p class="txt">产业项目投融资评审。</p> <br>
					<p class="txt">加入办法：</p>
					<p class="txt">邮件提交个人资料发送至 members@datbc.com，或微信添加数资小助手：hidatbc递交，通过我院专家委员评审后可加入。</p>
				</div>
				<div class="part02">
					<div class="intro">
						<div class="left"><img :src="member.portrait" alt=""></div>
						<div class="right">
							<p class="name ft-b">{{member.name}}</p>
							<p class="desr ft-b">{{member.desr}}</p>
							<p class="position ft-b">{{member.position}}</p>
							<p class="line"></p>
							<div class="introduction" v-html="member.introduction"></div>
						</div>
					</div>
					<ul class="list">
						<li v-for="(item,index) in memberList" :key="index" @click="toggleMember(index)" :class="{'active': index === activeMem}"><img :src="item.portrait" alt=""></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="conference" id="anchor1">
			<div class="title-style">
				<p class="title-cn">会议活动</p>
				<p class="title-en">CONFERENCE ACTIVITIES</p>
			</div>
			<img src="../images/communication/conference.png" alt="" width="100%">
		</div>
		<!-- <div class="training" id="anchor2">
			<div class="title-style">
				<p class="title-cn">技术培训</p>
				<p class="title-en">TECHNICAL TRAINING</p>
			</div>
			<ul>
				<li v-for="(item,index) in trainingList" :key="index">
					<div class="left"><img src="" alt=""></div>
					<div class="right">
						<p class="title_04">{{item.title}}</p>
						<p class="txt" v-html="item.txt"></p>
					</div>
				</li>
			</ul>
		</div> -->
		<foot-guide></foot-guide>
	</div>
</template>

<script>
import headTop from '../components/header/head'
import navTop from '../components/header/nav'
import footGuide from '../components/footer/footGuide'
import { Utils } from '../service/Utils'
export default {
  data () {
    return {
      widthLi: 'width: 50%',
      newsNav: [
        {
          index: 0,
          name: '专家智库',
          id: 'expert'
        },
        {
          index: 1,
          name: '会议活动',
          id: 'conference'
        }
			],
			memberList: [
				{
					portrait: require('../images/communication/expert01.png'),
					name: '黄博文',
					desr: '谷歌中国早期成员 CCG中国与全球化智库理事',
					position: '专家委员会 咨询专家',
					introduction: '连续跨界创业者，擅长资源整合和公关拓展。2018年联合Google首位华人工程师创建智狗科技，专注人工智能和区块链领域的技术研发与服务，针对安全和去中心化成功开发出多套解决方案。此外还兼任游戏和教育机器人等公司董事，早先还参与组建影视公司，后被知名影视公司并入旗下。职业生涯始于安永咨询(Ernst&Young)，时任高级顾问；之后作为早期员工加入Google中国，负责大中华区在线营运工作，搭建服务体系为数万家中小企业提供广告方案和搜索咨询业务。此后还在另类投资投资基金3ZCapital任职董事总经理负责商业伙伴维系及业务开拓。CCG中国与全球化智库理事。重庆数资区块链研究院专家委员会咨询顾问。毕业于北京师范大学获理学学士，后保送鲁汶大学工程学院获硕士学位。'
				},
				{
					portrait: require('../images/communication/expert02.png'),
					name: '周哲',
					desr: '谷歌总部首位华人，第103号员工。',
					position: '专家委员会 技术专家',
					introduction: '2000年加入美国谷歌总部，第103号员工，也是谷歌首位华人员工，期间开发了第一代谷歌广告系统AdWords的60%代码，写下了谷歌第一行Java代码，并先后参与了Gmail、Chubby(区块链技术的前身)、gRPC、地图、音乐等产品的开发。2008年开始从事个人天使投资，投资项目兰亭集势(Lightinthebox.com)于2013年在纽交所上市，北信得实于2014年新三板上市，其他投资案例：木瓜移动、尚街网、电影《一夜惊喜》。2014年创立技德科技，自主研发一款兼容安卓手机App的国产操作系统，把手机海量应用带到电脑设备上，之后将整套技术授权给美国Google使用，这也是Google历史上罕有的对中国技术团队的认可。 2018年创立“智狗科技”为企业提供量身定制的AI咨询和区块链技术服务。毕业于香港科技大学电机工程学学士、美国斯坦福大学电机工程学硕士。'
				},
				{
					portrait: require('../images/communication/expert03.png'),
					name: '李大学',
					desr: '磁云科技创始人& CEO；中欧EMBA & 长江DBA',
					position: '专家委员会 技术专家',
					introduction: '2016年<br>影响中国大数据产业进程100人（中国首席数据官联盟）<br>2015年<br>京东终身荣誉技术顾问（京东集团）<br>2012年<br>中关村高端领军人才(中关村国家自主创新示范区）<br>2005年<br>全国劳动模范（中华人民共和国国务院）'
				},
				{
					portrait: require('../images/communication/expert04.png'),
					name: '张建设',
					desr: '',
					position: '专家委员会 咨询专家',
					introduction: '北京工商大学客座教授、腾讯腾云智库专家、贵州农村电商研究院副院长。<br>曾任京东集团政策研究室主任、中国电子报社常务副社长、中国计算机报社总编辑，参与创立贵农网，建成县域产地仓40余家、县乡村农村服务综合体5000余个。'
				},
				{
					portrait: require('../images/communication/expert05.png'),
					name: '赵廷超',
					desr: '磁云科技联席董事长',
					position: '专家委员会 咨询专家',
					introduction: '中国电子商务协会副理事长<br>国家发改委、工信部、商务部电子商务专家<br>APEC电子商务联盟专家<br>阿里集团早期战略顾问'
				},
				{
					portrait: require('../images/communication/expert06.png'),
					name: '钟惠波',
					desr: '经济学博士，北京理工大学经济系主任，副教授。',
					position: '专家委员会 咨询专家',
					introduction: '多年互联网创业经历，长期从事经济增长理论、创新及创业案例研究。出版“Independent innovation in China: theory and cases”、“创心闪耀光谷”、“中国经济增长的驱动因素分析”等专著；作为主要参与人获得2017年北京市科学技术奖三等奖、2016年第五届中国管理科学学会管理科学奖，参与编著“互联网+：国家战略行动路线图”。'
				}
			],
			member: {},
			activeMem: 0,
			trainingList: [
				{
					title: 'baas',
					txt: '我国畜牧养殖业发展已有三十余年历史，但目前的养殖模式仍然以人工为主，工业化水平较低。此外，影响养殖业快速发展的核心是数据的缺乏，包括养殖企业数据基础薄弱，数据意识较差等。针对这一现状，区块链技术可提供良好的解决方案，企业将日常养殖数据记录在区块上，方便内部科学化管理和养殖；消费者在溯源管理平台查询商品信息，区块链技术的可追溯、不可篡改特性保证了商品信息的真实可查，便于追溯。<br>以“黑猪360”项目为例：“黑猪360”是全球首个区块链黑猪溯源项目，“黑猪360”的三个维度：一是黑猪从出生到屠宰共计360天左右，使用农作物喂养，保证不含抗生素和任何催长剂；二是360°通透的生活环境，涪陵黑猪与大自然零距离接触的同时，保证每天充分的运动；三是360°全方位的信息记录，每一头小猪从出生、育肥、屠宰、到销售的全流程信息都被记录在区块链上，保证所有信息透明可追踪。“黑猪360”采用“一猪一证”，猪身上的每块肉也有各自的“子码”，消费者用手机终端扫码即可查到每块肉的来源，并追溯到每一头猪及其生长过程。'
				},
				{
					title: '臻品链',
					txt: '食品安全问题一直是社会关注的热点话题，而食品加工是保证食品安全的重要一环，利用区块链技术记录食品加工环节的所有流程和数据信息，可以提升商品加工过程中的透明度，并以密码学方式保证商品信息的不可篡改，保护消费者利益，提升生产加工企业的品牌形象。<br>以“涪陵榨菜”项目为例：作为榨菜行业的代表，涪陵榨菜可谓名满天下，但也因此出现了众多仿冒品，严重损害品牌形象。基于区块链技术的榨菜加工管理和防伪打假监管系统，能够对加工企业进行有效监管、系统备案，规范榨菜生产及市场经营秩序，对榨菜行业有序发展起到促进作用。<br>物流业：物流是运输、保管、包装、装卸、流通加工、配送以及信息等多项基本活动的统一整体。物流通常跨越多个步骤和数百个地理位置，难以跟踪整个物流过程，区块链作为一种按照时间顺序将数据区块以顺序相连的方式组合成的一种链式数据结构，能够跟踪产品在到达最终目的地之前的整个过程，解决物流行业的痛点<br>以“链箱”项目为例：基于区块链、互联网、大数据等技术的”链箱”，第一个将区块链技术应用到物流包装场景中的包装箱，针对行业存在的资源浪费、无法精准定位、数据失真、交易结算成本高、资源共享效率不高、企业融资难等痛点，利用区块链的共享账本、智能合约、隐私保护和共识算法，共建新型的供应链载体——“区块链箱”，将区块链与物流业有机融合，推进包装箱产业的优化升级。'
				},
				{
					title: '案例应用',
					txt: '我国畜牧养殖业发展已有三十余年历史，但目前的养殖模式仍然以人工为主，工业化水平较低。此外，影响养殖业快速发展的核心是数据的缺乏，包括养殖企业数据基础薄弱，数据意识较差等。针对这一现状，区块链技术可提供良好的解决方案，企业将日常养殖数据记录在区块上，方便内部科学化管理和养殖；消费者在溯源管理平台查询商品信息，区块链技术的可追溯、不可篡改特性保证了商品信息的真实可查，便于追溯。<br>以“黑猪360”项目为例：“黑猪360”是全球首个区块链黑猪溯源项目，“黑猪360”的三个维度：一是黑猪从出生到屠宰共计360天左右，使用农作物喂养，保证不含抗生素和任何催长剂；二是360°通透的生活环境，涪陵黑猪与大自然零距离接触的同时，保证每天充分的运动；三是360°全方位的信息记录，每一头小猪从出生、育肥、屠宰、到销售的全流程信息都被记录在区块链上，保证所有信息透明可追踪。“黑猪360”采用“一猪一证”，猪身上的每块肉也有各自的“子码”，消费者用手机终端扫码即可查到每块肉的来源，并追溯到每一头猪及其生长过程。'
				}
			]
    }
  },
  mounted () {
    window.addEventListener('scroll', Utils.mouseMove);
	},
	created () {
		this.member = this.memberList[0];
	},
  methods: {
		toggleMember(index) {
			this.activeMem = index;
			this.member = this.memberList[index];
		}
	},
	components: {
		headTop,
		footGuide,
		navTop
	}
}
</script>

<style lang="scss" scoped>
  @import '../style/mixin';
	#communication {
		.banner {
      @include wh(100%,332px);
      background-color: #4d7b9c;
      background: url('../images/communication/banner.png') no-repeat 0 0;
      background-size: 100% 100%;
		}
		.expert {
			.title_1 {
				text-align: center;
				line-height: 2.6;
				@include sc(18px,$blue);
				margin-top: 50px;
			}
			.member {
				margin: 0 auto;
				.content {
					margin: 0 16.5%;
					line-height: 2.86;
					letter-spacing: 0.2px;
					@include sc(14px,$blue);
					text-align: justify;
				}
			}
			.advantages {
				ul {
					overflow: hidden;
					margin: 25px auto 60px;
					width: 67%;
					text-align: center;
					box-sizing: border-box;
					li {
						float: left;
						@include wh(21.5%,200.5px);
						margin-right: 35.2px;
						text-align: center;
						p:nth-child(1) {
							@include sc(20px,$fc);
							line-height: 0.85;
							margin-top: 61.5px;
						}
						p:nth-child(2) {
							line-height: 1.88;
							@include sc(12px,$fc);
							margin-top: 21px;
							padding: 0 12px;
							font-weight: bold;
						}
					}
					li:first-child {
						background: url('../images/communication/advantage01.png') no-repeat 0 0;
						background-size: 100% 100%;
					}
					li:nth-child(2) {
						background: url('../images/communication/advantage02.png') no-repeat 0 0;
						background-size: 100% 100%;
					}
					li:nth-child(3) {
						background: url('../images/communication/advantage03.png') no-repeat 0 0;
						background-size: 100% 100%;
					}
					li:last-child {
						background: url('../images/communication/advantage04.png') no-repeat 0 0;
						background-size: 100% 100%;
						margin-right: 0;
					}
				}
			}
			.plan {
				overflow: hidden;
				width: 67%;
				margin: 0 auto;
				.left {
					margin: 30px 0 50px;
					@include wh(40px,40px);
					line-height: 40px;
					background: $red;
					position: relative;
					text-align: center;
					font-weight: bold;
					p {
						@include sc(16px,$fc);
						position: relative;
						z-index: 222;
					}
					&:after {
						display: block;
						content: '';
						@include wh(8px,8px);
						position: absolute;
						right: -4px;
						top: 14px;
						background: $red;
						transform: rotate(45deg);
						z-index: 2;
					}
				}
				.right {
					width: 94%;
					margin: 30px 0;
					.title_02 {
						@include sc(16px,$g3);
						margin-bottom: 2px;
					}
					.content {
						padding: 5px 0 10px 15px;
						box-sizing: border-box;
    				border-bottom: 1px solid #eee;
						border-left: 5.5px solid #cfcfcf;
						margin: 0 0 25px 20px;
						line-height: 1.84;
						position: relative;
						cursor: pointer;
						&:hover {
							border-left: 5.5px solid $red;
						}
						.time {
							position: absolute;
							right: 5px;
							bottom: 0px;
							text-align: right;
							@include sc(13px,$g6);
						}
						p:nth-child(2) {
							@include sc(13px,$g6);
							width: 83%;
						}
					}
				}
			}
			.join {
				ul {
					overflow: hidden;
					margin: 30px auto;
					width: 67%;
					box-sizing: border-box;
					text-align: center;
					li {
						float: left;
						width: 21.2%;
						height: 129px;
						margin-right: 40.5px;
						box-sizing: border-box;
						position: relative;
						.num {
							background-image: linear-gradient(to bottom, #3f6ffe, #1d4ad0), linear-gradient(#666666, #666666);
							-webkit-background-clip: text;
							background-clip: text;
							-webkit-text-fill-color: transparent;
							font-size: 30.5px;
							text-align: center;
							margin-bottom: 5px;
						}
						.txt {
							letter-spacing: 0.3px;
							text-align: justify;
							@include sc(14px,$g3);
							padding: 0 5px;
						}
						&:after {
							position: absolute;
							bottom: 0;
							display: block;
							content: '';
							@include wh(100%, 15px);
							border-radius: 5px;
  						background-image: linear-gradient(to bottom, #3f6ffe, #1d4ad0), linear-gradient(267deg, #fb9d1c, #ffc868);
						}
					}
					li:last-child {
						margin-right: 0;
					}
				}
			}
			.committee {
				.part01 {
					text-align: center;
					margin: 100px auto;
					width: 67%;
					.title03 {
						@include sc(20px,$blue);
					}
					.txt {
						@include sc(14px,$g6);
						text-align: left;
						line-height: 2;
					}
					ul {
						overflow: hidden;
						box-sizing: border-box;
						margin: 15px auto;
						text-align: center;
						li {
							float: left;
							box-sizing: border-box;
							@include wh(18%,107.5px);
							padding-top: 35px;
							margin-right: 20px;
							background: $f4;
							border-top: 2px solid $red;
							border-radius: 1px;
							p:nth-child(1) {
								@include sc(18px,$blue);
							}
							p:nth-child(2) {
								@include sc(14px,$blue);
							}
						}
						li:last-child {
							margin-right: 0;
						}
					}
				}
				.part02 {
					background: $f4;
					padding: 34px 0 80px;
					.intro {
						margin: 0 16.5% 45px;
						// min-height: 355px;
						overflow: hidden;
						.left {
							width: 23%;
							img {
								width: 100%;
							}
						}
						.right {
							width: 72%;
							line-height: 2;
							.name {
								@include sc(18px,$blue);
								letter-spacing: 0.4px;
								padding: 15px 0 6px;
							}
							.line {
								@include wh(53px,3.5px);
								border-radius: 1.8px;
								background-color: #fd4a41;
								box-shadow: 0 0 1.5px 0 rgba(253, 74, 65, 0.34);    
								margin: 22px 0 14px;
							}
							.desr, .position {
								@include sc(14px,$blue);
								letter-spacing: 0.3px;
								margin-bottom: 2px;
							}
							.introduction {
								line-height: 1.85;
								@include sc(14px,$blue);
							}
						}
					}
					.list {
						overflow: hidden;
						width: 75%;
						margin: 0 auto;
						text-align: center;
						position: relative;
						li {
							float: left;
							width: 12%;
							margin-right: 50px;
							border-bottom: 8px solid #e1e2e6;
							padding-bottom: 20px;
							cursor: pointer;
							img {
								width: 100%;
							}
						}
						&:after {
							display: block;
							content: '';
							position: absolute;
							bottom: 0;
							@include wh(100%, 8px);
							background-color: #e1e2e6;
							z-index: 0;
						}
						li.active {
							border-bottom: 8px solid $red;
							position: relative;
							z-index: 1;
						}
						li:last-child {
							margin-right: 0;
						}
					}
				}
			}
		}
		.conference {
			img {
				display: block;
				margin: 35px auto 120px;
			}
		}
		.training {
			margin: 0 auto;
			ul {
				overflow: hidden;
				li {
					overflow: hidden;
					padding: 45px 16.5% 30px;
					.left, .right {
						float: left;
						width: 50%;
					}
					.left {
						height: 220px;
						background: $blue;
						border-radius: 5px;
					}
					.right {
						padding-left: 20px;
						.title_04 {
							@include sc(18px, $g3);
							margin-bottom: 15px;
						}
						.txt {
							@include sc(14px, $g3);
						}
					}
				}
				li:nth-child(even) {
					background-color: $f4;
				}
			}
		}
	}
</style>