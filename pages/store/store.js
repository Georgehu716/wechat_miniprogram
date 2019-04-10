//store.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#C4E3D5'
    });
    wx.setTabBarStyle({
      backgroundColor: '#C4E3D5'
    });
  }
})
