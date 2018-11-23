<template>
  <footer id="foot_guide">
    <ul class="container">
      <li>
        <p>公司地址</p>
        <p>重庆市涪陵区新城区鹤凤大道19号（品鉴硅谷园）2幢1-1 <br>北京市海淀区中关村南二条一号九章大厦</p>
      </li>
      <li>
        <p>联系邮箱</p>
        <p>CONTACT@DATBC.COM</p>
      </li>
      <li>
        <p>关注我们</p>
        <img src="../../images/home/wechat-code.png" alt="" width="81.5px">
      </li>
    </ul>
    <div class="icon-lf"></div>
    <div class="icon-rt"></div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {  
    },
    computed: {
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  #foot_guide{
    @include wh(100%, 201.5px);
    background-color: $blue;
    position: relative;
    overflow: hidden;
    .icon-lf, .icon-rt {
      @include wh(92.5px, 121px);
      background: url('../../images/home/footer-icon.png') no-repeat center center;
      background-size: 100%;
      position: absolute;
    }
    .icon-lf {
      bottom: -18px;
      left: -13px;
    }
    .icon-rt {
      top: -24px;
      right: -3px;
      transform: rotate(12deg) scale(1.25);
    }
    .container {
      width: 85%;
      margin: 0 auto;
      text-align: center;
      overflow: hidden;
      @include sc(12px, $fc);
      padding-top: 39.5px;
      li {
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        padding: 15px 0 25px;
        margin-top: 20px;
        p:nth-child(1) {
          position: relative;
          margin: -38px 0 12px 0;
          &:before {
            display: block;
            content: '';
            @include wh(26.5px,3px);
            background: $fc;
            border-radius: 1px;
            margin: 0px 0 14px 45%;
          }
        }
        p:nth-child(2) {
          transform: scale(.86);
          line-height: 2;
        }
      }
      li:nth-child(2) {
        border-left: 1px solid $fc;
        border-right: 1px solid $fc;
      }
    }
  }
</style>
