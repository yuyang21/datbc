import $ from 'jquery'
let Utils = {
  removeParam: function (key, sourceURL) {
    var rtn = sourceURL.split('?')[0]
    var param
    var paramsArr = []
    var queryString = (sourceURL.indexOf('?') !== -1) ? sourceURL.split('?')[1] : ''
    if (queryString !== '') {
      paramsArr = queryString.split('&')
      for (var i = paramsArr.length - 1; i >= 0; i -= 1) {
        param = paramsArr[i].split('=')[0]
        if (param === key) {
          paramsArr.splice(i, 1)
        }
      }
      rtn = rtn + '?' + paramsArr.join('&')
    }
    return rtn
  },
  scrollToAnchor: function (elem) {
    var anchor = elem || window.location.hash.substring(1),
      anchorDom,
      anchorScrollTop;
    if(anchor.length < 1){
      return;
    }
    anchorDom = document.getElementById(anchor);
    anchorScrollTop = anchorDom.offsetTop;
    this.animationToAnchor(document.body.scrollTop, anchorScrollTop);
  },
  animationToAnchor: function (startNum, stopNum){
    var that = this
    var nowNum = startNum + 60; // 步进为30

    if(nowNum > stopNum){
      nowNum = stopNum;
    }
    window.requestAnimationFrame(function(){
      window.scrollTo(0,nowNum - 60)
      if(nowNum == stopNum){
        return;
      }
      that.animationToAnchor(nowNum, stopNum);
    });
  },
  mouseMove: function (anchorLength) {
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    if (scrollTop > $('.banner').height() + $('#head_top').height()) {
      $('nav').addClass('position-fix');
    } else {
      $('nav').removeClass('position-fix');
    }
    $('nav li').removeClass('active');
    var scrollTopH = scrollTop + 110;
    if (document.getElementById('anchor1') && scrollTopH < document.getElementById('anchor1').offsetTop) {
      $('nav li:eq(0)').addClass('active');
    } else if (document.getElementById('anchor2') && scrollTopH < document.getElementById('anchor2').offsetTop) {
      $('nav li:eq(1)').addClass('active');
    } else if (document.getElementById('anchor3') && scrollTopH < document.getElementById('anchor3').offsetTop) {
      $('nav li:eq(2)').addClass('active');
    } else if (document.getElementById('anchor4') && scrollTopH < document.getElementById('anchor4').offsetTop) {
      $('nav li:eq(3)').addClass('active');
    } else if (document.getElementById('anchor4')) {
      $('nav li:eq(4)').addClass('active');
    } else if (document.getElementById('anchor3')) {
      $('nav li:eq(3)').addClass('active');
    } else if (document.getElementById('anchor2')) {
      $('nav li:eq(2)').addClass('active');
    } else if (document.getElementById('anchor1')) {
      $('nav li:eq(1)').addClass('active');
    }
  }
}
export {Utils}
