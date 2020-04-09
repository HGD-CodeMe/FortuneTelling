const app = getApp();

const getTodayInfo = function(that, consName, type) {
  wx.showLoading({
    title: '请稍后',
  })
  wx.request({
    url: app.constellationUrl + '&consName=' + consName + '&type=' + type,
    type: 'GET',
    success: function(res) {
      wx.hideLoading();
      console.log(res);
      if (res.data.reason === 'Succes') {
        that.setData({
          resultList: res.data.result1
        })
      }
    },
    fail: function(res) {
      wx.hideLoading();
      wx.showToast({
        title: '网络异常，请稍后重试 :(',
        icon: 'none'
      })
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    load: true,
    type: 'today',
    consName: '',
    consImgUrl: '',
    resultList: [],
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options);
    getTodayInfo(that, options.name, this.data.type);

    that.setData({
      load: false,
      consImgUrl: options.imgUrl
    });

    console.log(that.data.consImgUrl);
  },


})