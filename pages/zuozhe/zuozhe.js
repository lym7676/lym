// pages/zuozhe/zuozhe.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    reactor: [{
        'img': '../../img/paihang5.png',
        'text': '王源源',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '张小佳',
        'guanzhu': '关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '谢华英',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '李小军',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '王安娜',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '花花',
        'guanzhu': '已关注'
      },

    ],
    newactor: [{
        'img': '../../img/paihang5.png',
        'text': '赵晓磊',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '钟大华',
        'guanzhu': '关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '王中金',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '李权柱',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '王安娜',
        'guanzhu': '已关注'
      },
      {
        'img': '../../img/paihang5.png',
        'text': '花花',
        'guanzhu': '已关注'
      },
    ]
  },
  zz() {
    wx.navigateTo({
      url: '../zzxx/zzxx',
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})