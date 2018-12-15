Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTitles:['首页','说说','分类','相册','下载','留言','关于'],
    bannerUrls:[
      '/images/01.jpg',
      '/images/02.jpg',
      '/images/03.jpg',
    ],
    news:[
      {title:'素材1',imgUrl:'/images/1.jpg'},
      { title: '素材2', imgUrl: '/images/2.jpg' },
      { title: '素材3', imgUrl: '/images/3.jpg' },
      { title: '素材4', imgUrl: '/images/4.jpg' },
      { title: '素材5', imgUrl: '/images/5.jpg' },
      { title: '素材6', imgUrl: '/images/6.jpg' },
    ],
    newsList:[
      {title_1:'微信小程序开发教程',title_2:'微信小程序开发实际案例分享-雷小天博客',imgUrl:'/images/2.jpg',count:'1256'},
      { title_1: '微信小程序开发教程', title_2: '微信小程序开发实际案例分享-雷小天博客', imgUrl: '/images/3.jpg', count: '1256' },
      { title_1: '微信小程序开发教程', title_2: '微信小程序开发实际案例分享-雷小天博客', imgUrl: '/images/4.jpg', count: '1256' },
      { title_1: '微信小程序开发教程', title_2: '微信小程序开发实际案例分享-雷小天博客', imgUrl: '/images/5.jpg', count: '1256' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://www.100txy.com/smallapp/getarticle', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          Articles: res.data
        })  
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 查看详情
  artDetail(event) {
    wx.navigateTo({
      url: '../article/article?id=' + event.currentTarget.id,
    });
  },
  // 查看详情
  showDetail(event) {
    wx.navigateTo({
      url: '../entry/entry?id=' + event.currentTarget.id,
    });
  }
})