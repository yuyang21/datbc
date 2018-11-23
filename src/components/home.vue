<template>
    <div id="home">
        <head-top></head-top>
        <Swiper id="anchor0" interval="5000" autoPlay="false" class="swiper">
            <Slide>
                <img src="../images/home/banner-01.png" width="120%" class="banner01">
                <p class="text">用区块链技术<span>重塑</span>社会信任</p>
            </Slide>
        </Swiper>
        <section id="anchor1" class="news">
            <div class="title-style1">
                <p class="en">NEWS</p>
                <p class="cn">新闻动态</p>
            </div>
            <ul>
                <li v-for="(item,index) in newsList" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p class="title">{{item.title}}</p>
                    <p class="content">{{item.content}}</p>
                    <router-link tag="div" :to="{path: '/news-detail/institute/' + item.id}" class="detail">查看详情
                    </router-link>
                </li>
            </ul>
            <router-link tag="div" :to="{path: '/news'}" class="learn-more"><p>更多动态</p></router-link>
        </section>
        <section id="anchor2" class="technical">
            <div class="title-style2">
                <p class="en">TECHNICAL APPLICATION</p>
                <p class="cn">技术应用</p>
            </div>
            <ul>
                <li>
                    <div class="img-box" @click="toTechnical(0)"><img src="../images/home/technical-01.png" alt="">
                    </div>
                    <div class="di"></div>
                    <p>技术应用</p>
                </li>
                <li>
                    <div class="img-box" @click="toTechnical(1)"><img src="../images/home/technical-02.png" alt="">
                    </div>
                    <div class="di"></div>
                    <p>技术沙龙</p>
                </li>
                <li>
                    <div class="img-box" @click="toTechnical(2)"><img src="../images/home/technical-03.png" alt="">
                    </div>
                    <div class="di"></div>
                    <p>行业报告</p>
                </li>
            </ul>
        </section>
        <section id="anchor3" class="communication">
            <div class="title-style1">
                <p class="en">COMMUNICATION PLATFORM</p>
                <p class="cn">交流平台</p>
            </div>
            <p class="line"></p>
            <p class="text">重庆数资区块链研究院，是重庆市涪陵区政府倡议发起、重庆涪陵国有资产投资经营集团牵头成立的国有控股的区块链研究院。研究院以”
                用区块链技术重塑社会信任”为使命，采用“政府指导、企业主导、产研结合、市场化运作”的模式，深耕于区块链技术研发与行业应用落地，致力于成为国内顶尖、国际知名的区块链研究团队和技术服务商。研究院总部位于重庆、北京设有研发中心、成都设有分部。</p>
            <router-link tag="div" :to="{path: '/communication'}" class="learn-more"><p>更多动态</p></router-link>
        </section>
        <section id="anchor4" class="about">
            <div class="title-style2">
                <p class="en">ABOUT US</p>
                <p class="cn">关于我们</p>
            </div>
            <div class="container">
                <p>重庆数资区块链研究院（以下简称研究院）由重庆涪陵国有资产投资经营集团与重庆数资科技公司联合成立，是国有控股的区块链研究院。</p>
                <p>
                    研究院是在国企平台基础和民营技术优势下双方进行的强强联合。重庆市涪陵国有资产投资经营集团有限公司是重庆市涪陵区人民政府按照现代企业制度投资成立的国有大型独资企业，公司从事法律法规允许的投、融资业务；承担区政府的重点产业投资、重点项目投资和土地整治；负责国有资产投资、运营、管理等业务。涪陵国投自94年成立以来，经营规模和经营实力不断壮大，在涪陵区的金融业务、资源开发、基础设施建设、产业投资、重点项目建设等领域拥有较强的竞争优势。截止2016年底，涪陵国投资产总额达802亿元，净资产499亿元。涪陵国投是全区重点企业，享有多种政策优惠，助力研究院的政策和资本运作。</p>
                <p>重庆数资科技公司是专注于互联网技术的科技型公司，在区块链技术方面具有较深的先期经验，数资科技将前期的区块链技术研发成果转入到研究院，助力研究院的技术研究基础。</p>
                <p class="margin-b-15">
                    研究院自2017年11月成立以来，已主办协办多场大型区块链行业活动，并参与相关政策文件的撰写，已具有一定的行业影响力。此外，研究院积极开展区块链技术的落地应用，“黑猪360”、“链箱”等项目都引起了较大的社会反响，其他项目落地也正在推进中。</p>
            </div>
            <router-link tag="div" :to="{path: '/about'}" class="learn-more"><p>了解更多</p></router-link>
            <img src="../images/home/about-di.png" class="about-di">
        </section>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
    import headTop from '../components/header/head';
    import footGuide from '../components/footer/footGuide';
    import {Utils} from '../service/Utils'
    import {
        Swiper,
        Slide
    } from '../plugins/vue-swiper-component';

    export default {
        name: 'hello',
        data() {
            return {
                newsList: [

                    {
                        id: '7',
                        imgUrl: require('../images/home/news-07.png'),
                        title: "2018重庆数资区块链政企峰会举办，引爆重庆涪陵区块链利好",
                        content: "2018年10月19日，重庆涪陵，一场区块链产业盛宴大幕被拉开。由重庆市涪陵区人民政府主办，由重庆市涪陵区经信委、重庆涪陵高新技术产业开发区、重庆数资区块链研究院等单位联合承办的“2018重庆数资区块链峰会”在重庆涪陵隆重举行。会议由重庆涪陵区委常委、统战部长夏艺同志主持。",
                    },
                    {
                        id: '6',
                        imgUrl: require('../images/home/news-06.png'),
                        title: "重庆数资区块链研究院受邀出席中国投资年会有限合伙人峰会区块链专题活动",
                        content: "2018年9月20日-21日，由投中信息、投中资本主办、投中网协办的第12届中国投资年会有限合伙人峰会在深圳召开。本次峰会的主题是“投资转折”，重庆数资区块链研究院院长应邀参加峰会区块链专题活动。",
                    },

                    {
                        id: '5',
                        imgUrl: require('../images/home/news-05.png'),
                        title: "重庆数资区块链研究院院长刘刚： 引导区块链技术与实体经济融合",
                        content: "“区块链应用落地的主战场应该是实体经济产业，要引导区块链技术与实体经济深度融合，它的价值才能更充分体现。”8月30日，重庆数资区块链研究院院长刘刚接受重庆日报记者采访时表示，区块链从业者应利用区块链技术使之更好地服务实体经济，改善生产生活。",
                    },
                    {
                        id: '2',
                        imgUrl: require('../images/home/news-02.png'),
                        title: '数字世界博览会在蓉举行，数资区块链研究院倍受瞩目',
                        content: '2018年8月16日，2018iWorld数字世界博览会在成都世纪城新国际会展中心隆重召开，本届博览会为期3天，通过展览展示、高峰论坛、商贸洽谈等多种形式，全方位探讨新时代背景下数字经济的未来发展形式。'
                    }
                ]
            }
        },
        mounted() {
            Utils.scrollToAnchor();
            document.querySelector('.banner01').style.height = document.body.clientHeight - 50 + 'px'
        },
        created() {
        },
        methods: {
            toTechnical(index) {
                this.$router.push({path: '/technical#anchor' + index});
            }
        },
        components: {
            headTop,
            footGuide,
            Swiper,
            Slide
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/mixin';

    #home {
        padding-top: 50px;
        .margin-lr-12 {
            margin-left: 12px;
            margin-right: 12px;
        }
        .margin-t-2 {
            margin-top: 2px;
        }
        .title-style1 {
            font-weight: bold;
            .en {
                @include sc(12px, $blue);
                line-height: 3.5;
            }
            .cn {
                @include sc(35px, $blue);
                line-height: 1.11;
                &:after {
                    display: block;
                    content: '';
                    margin: -14.5px auto;
                    @include wh(200px, 23.5px);
                    background-color: $red;
                }
            }
        }
        .title-style2 {
            width: 25%;
            margin: 0 auto;
            .en {
                line-height: 2.08;
                letter-spacing: 1px;
                margin-bottom: 6px;
                @include sc(12px, $fc);
            }
            .cn {
                line-height: 1.11;
                letter-spacing: 2.1px;
                @include sc(35px, $fc);
                position: relative;
                &:before, &:after {
                    @include wh(26.5px, 4px);
                    background: $fc;
                    border-radius: 2px;
                    display: block;
                    content: '';
                    position: absolute;
                    bottom: 16.5px;
                }
                &:before {
                    left: 0;
                }
                &:after {
                    right: 0;
                }
            }
        }
        .learn-more {
            @include wh(75.5px, 26.5px);
            border-radius: 5px;
            background-color: $blue;
            border: solid 1px $blue;
            float: right;
            position: relative;
            z-index: 1;
            margin-right: 20%;
            cursor: pointer;
            p {
                @include sc(12px, $fc);
                display: block;
                height: 26px;
                line-height: 26px;
            }
            &:after {
                @include wh(29px, 10.5px);
                content: '';
                display: block;
                background: url('../images/home/more-arrow.png') no-repeat center center;
                background-size: 100% 100%;
                position: absolute;
                right: -47px;
                top: 7.6px;
            }
        }
        .news, .technical, .communication, .about {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
        }
        .news {
            padding: 53px 0 83px;
            box-sizing: border-box;
            ul {
                overflow: hidden;
                margin: 58px auto 0;
                text-align: center;
                box-sizing: border-box;
                width: 85%;
                padding: 10px 10px 32px;
                li {
                    float: left;
                    @include wh(23.45%, auto);
                    margin: 0 auto;
                    margin-right: 18px;
                    box-sizing: border-box;
                    box-shadow: 0 0 8px 0 rgba(13, 22, 78, 0.14);
                    border-radius: 7.5px;
                    background: $fc;
                    text-align: justify;
                    img {
                        @include wh(100%, auto);
                    }
                    .title {
                        line-height: 1.45;
                        margin-top: 12px;
                        height: 77px;
                        @include sc(16px, $g3);
                        padding: 0 12px;
                    }
                    .content {
                        line-height: 1.6;
                        @include sc(13px, $g6);
                        height: 63px;
                        padding: 0 12px;
                        overflow: hidden;
                    }
                    .detail {
                        text-align: center;
                        @include sc(12px, $red);
                        text-decoration: underline;
                        cursor: pointer;
                        padding: 15.5px 0;
                    }
                }
                li:last-child {
                    margin-right: 0;
                }
            }
        }
        .technical {
            @include wh(100%, 599.5px);
            background: url('../images/home/technical-bg.png') no-repeat center center;
            background-size: 100%;
            padding-top: 37px;
            ul {
                overflow: hidden;
                margin: 111.5px auto;
                width: 80%;
                li {
                    float: left;
                    width: 33.33%;
                    .img-box {
                        @include wh(190px, 190px);
                        background: $fc;
                        border-radius: 50%;
                        padding: 40.5px;
                        box-sizing: border-box;
                        margin: 0 auto;
                        cursor: pointer;
                        img {
                            width: 100%;
                        }
                    }
                    .di {
                        background: url('../images/home/technical-di.png') no-repeat center center;
                        background-size: 100% 100%;
                        @include wh(145px, 43px);
                        margin: 13px auto;
                    }
                    p {
                        line-height: 2.17;
                        @include sc(18px, $fc);
                    }
                }
                li:nth-child(3) {
                    .img-box {
                        padding: 38.5px 29px;
                    }
                }
            }
        }
        .communication {
            padding: 60px 0 53.5px;
            overflow: hidden;
            .line {
                @include wh(2px, 40px);
                background-color: $g9;
                margin: 35px auto 13.5px;;
            }
            .text {
                margin: 0 auto;
                text-align: justify;
                width: 67%;
                line-height: 2.33;
                @include sc(16px, $black);
                margin-bottom: 58px;
            }
        }
        .about {
            .margin-b-15 {
                margin-bottom: 15px !important;
            }
            padding: 35.5px 0 45px;
            @include wh(100%, auto);
            background: linear-gradient(to bottom, #3f6ffe, #1d4ad0);
            position: relative;
            margin-bottom: 46.5px;
            .container {
                line-height: 2.33;
                width: 67%;
                text-align: justify;
                margin: 40.5px auto 0px;
                p {
                    margin-bottom: 30px;
                    @include sc(16px, $fc);
                }
            }
            .about-di {
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                @include wh(100%, 121px);
            }
        }
        .swiper {
            text-align: center;
            img {
            }
            .banner01 {
                animation: bannerScale 3s ease-in-out forwards;
            }
            @keyframes bannerScale {
                0% {
                    transform: scale(1.2) translateX(-10%);
                }
                100% {
                    transform: scale(1) translateX(-10%);
                }
            }
            @keyframes bannerTranslateY {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(200px);
                }
            }
            .text {
                @include sc(50px, $black);
                position: absolute;
                z-index: 1;
                top: 12%;
                left: 25%;
                font-weight: bold;
                line-height: 0.44;
                z-index: 1;
                animation: bannerTranslateY 2s ease forwards;
                letter-spacing: 10px;
                span {
                    @include sc(50px, $red);
                    font-weight: bold;
                }
            }
        }
    }

</style>
