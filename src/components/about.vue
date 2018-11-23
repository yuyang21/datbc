<template>
	<div id="about">
		<head-top></head-top>
		<div class="banner"></div>
		<nav-top :newsNav="newsNav" :widthLi="widthLi"></nav-top>
		<div class="container">
      <div class="about" id="anchor0">
        <div class="title-style">
          <p class="title-cn">关于我们</p>
          <p class="title-en">ABOUT US</p>
        </div>
				<div class="txt">
					重庆数资区块链研究院（以下简称研究院）由重庆涪陵国有资产投资经营集团与重庆数资科技公司联合成立，是国有控股的区块链研究院。<br>
					研究院是在国企平台基础和民营技术优势下双方进行的强强联合。重庆市涪陵国有资产投资经营集团有限公司是重庆市涪陵区人民政府按照现代企业制度投资成立的国有大型独资企业，公司从事法律法规允许的投、融资业务；承担区政府的重点产业投资、重点项目投资和土地整治；负责国有资产投资、运营、管理等业务。涪陵国投自94年成立以来，经营规模和经营实力不断壮大，在涪陵区的金融业务、资源开发、基础设施建设、产业投资、重点项目建设等领域拥有较强的竞争优势。截止2016年底，涪陵国投资产总额达802亿元，净资产499亿元。涪陵国投是全区重点企业，享有多种政策优惠，助力研究院的政策和资本运作。<br>
					重庆数资科技公司是专注于互联网技术的科技型公司，在区块链技术方面具有较深的先期经验，数资科技将前期的区块链技术研发成果转入到研究院，助力研究院的技术研究基础。<br>
					研究院自2017年11月成立以来，已主办协办多场大型区块链行业活动，并参与相关政策文件的撰写，已具有一定的行业影响力。此外，研究院积极开展区块链技术的落地应用，“黑猪360”、“链箱”等项目都引起了较大的社会反响，其他项目落地也正在推进中。<br>
				</div>
      </div>
			<div class="office" id="anchor1">
        <div class="title-style">
          <p class="title-cn">办公环境</p>
          <p class="title-en">OFFICE ENVIRONMENT</p>
        </div>
				<div class="swiper-container" id="office">
					<ul class="swiper-wrapper">
						<li  class="swiper-slide" v-for="(item,index) in officeBanners" :key="index">
							<img :src="item.imgUrl" alt="" height="100%">
						</li>
					</ul>
				</div>
      </div>
			<div class="care" id="anchor2">
        <div class="title-style">
          <p class="title-cn">领导关怀</p>
          <p class="title-en">LEADERSHIP CARE</p>
        </div>
				<div class="wrapper" id="care">
					<ul class="poster-list">
						<li v-for="(item,index) in careBanners" :key="index">
							<img :src="item.imgUrl" alt="" height="100%">
						</li>
					</ul>
				</div>
      </div>
			<div class="activities" id="anchor3">
        <div class="title-style">
          <p class="title-cn">交流活动</p>
          <p class="title-en">EXCHANGE ACTIVITIES</p>
        </div>
				<div class="wrapper" id="activities">
					<ul class="poster-list">
						<li v-for="(item,index) in activitiesBanners" :key="index">
							<img :src="item.imgUrl" alt="" height="100%">
						</li>
					</ul>
				</div>
      </div>
			<div class="post" id="anchor4">
        <div class="title-style">
          <p class="title-cn">岗位内容</p>
          <p class="title-en">POST CONTENT</p>
        </div>
				<div class="email ft-b">HR邮箱：zhaopin@datbc.com</div>
				<ul class="job">
					<li>
						<h3>区块链开发工程师</h3>
						<p class="title">工作职责：</p>
						<p class="txt">
							1. &nbsp; 开发基于Hyperledger的区块链应用，研究区块链技术最新进展；<br>
							2. &nbsp; 搭建基于区块链的底层架构；<br>
							3. &nbsp; 开发相关业务应用
						</p>
						<p class="title">任职要求：</p>
						<p class="txt">
							1. &nbsp; 熟练掌握Golang、Java、Node.js、Python中的两种编程语言；<br>
							2. &nbsp; 有区块链项目的开发经验；熟练掌握以太坊/比特币/区块链的原理、机制和相关加密算法者优先；<br>
							3. &nbsp; 熟练掌握Linux基本命令、网络配置、常用软件及开发工具的安装配置;<br>
							4. &nbsp; 熟悉各种数据结构和算法，对密码学，安全协议和加密算法有研究；<br>
							5. &nbsp; 熟练阅读英文技术文档；<br>
							6. &nbsp; 良好的沟通表达能力，能够简明扼要地书写技术文档，能够把复杂的技术问题表达、描述清楚。 
						</p>
						<p class="red">* 加分项 *：</p>
						<p class="txt">
							熟练掌握Linux环境下的MySQL的安装维护、应用、优化   *熟悉Docker容器技术   *熟悉Key-Value数据库、或者Json文档数据库，例如MongoDB、LevelDB，CouchDB等； <br>  
							熟悉ZooKeeper与Kafka，对分布式系统有一定认识   *熟悉区块链技术原理，理解比特币网络或以太坊运行原理，理解共识算法；<br>
							熟悉公钥密码学的基本原理，理解公钥、私钥、数据加密解密、数字签名与验签过程；   *熟悉CA制证流程，熟悉OpenSSL库或BouncyCastle库。
						</p>
					</li>
					<li>
						<h3>web全栈工程师</h3>
						<p class="title">工作职责：</p>
						<p class="txt">
							1. &nbsp; 基于Java技术体系的Web应用开发，包括Web前端及后端开发。<br>
							2. &nbsp; 平台易用性与用户体验的持续改进；<br>
							3. &nbsp; 参与前后端前沿技术的探索。
						</p>
						<p class="title">任职要求：</p>
						<p class="txt">
							1. &nbsp; 喜欢创业文化<br>
							2. &nbsp; 喜欢突破自我，有意愿进行全栈式开发，能做后端编程，但也可以做简单的前端HTML/CSS/JS代码编程，对一个不复杂的功能，能够一人从前到后搞定，包括开发实现和问题调试排查。<br>
							3. &nbsp; 精通SSM或者SSH技术框架；<br>
							4. &nbsp; 熟悉主流的互联网开发技术；熟悉底层中间件、分布式技术（包括数据库、缓存、消息系统、热部署等）；<br>
							5. &nbsp; 熟悉RESTful Service；<br>
							6. &nbsp; 熟悉主流数据库如mysql，以及NoSQL； <br>
							7. &nbsp; 本科及以上学历 
						</p>
						<p class="red">* 优先条件 *：</p>
						<p class="txt">
							1. &nbsp; 对区块链技术有了解<br>  
							2. &nbsp; 如有 GitHub 账号或技术博客，请在简历中写明
						</p>
					</li>
					<li>
						<h3>行业研究员</h3>
						<p class="title">工作职责：</p>
						<p class="txt">
							1. &nbsp; 负责商业模式、经济等方向的行业分析与研究，并形成研究报告<br>
							2. &nbsp; 参与市场需求调研、资料收集、数据分析，并根据市场需求设计方案 <br>
							3. &nbsp; 协助业务部门进行需求调研、访谈及撰写报告
							4. &nbsp; 进行相关问题调研、收集相关资料、撰写相关报告、建立报告模板
						</p>
						<p class="title">任职要求：</p>
						<p class="txt">
							1. &nbsp; 相关专业本科以上学历<br>
							2. &nbsp; 有相关从业经历或相关研究、咨询经验者优先<br>
							3. &nbsp; 具备较好的经济金融专业基础，对行业动态具有敏感度和研究热情<br>
							4. &nbsp; 具有较强的文字表达能力和良好的沟通能力<br>
							5. &nbsp; 能够独立解决和分析问题，具有团队协作意识
						</p>
					</li>
				</ul>
      </div>
		</div>
		<foot-guide></foot-guide>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import headTop from '../components/header/head'
import navTop from '../components/header/nav'
import footGuide from '../components/footer/footGuide'
import { Utils } from '../service/Utils'
import { Carousel } from '../service/mCarousel'
export default {
  data () {
    return {
			widthLi: 'width: 20%',
      newsNav: [
        {
          index: 0,
          name: '关于我们',
          id: 'about'
        },
        {
          index: 1,
          name: '办公环境',
          id: 'office'
        },
        {
          index: 2,
          name: '领导关怀',
          id: 'care'
        },
        {
          index: 3,
          name: '交流活动',
          id: 'activities'
        },
        {
          index: 4,
          name: '岗位内容',
          id: 'post'
        }
			],
			careBanners: [
				{
					imgUrl: require('../images/about/care01.png')
				},
				{
					imgUrl: require('../images/about/care02.png')
				},
				{
					imgUrl: require('../images/about/care03.png')
				},
				{
					imgUrl: require('../images/about/care04.png')
				},
				{
					imgUrl: require('../images/about/care05.png')
				},
				{
					imgUrl: require('../images/about/care06.png')
				},
				{
					imgUrl: require('../images/about/care07.png')
				}
			],
			activitiesBanners: [
				{
					imgUrl: require('../images/about/activities01.png')
				},
				{
					imgUrl: require('../images/about/activities02.png')
				},
				{
					imgUrl: require('../images/about/activities03.png')
				},
				{
					imgUrl: require('../images/about/activities04.png')
				},
				{
					imgUrl: require('../images/about/activities05.png')
				},
				{
					imgUrl: require('../images/about/activities06.png')
				},
				{
					imgUrl: require('../images/about/activities07.png')
				},
				{
					imgUrl: require('../images/about/activities08.png')
				},
				{
					imgUrl: require('../images/about/activities09.png')
				}
			],
			officeBanners: [
				{
					imgUrl: require('../images/about/office01.png')
				},
				{
					imgUrl: require('../images/about/office02.png')
				},
				{
					imgUrl: require('../images/about/office03.png')
				},
				{
					imgUrl: require('../images/about/office04.png')
				},
				{
					imgUrl: require('../images/about/office05.png')
				},
				{
					imgUrl: require('../images/about/office06.png')
				},
				{
					imgUrl: require('../images/about/office07.png')
				},
				{
					imgUrl: require('../images/about/office08.png')
				},
				{
					imgUrl: require('../images/about/office09.png')
				},
				{
					imgUrl: require('../images/about/office10.png')
				},
				{
					imgUrl: require('../images/about/office11.png')
				},
				{
					imgUrl: require('../images/about/office12.png')
				},
				{
					imgUrl: require('../images/about/office13.png')
				},
				{
					imgUrl: require('../images/about/office14.png')
				},
				{
					imgUrl: require('../images/about/office15.png')
				},
				{
					imgUrl: require('../images/about/office16.png')
				},
				{
					imgUrl: require('../images/about/office17.png')
				},
				{
					imgUrl: require('../images/about/office18.png')
				},
				{
					imgUrl: require('../images/about/office19.png')
				},
				{
					imgUrl: require('../images/about/office20.png')
				},
				{
					imgUrl: require('../images/about/office21.png')
				},
				{
					imgUrl: require('../images/about/office22.png')
				},
				{
					imgUrl: require('../images/about/office23.png')
				},
				{
					imgUrl: require('../images/about/office24.png')
				},
				{
					imgUrl: require('../images/about/office25.png')
				},
				{
					imgUrl: require('../images/about/office26.png')
				},
				{
					imgUrl: require('../images/about/office27.png')
				},
				{
					imgUrl: require('../images/about/office28.png')
				},
				{
					imgUrl: require('../images/about/office29.png')
				},
				{
					imgUrl: require('../images/about/office30.png')
				},
				{
					imgUrl: require('../images/about/office31.png')
				},
				{
					imgUrl: require('../images/about/office33.png')
				},
				{
					imgUrl: require('../images/about/office33.png')
				},
				{
					imgUrl: require('../images/about/office34.png')
				},
				{
					imgUrl: require('../images/about/office35.png')
				},
				{
					imgUrl: require('../images/about/office36.png')
				},
				{
					imgUrl: require('../images/about/office37.png')
				},
				{
					imgUrl: require('../images/about/office38.png')
				},
				{
					imgUrl: require('../images/about/office39.png')
				},
				{
					imgUrl: require('../images/about/office40.png')
				},
				{
					imgUrl: require('../images/about/office41.png')
				},
				{
					imgUrl: require('../images/about/office44.png')
				},
				{
					imgUrl: require('../images/about/office43.png')
				},
				{
					imgUrl: require('../images/about/office44.png')
				},
				{
					imgUrl: require('../images/about/office45.png')
				},
				{
					imgUrl: require('../images/about/office46.png')
				}
			]
    }
  },
  mounted () {
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 3000,
			slidesPerView: 3,
			spaceBetween: 20,
			loop : true
		})
		window.addEventListener('scroll', Utils.mouseMove);
		this.setCarousel();
  },
  methods: {
		setCarousel () {
			var care = new Carousel('care');
			var activities = new Carousel('activities');
			var wrapper1 = document.getElementById('care');
			var wrapper2 = document.getElementById('activities');
			var opts = {
				index: 0,
				active: 'active',
				scale: 0.66,
				duration: 300,
				locked: true,
				diff: 0.863
			};
			care.init(wrapper1, opts);
			activities.init(wrapper2, opts);
			this.IntervalCare = setInterval(function () {
				care.next();
			}, 2800)
			this.IntervalActivities = setInterval(function () {
				activities.next();
			}, 3000)
		},
	},
	components: {
		headTop,
		footGuide,
		navTop
	},
	destroyed () {
		clearInterval(this.IntervalCare);
		clearInterval(this.IntervalActivities);
	},
}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	#about {
		overflow: hidden;
		.banner {
      @include wh(100%,332px);
      background-color: #4d7b9c;
      background: url('../images/about/banner.png') no-repeat 0 0;
      background-size: 100% 100%;
		}
		.about {
			.txt {
				width: 67%;
				margin: 20px auto 0;
				@include sc(14px,$blue);
				line-height: 2.16;
				letter-spacing: 0.2px;
				text-align: justify;
			}
		}
		.care, .activities {
			margin: 0 auto;
			text-align: center;
			.wrapper {
				width: 100%;
				background: $f4;
				margin: 80px auto 100px;
				.poster-list {
					overflow: hidden;
					position: relative;
					top: -30px;
					width: 100%;
					height: 408px;
					li {
						height: 408px;
						background-color: #fff9f9;
						overflow: hidden;
					}
				}
			}
		}
		.office {
			.swiper-container {
				@include wh(100%,303px);
				background: $f4;
				overflow: visible;
				margin: 90px auto 100px;
				.swiper-wrapper {
					position: relative;
					top: -50px;
					.swiper-slide {
						height: 255px;
					}
				}
			}
		}
		.post {
			margin-bottom: 30px;
			.email {
				@include sc(15px,#2b1e1f);
				line-height: 1.67;
				margin: 25px 16.5% 30px;
			}
			.job {
				li {
					text-align: left;
					padding: 20px 16.5% 30px;
					line-height: 30px;
					h3 {
						@include sc(18px,$blue);
						font-weight: bold;
					}
					.title {
						@include sc(14px,$g3);
						font-weight: bold;
					}
					.txt {
						@include sc(14px,$g6);
					}
					.red {
						@include sc(14px,#f72a33);
						font-weight: bold;
					}
				}
				li:nth-child(even) {
					background: $f4;
				}
			}
		}
	}
</style>