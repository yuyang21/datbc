<template>
  <nav id="nav_top">
    <ul class="nav">
      <li :style="widthLi" v-for="item in newsNav" :key="item.index" :class="{'active': activeTab === item.index}" @click="toggleTab(item)"><a>{{item.name}}</a></li>
    </ul>
  </nav>
</template>
<script>
  import { Utils } from '../../service/Utils'
  export default {
    data () {
      return {
        activeTab: 0
      }
    },
    props: ['newsNav', 'widthLi'],
    mounted () {
    },
    computed: {
    },
    methods: {
      toggleTab (nav) {
        if (this.activeTab === nav.index) {
          return;
        }
        this.activeTab = nav.index;
        var offsetTop = document.getElementById('anchor' + nav.index).offsetTop;
        window.scrollTo(0, offsetTop - 100);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  nav {
    box-shadow: 0 0 8px 0 rgba(13, 22, 78, 0.14);
    border-radius: 5px;
    .nav {
      overflow: hidden;
      box-sizing: border-box;
      text-align: center;
      line-height: 4.33;
      @include wh(67%,54px);
      margin: 0 auto;
      li {
        float: left;
        @include wh(33.33%,54px);
        line-height: 54px;
        cursor: pointer;
        position: relative;
        a {
          @include sc(16px,$blue);
          font-weight: bold;
        }
      }
      li.active {
        &:after {
          display: block;
          content: '';
          @include wh(100%,4px);
          background: $red;
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
  nav.position-fix {
    position: fixed;
    top: 0;
    width: 100%;
    background: $fc;
    z-index: 99;
  }
</style>