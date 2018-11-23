<template>
	<div id="technical">
		<head-top></head-top>
    <div class="banner"></div>
		<nav-top :newsNav="newsNav"></nav-top>
		<div class="news-list">
      <div class="application" id="anchor0">
        <div class="title-style">
          <p class="title-cn">技术应用</p>
          <p class="title-en">TECHNICAL APPLICATION</p>
        </div>
        <div class="baas">
					<img src="../images/technical/baas.png" alt="" width="100%"> <br><br>
					<p class="title ft-b">Baas-区块链即服务平台</p>
					<div class="content">
						BaaS平台可提供初步的产品信息的记录和整理，数据加密存储和传输功能；平台支持多种智能合约编程语言，拥有便利的合约测试环境，开发人员在此基础上针对不同产品进行定制性调整，更加通用便捷。<br>
						平台以区块链底层技术为核心，提供账本数据、智能合约一体化服务的平台，可支持私有数据中心和云部署，具备初步完备的区块链服务平台，可同时支撑多个区块链用户系统；标准的SDK与API Service，使用者可根据具体的业务应用场景和业务特性定制智能合约。<br>
						将区块链系统、操作系统、底层硬件等抽象为独立的服务单元，向社会公众、组织机构等用户提供便利的区块链构建、运行、维护等服务，帮助用户快速实现数据共享、智能合约部署、交易处理。<br>
						设计目标：<br>
						• 建立完备的区块链服务平台，同时支撑多个区块链系统，多租户；<br>
						• 弹性伸缩、动态加入节点，动态加入组织、机构、联盟；<br>
						• 标准的SDK与API Service，用户可根据具体的业务特性定制智能合约。<br>
						具有的特点：<br>
						1. 低成本<br>
						利用云计算平台优势实现大规模、低成本;用户规模越大，单位成本越低,业务部署越多，区块链应用生态环境越好。<br>
						2. 存储优势<br>
						数据实时备份，永久备份；容量超大，存储空间理论无上限。<br>
						3. 运行优势<br>
						区块链系统极速部署；支持私有云与公有云；整体系统可用性高。<br>
						4. 概念简化<br>
						区块链系统的计算节点、Key-Value存储、智能合约被封装成单一的服务单元；复杂的密码学算法、共识排序算法、技术实现被抽象为简单的RPC-SDK和REST接口
					</div>
        </div>

        <div class="chain">
					<img src="../images/technical/chain.png" alt="" width="100%"> <br>
					<p class="title ft-b">基础产品架构——臻品链</p>
					<div class="content">
						【臻品链】是研究院在区块链技术研发领域的基础产品架构。<br>
						臻品链是基于Hyperledger Fabric技术开发的联盟链系统，可实现生产过程数据信息的采集、记录、储存和管理。具有多中心化、公开透明、数据不可篡改、数据共享、点对点传输等技术特点。每个节点上的信息都可形成信息和价值的共享链条，做到产品及信息的来源可查，去向可追，真实可信。<br>
						臻品链对于传统行业实现产业升级具有革命性的支撑，尤其是生产制造等实体经济借助区块链技术更易实现弯道超车、在红海市场中脱颖而出。臻品链在产品溯源、信息记录、重构信用上打下坚实的底层技术基础，当实体企业的产品走出工厂、进入市场流通环节后，消费者和用户得以轻松辨识产品真伪及全程完整生产信息，从而加速消费决策、增强用户粘性、提升品牌认知，并最终为推动社会信用重建作出贡献。<br>
					</div>
        </div>

        <div class="case">
					<img src="../images/technical/case.png" alt="" width="100%"> <br>
					<p class="title ft-b">技术案例</p>
					<div class="content">
						<strong>⑴ 质量溯源-区块黑猪 </strong><br>
						该项目属极具代表性的农产品区块链溯源应用，典型应用包括【涪陵黑猪】、【苏淮猪养殖溯源】。<br>
						★ 涪陵黑猪是国内首个区块链溯源黑猪项目，利用区块链技术记录养殖、屠宰、物流运输和门店销售的全流程数据，实现精细养猪、规范管理等智慧养殖的整体解决方案。<br>
						★ 与南京农业大学淮安研究院合作的“苏淮猪”溯源项目，是国内首个科研型农产品溯源项目。科研养殖“苏淮猪”的日常生活数据，均记录在链上。消费者通过扫码可看到生猪成长过程中的生活点滴，让消费者买得安心、吃得放心。<br><br>
						<strong>⑵ 信息存证-链箱</strong> <br>
						国内首个包装箱行业供应链协同工作平台。 <br>
						链箱是采用区块链技术开发包装箱行业数据信息协同平台，分布式记录包装箱企业、生产企业、和物流企业的运输流转过程中的信息，实现木箱及货物的基本信息、特征、编号等信息存入账本记录库中； <br>
						全程跟踪，精准定位；引入数字签名技术，发生纠纷，能够及时溯源，精准定责。<br><br>
						<strong>⑶ 智能合约-PY交易站</strong> <br>
						基于区块链的智能合约技术，搭建去中心化的游戏道具帐号系统。 <br>
						利用区块链技术代替平台第三方的审核流程和人工服务环节，节省交易成本、交易时间，同时提高账号账号信息安全。 <br>
						该项目已成功在线运行，验证区块链智能合约技术、获得用户在线反馈，为区块链技术升级和完善奠定的基础。<br><br>
						<strong>⑷ 链上臻品商城</strong> <br>
						商城定位：区块链溯源、科学化农产品、销售推广平台 <br>
						该项目依托研究院区块链技术、与科学化养殖单位共同合作，将质量溯源的高品质农产品，销售推广给消费者。
					</div>
        </div>
      </div>
      <div class="exchange news-list-comm" id="anchor1">
        <div class="title-style">
          <p class="title-cn">技术沙龙</p>
          <p class="title-en">TECHNOLOGY EXCHANGE</p>
        </div>
        <ul>
          <li v-for="(item,index) in exchangeList.list" :key="index">
            <div class="left"><img :src="item.imgUrl" alt=""></div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="content">{{item.content}}</p>
              <p class="time"><img src="../images/time.png" width="2%">{{item.time}}</p>
              <router-link tag="div" :to="'/news-detail/exchange/' + item.id"  class="detail"><p>查看详情</p></router-link>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="pagination">
        <div class="pre"><p>上一页</p></div>
        <div class="page active"><p>1</p></div>
        <div class="page"><p>2</p></div>
        <div class="next"><p>下一页</p></div>
      </div> -->
      <div class="reports" id="anchor2">
        <div class="title-style">
          <p class="title-cn">行业报告</p>
          <p class="title-en">INDUSTRY REPORTS</p>
        </div>
        <ul>
          <li v-for="(item,index) in newReportsList" :key="index" class="cursor">
            <a :href="'/static/pdf/reports'+ item.id + '.pdf'" target="_blank">
              <div class="left title ellipsis">{{item.title}}</div>
              <div class="right time">{{item.time}}</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="pagination">
        <div class="pre" :class="{'cursor-no': reportsPage === 1}"><p @click="getReportsList(reportsPage - 1,6)">上一页</p></div>
        <div class="page" v-for="(item,index) in reportsPageList" :key="index" :class="{'active': reportsPage === item}" @click="getReportsList(item,6)"><p>{{item}}</p></div>
        <div class="next" :class="{'cursor-no': reportsPage === reportsPageList.length}"><p @click="getReportsList(reportsPage + 1,6)">下一页</p></div>
      </div>
    </div>
		<foot-guide></foot-guide>
	</div>
</template>

<script>
import $ from 'jquery'
import headTop from '../components/header/head'
import navTop from '../components/header/nav'
import footGuide from '../components/footer/footGuide'
import { Utils } from '../service/Utils'
export default {
  data () {
    return {
			exchangeList: {
				list: [
					{
						"id": "1",
						"title": "溯源追踪或成区块链应用的“热点”",
						"content": "又到一年的3.15，防伪打假再次被推倒风口浪尖！屡禁不止的假冒伪劣产品让国人头痛不已，315打假维权越来越受到消费者的关注。国务院办公厅在2016年初，提出了《关于加快推进重要产品追溯体系建设的意见》，推进食用农产品、食品、药品等与国民生活息息相关产品的追溯制度。溯源追踪、从源头抓起，解决假冒伪劣产品的问题。",
						"time": "2018/03/15",
						"imgUrl": "../static/images/institute-01.png"
					},
					{
						"id": "2",
						"title": "追本溯源，从技术谈起",
						"content": "当你刚买了二十只阳澄湖大闸蟹，正在对它的真实性心里打鼓时，你会怎么做？根据外观看一看？还是拿出包装打开手机扫一扫？",
						"time": "2018/04/13",
						"imgUrl": "../static/images/institute-02.png"
					},
					{
						"id": "3",
						"title": "区块链技术应用",
						"content": "溯源应用：紫云股份基于区块链技术专利申请获受理 7月11日据证券日报报道，紫云股份发布公告，称公司申请的基于区块链的溯源防伪标签、加工工艺应用服务平台专利获得国家知识产权局的受理。",
						"time": "2018/07/13",
						"imgUrl": "../static/images/institute-03.png"
					},
					{
						"id": "4",
						"title": "分享课堂第一期",
						"content": "近日，数资区块链研究院开设的分享课堂第一期在北京研发中心正式开课，本期的分享内容是星际文件系统IPFS（InternetPlanetary File System），由研究院资深的技术人员为大家带来技术知识分享并与业内人士进行深入的探讨。",
						"time": "2018/07/16",
						"imgUrl": "../static/images/institute-04.png"
					},
					{
						"id": "5",
						"title": "区块链能否落地生根",
						"content": "目前，全球已有超过1500家企业进行区块链技术方面的研发和应用试验，其中既包括像IBM、微软这样的传统科技巨头，也包括JP摩根、美国银行等实力雄厚的金融巨鳄，还包括遍布全球的近千家区块链初创企业。",
						"time": "2018/07/23",
						"imgUrl": "../static/images/institute-04.png"
					}
				],
				totalPage: 1
			},
			reportsList: [
				{
					id: 1,
					title: '鲸准区块链垂直行业报告-溯源 ',
					time: ' 2018-05-31'
				},
				{
					id: 2,
					title: '《2018中国区块链底层开放平台研究报告》',
					time: ' 2018-06-11'
				},
				{
					id: 3,
					title: '《2018区块链发展报告》 ',
					time: ' 2018-06-14'
				},
				{
					id: 4,
					title: '中国区块链50城——重庆：激进西南领头羊欲抢风口建“链岛” ',
					time: ' 2018-07-02'
				},
				{
					id: 5,
					title: '区块链垂直行业报告：物联网 ',
					time: ' 2018-07-03'
				},
				{
					id: 6,
					title: '人民创投+链塔智库',
					time: ' 2018-07-05'
				},
				{
					id: 7,
					title: '中国区块链市场应用专题分析 ',
					time: ' 2018-07-11'
				},
				{
					id: 8,
					title: '星际文件系统IPFS生态研究报告',
					time: ' 2018-07-19'
				},
				{
					id: 9,
					title: '行业报告（2018年1月—7月） ',
					time: ' 2018-08-01'
				},
				{
					id: 10,
					title: '区块链+供应链及溯源行业专题报告',
					time: ' 2018-08-03'
				},
				{
					id: 11,
					title: '零知识证明应用到区块链中的技术挑战 ',
					time: ' 2018-08-08'
				},
				{
					id: 12,
					title: '区块链视角下的B2C电商平台产品信息追溯和防伪模型',
					time: ' 2018-08-15'
				},
				{
					id: 13,
					title: '中国区块链溯源行业研究报告 ',
					time: ' 2018-08-22'
				},
				{
					id: 14,
					title: '年度中国区块链专利报告',
					time: ' 2018-09-05'
				},
				{
					id: 15,
					title: '中国信通院发布《区块链白皮书（2018年）》',
					time: ' 2018-09-07'
				},
				{
					id: 16,
					title: '区块链医疗数据研究报告 ',
					time: ' 2018-09-14'
				}
			],
			reportsPageList: [],
			reportsPage: 1,
			newReportsList: [],
      newsNav: [
        {
          index: 0,
          name: '技术应用',
          id: 'application'
        },
        {
          index: 1,
          name: '技术沙龙',
          id: 'exchange'
        },
        {
          index: 2,
          name: '行业报告',
          id: 'reports'
        }
      ]
    }
  },
  mounted () {
		Utils.scrollToAnchor();
    window.addEventListener('scroll', Utils.mouseMove);
  },
  created () {
    for (var i = 0; i < this.reportsList.length / 6; i++) {
      this.reportsPageList.push(i + 1);
    }
    this.getReportsList(1, 6);
  },
  methods: {
		getReportsList (page,size) {
			if (page === 0 || page === this.reportsPageList.length + 1) {
				return;
			} else {
				this.reportsPage = page;
				this.newReportsList = [];
				this.newReportsList = this.reportsList.slice((page - 1) * size , size * page);
			}
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
	#technical {
    .margin-t-2 {
      margin-top: 2px;
    }
    .banner {
      @include wh(100%,332px);
      background-color: #4d7b9c;
      background: url('../images/technical/banner.png') no-repeat 0 0;
      background-size: 100% 100%;
		}
    .news-list {
      margin: 0 auto 50px;
      .pagination {
        margin: 28px auto;
        text-align: center;
        .pre, .next, .page {
          border-radius: 2.5px;
          text-align: center;
          display: inline-block;
          background-color: $fc;
          border: solid 1px #d0cece;
          p {
            @include sc(9px,$blue);
            font-weight: bold;
            line-height: 30px;
            display: inline-block;
            width: 100%;
          }
        }
        .pre, .next {
          @include wh(55px, 30px);
          cursor: pointer;
        }
        .page {
          @include wh(30px, 30px);
          margin: 2px;
        }
        .page.active {
          background-color: $blue;
          p {
            color: $fc;
          }
        }
      }
			.application {
				.baas, .chain, .case {
					padding: 0 16.5%;
					img {
						display: block;
					}
					.title {
						line-height: 1;
						@include sc(18px,$g3);
						margin-bottom: 12px;
					}
					.content {
						line-height: 2;
						text-align: justify;
						@include sc(14px,$g6);
						overflow: hidden;
						margin-bottom: 60px;
					}
				}
			}
			.reports {
				ul {
					li {
						@include wh(100%,76px);
						line-height: 76px;
						overflow: hidden;
						padding: 0 16.5%;
    				box-sizing: border-box;
						background: $fc;
						.left {
							width: 70%;
							@include sc(16px,$g3);
						}
						.right {
							width: 20%;
							@include sc(16px,$g9);
						}
					}
          li:nth-child(even) {
            background: $f4;
          }
				}
			}
    }
  }
</style>