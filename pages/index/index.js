//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    IsIndex: 1
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
      backgroundColor: '#D99F9F'
    });
    wx.setTabBarStyle({
      backgroundColor: '#D99F9F'
    });
  },
  IndexSwitch: function () {
    var num = (this.data.IsIndex + 1) % 2;
    this.setData({
      IsIndex: num
    });
  }
})
