//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    IsIndex: 1,
    OrderI: 0,
    OrderV: 0,
    Timestamp: new Date().getTime(),
    colorArr: [
      '#E8A1A1',
      '#EF938F',
      '#E29C9C',
      '#EA9797',
      '#E48B8B'
    ],
    Articles: [
      {
        Id: "1",
        Title: "咸鸭蛋",
        Detail: "咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸咸",
        Img: "img/article1.jpg",
        Grade: "9.2",
        Date: "1556006921",
        CommentNum: "233"
      },
      {
        Id: "2",
        Title: "老干妈",
        Detail: "香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香香",
        Img: "img/article2.jpg",
        Grade: "7.8",
        Date: "1556002921",
        CommentNum: "332"
      },
      {
        Id: "3",
        Title: "白砂糖",
        Detail: "甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜甜",
        Img: "img/article3.jpg",
        Grade: "6.6",
        Date: "1555902921",
        CommentNum: "322"
      },
      {
        Id: "4",
        Title: "花椒油",
        Detail: "麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻",
        Img: "img/article4.jpg",
        Grade: "8.4",
        Date: "1555702921",
        CommentNum: "223"
      },
      {
        Id: "5",
        Title: "花椒油",
        Detail: "麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻",
        Img: "img/article4.jpg",
        Grade: "8.4",
        Date: "1545702921",
        CommentNum: "223"
      },
      {
        Id: "6",
        Title: "花椒油",
        Detail: "麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻",
        Img: "img/article4.jpg",
        Grade: "8.4",
        Date: "1555702921",
        CommentNum: "223"
      },
      {
        Id: "7",
        Title: "花椒油",
        Detail: "麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻麻",
        Img: "img/article4.jpg",
        Grade: "8.4",
        Date: "1555702921",
        CommentNum: "223"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    this.setData({
      IsIndex: 1
    });
    this.setData({
      IsIndex: 1,
      OrderI: 0,
      OrderV: 0
    });
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
    var num = (is + 1) % 2;
    this.setData({
      IsIndex: num,
      OrderI: 0,
      OrderV: 0
    });
    if (is == 1) {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#D2E5E9'
      });
      wx.setTabBarStyle({
        backgroundColor: '#D2E5E9'
      });
    }
    else {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#D99F9F'
      });
      wx.setTabBarStyle({
        backgroundColor: '#D99F9F'
      });
    }
  },
  SetOrderI: function (message) {
    this.setData({
      OrderI: message.currentTarget.dataset.order
    });
  },
  SetOrderV: function (message) {
    this.setData({
      OrderV: message.currentTarget.dataset.order
    });
  }
})
