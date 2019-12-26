// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "caidan": [{
        'img': '../../img/paihang1.png',
        'text': '科幻'
      },
      {
        'img': '../../img/paihang2.png',
        'text': '生活'
      },
      {
        'img': '../../img/paihang3.png',
        'text': '露营'
      },
      {
        'img': '../../img/paihang4.png',
        'text': '职场'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '刘慈欣'
      }
    ],
    "zuozhe": [{
      'img': '../../img/paihang5.png',
      'text': '刘慈欣'
    },
    {
      'img': '../../img/paihang6.png',
      'text': '田小花'
    },
    {
      'img': '../../img/paihang7.png',
      'text': '马尔克斯'
    },
    {
      'img': '../../img/paihang8.png',
      'text': '余秋雨'
    },
    {
      'img': '../../img/paihang8.png',
      'text': '刘慈欣'
    }
    ],
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
      },
      {
        'img': '../../img/paihang12.png',
        'text': '未来简史',
        'name': '尤瓦尔.郝拉利'
      },
      {
        'img': '../../img/paihang13.png',
        'text': '自私的基因',
        'name': '理查德.道金斯'
      },
      {
        'img': '../../img/paihang14.png',
        'text': '百年孤独',
        'name': '马尔克斯'
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
    if (data == '科幻') {
      wx.navigateTo({
        url: '../kehaun/kehaun'
      })
    } else if (data == "生活") {
      wx.navigateTo({
        url: '../shenghuo/shenghuo'
      })
    }
  },
  xinxi(e){
    console.log(e.currentTarget.dataset.mei)
    let liu = e.currentTarget.dataset.mei
    wx.navigateTo({
      url: '../shuji/shuji?id=' + liu
    })
  },
  zz(e) {
    console.log(e.currentTarget.dataset.liu)
    var data = e.currentTarget.dataset.liu
    if (data == '刘慈欣') {
      wx.navigateTo({
        url: '../zuozhe/zuozhe'
      })
    } else if (data == "田小花") {
      wx.navigateTo({
        url: '../shenghuo/shenghuo'
      })
    }
  },
  ss(){
    wx.navigateTo({
      url: '../search/search'
    })
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