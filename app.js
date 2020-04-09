//app.js
App({
  constellationUrl: "https://api.avatardata.cn/Constellation/Query?key=5be54709638644e488f7fd5236c90bb4",
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },

})