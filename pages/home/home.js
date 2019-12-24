// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "caidan": [{
        'img': '../../img/paihang5.png',
        'text': '刘慈欣'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '刘亚梅'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '刘梅'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '刘亚'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '刘慈欣'
      }
    ],
    "shuju": [{
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      },
      {
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      },
      {
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      },
      {
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      },
      {
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      },
      {
        'img': '../../img/paihang9.png',
        'text': '三体：死神永生',
        'name': '刘慈欣'
      }
    ],
    "content": [{
        title: '2019排行榜',
        color: '#f54d82'
      },
      {
        title: '职场热门',
        color: '#4c906d'
      },
      {
        title: '都市言情',
        color: '#ec575e'

      },
      {
        title: '哈佛经济大学管理类',
        color: '#9060e8'
      },
      {
        title: '领导才能',
        color: '#ded658'
      },
    ],
    "hotlist": [{
        'img': '../../img/paihang15.png',
        'title': '三体：死神永生',
        'name': '刘慈欣',
        'jieshao': '刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品...'
      },
      {
        'img': '../../img/paihang15.png',
        'title': '三体：死神永生',
        'name': '刘慈欣',
        'jieshao': '刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品...'
      }
    ]
  },
  kh(e) {
    console.log(e.currentTarget.dataset.liu)
    var data = e.currentTarget.dataset.liu
    if (data == '刘慈欣') {
      wx.navigateTo({
        url: '../kehaun/kehaun'
      })
    } else if (data == "刘亚梅") {
      wx.navigateTo({
        url: '../shenghuo/shenghuo'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})