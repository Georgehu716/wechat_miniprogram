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
    var is = this.data.IsIndex;
    if (is==1)
    {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#D2E5E9'
      });
      wx.setTabBarStyle({
        backgroundColor: '#D2E5E9'
      });
    }
    else
    {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#D99F9F'
      });
      wx.setTabBarStyle({
        backgroundColor: '#D99F9F'
      });
    }
    var num = (is + 1) % 2;
    this.setData({
      IsIndex: num
    });
  }
})
