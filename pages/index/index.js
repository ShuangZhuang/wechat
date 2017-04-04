//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    upload_pictures: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  chooseImage: function() {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: (res) => {
        // success
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        this.setData({
          upload_pictures: tempFilePaths
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
