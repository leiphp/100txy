// entry.js
var WxParse = require('../../wxParse/wxParse.js');

const toolbar = [
  '../../images/nav/download.png', '../../images/nav/fav.png',
  '../../images/nav/share.png', '../../images/nav/comment.png',
];
const app = getApp();

Page({
  data: {
    // 当前日志详情
    diary: undefined,

    // 右上角工具栏
    toolbar: toolbar,

    // 图片预览模式
    previewMode: false,

    // 当前预览索引
    previewIndex: 0,

    // 多媒体内容列表
    mediaList: [],
  },

  // 加载日记
  getDiary(params) {
    console.log("Loading diary data...", params);

    var id = params["id"], diary;
    

    this.setData({
      diary: diary,
    });
  },
  getDetail(id) {
    var that = this
    wx.request({
      url: 'https://www.100txy.com/smallapp/getdowndetail?id='+id, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        console.log(res.data)
        var article = res.data.content;
        // var that = this;
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          Downdetail: res.data
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  
  


  onLoad: function(params) {
    var id=params.id;
    console.log(params);
    console.log(params.id);
    // this.getDiary(params);
    // this.getMediaList();
    this.getDetail(id);
    // var article = '<div>我是HTML代码</div>';
    // var that = this;
    // WxParse.wxParse('article', 'html', article, that, 5);
  },

  onHide: function() {
  },
  
})
