<template>
  <header id='head_top'>
    <div class="container">
      <a href="/home" class="header-logo left">
        <img src="../../images/home/logo.png" width="125px">
      </a>
      <ul class="nav">
        <li @click="toLink(item)" v-for="item in navList" :key="item.index">{{item.name}}</li>
      </ul>
    </div>
  </header>
</template>

<script>
  import $ from 'jquery'
  import { Utils } from '../../service/Utils'
  export default {
    data () {
      return {
        navList: [
          {
            index: 0,
            name: '首页',
            path: 'home'
          },
          {
            index: 1,
            name: '新闻动态',
            path: 'news'
          },
          {
            index: 2,
            name: '技术应用',
            path: 'technical'
          },
          {
            index: 3,
            name: '交流平台',
            path: 'communication'
          },
          {
            index: 4,
            name: '关于我们',
            path: 'about'
          }
        ]
      }
    },
    mounted () {
      if (window.location.href.indexOf('home') !== -1) {
        $('#head_top').removeClass('position-static');
      } else {
        $('#head_top').addClass('position-static');
      }
    },
    computed: {
    },
    methods: {
      toLink (nav) {
        if (window.location.href.indexOf('home') !== -1) {
          Utils.scrollToAnchor('anchor' + nav.index);
        } else {
          this.$router.push('/' + nav.path);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  #head_top.position-static {
    position: static;
  }
  #head_top{
    background-color: $blue;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    @include wh(100%, 60.5px);
    line-height: 60.5px;
    .container {
      clear: both;
      @include wh(80%, 60.5px);
      margin: 0 auto;
    }
    .header-logo {
      float: left;
      position: relative;
      img {
        vertical-align: middle;
      }
    }
    .nav {
      overflow: hidden;
      margin: 0;
      float: right;
      li {
        @include sc(14px,#f3f3f5);
        width: 80px;
        text-align: center;
        margin-right: 0;
        float: left;
        cursor: pointer;
      }
      a {
        text-decoration: none;
      }
    }
  }
</style>
