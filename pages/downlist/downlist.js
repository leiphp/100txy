Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    newsList: [
      { title_1: '微信小程序开发教程', title_2: '微信小程序开发实际案例分享-雷小天博客', imgUrl: '/images/2.jpg', countsmall: '1256' },
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
      url: 'https://www.100txy.com/smallapp/getdownlist', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
 
        console.log(res.data)
        that.setData({
          Industry: res.data
        })  
      },
      fail: function (err) {
        console.log(err)
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
  showDetail(event) {
    wx.navigateTo({
      url: '../entry/entry?id=' + event.currentTarget.id,
    });
  }
})