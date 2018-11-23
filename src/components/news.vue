<template>
	<div id="news">
		<head-top></head-top>
    <div class="banner"></div>
		<nav-top :newsNav="newsNav"></nav-top>
		<div class="news-list">
      <div class="institute news-list-comm" id="anchor0">
        <div class="title-style">
          <p class="title-cn">研究院新闻</p>
          <p class="title-en">NEWS</p>
        </div>
        <ul>
          <li v-for="(item,index) in newsList.instituteList.list" :key="index">
            <div class="left"><img :src="item.imgUrl" alt=""></div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="content">{{item.content}}</p>
              <p class="time"><img src="../images/time.png" width="2%" height="2%">{{item.time}}</p>
              <router-link tag="div" :to="'/news-detail/institute/' + item.id" class="detail"><p>查看详情</p></router-link>
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
      <div class="industry news-list-comm" id="anchor1">
        <div class="title-style">
          <p class="title-cn">行业新闻</p>
          <p class="title-en">NEWS</p>
        </div>
        <ul>
          <li v-for="(item,index) in newsList.industryList.list" :key="index">
            <div class="left"><img :src="item.imgUrl" alt=""></div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="content">{{item.content}}</p>
              <p class="time"><img src="../images/time.png" width="2%">{{item.time}}</p>
              <router-link tag="div" :to="'/news-detail/industry/' + item.id"  class="detail"><p>查看详情</p></router-link>
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
      <div class="policy news-list-comm" id="anchor2">
        <div class="title-style">
          <p class="title-cn">政策标准</p>
          <p class="title-en">NEWS</p>
        </div>
        <ul>
          <li v-for="(item,index) in newsList.policyList.list" :key="index">
            <div class="left"><img :src="item.imgUrl" alt=""></div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="content">{{item.content}}</p>
              <p class="time"><img src="../images/time.png" width="2%">{{item.time}}</p>
              <router-link tag="div" :to="'/news-detail/policy/' + item.id" class="detail"><p>查看详情</p></router-link>
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
import {
  newsList
} from '../service/getData'
export default {
  data () {
    return {
      newsList: {
        instituteList: {
          list: [],
          totalPage: 1
        },
        industryList: {
          list: [],
          totalPage: 1
        },
        policyList: {
          list: [],
          totalPage: 1
        }
      },
      newsNav: [
        {
          index: 0,
          name: '研究院新闻',
          id: 'institute'
        },
        {
          index: 1,
          name: '行业新闻',
          id: 'industry'
        },
        {
          index: 2,
          name: '政策标准',
          id: 'policy'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', Utils.mouseMove);
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews () {
      newsList().then((res) => {
        this.newsList = res.data;
        // console.log(res.data)
      })
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
  #news {
    .margin-t-2 {
      margin-top: 2px;
    }
    .banner {
      @include wh(100%,392.5px);
      background-color: #4d7b9c;
      background: url('../images/news/banner.png') no-repeat 0 0;
      background-size: 100% 100%;
    }
    .news-list {
      padding-bottom: 80px;
      margin: 0 auto;
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
            @include sc(12px,$blue);
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
        }
        .page.active {
          background: $blue;
          p {
            color: $fc;
          }
        }
      }
    }
  }
</style>