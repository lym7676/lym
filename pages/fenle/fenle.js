var app = getApp();
Page({
  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    "shuju": [{
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      },
      {
        'img': '../../img/paihang10.png',
        'text': '人类简史',
        'name': '尤瓦尔.郝拉利'
      },
      {
        'img': '../../img/paihang11.png',
        'text': '许三观卖血记',
        'name': '余华'
      }
    ],
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function() {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})