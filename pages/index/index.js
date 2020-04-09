//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollHeight: 0,
    consName: '金牛座',
    type: 'today',
    constellationList: [{
      name: '白羊座',
      imgUrl: '../../images/Aries.jpg',
      desc: '崭新的开始，象征着白羊活泼热情的特质。'
    }, {
      name: '金牛座',
      imgUrl: '../../images/Taurus.jpg',
      desc: '力量，这个星座的人内心有无限的积蓄，沉稳有担当。'
    }, {
      name: '双子座',
      imgUrl: '../../images/Gemini.jpg',
      desc: '一目了然，正反两面，象征智慧。双子的人机灵聪慧，头脑灵活。'
    }, {
      name: '巨蟹座',
      imgUrl: '../../images/Cancer.jpg',
      desc: '坚持，看上去较为冷漠疏离的他们，内心细致又温柔。'
    }, {
      name: '狮子座',
      imgUrl: '../../images/Leo.jpg',
      desc: '权利，代表他们不可侵犯的权利，与清醒的认知和优秀的能力。'
    }, {
      name: '处女座',
      imgUrl: '../../images/Virgo.jpg',
      desc: '美丽。这和他们追求完美，细化到微小末节的性格不谋而合。7a6431333431346364'
    }, {
      name: '天秤座',
      imgUrl: '../../images/Libra.jpg',
      desc: '平衡。这个星座的人冷静客观，遇事能作出做恰当的分析。'
    }, {
      name: '天蝎座',
      imgUrl: '../../images/Scorpio.jpg',
      desc: '神秘。你永远无法猜测一个天蝎座的人心思是什么，他们孤傲，深沉。'
    }, {
      name: '射手座',
      imgUrl: '../../images/Sagittarius.jpg',
      desc: '坦率。他们喜欢直率的表达，讨厌尔虞我诈，心思直接单纯，喜爱新事物。'
    }, {
      name: '摩羯座',
      imgUrl: '../../images/Capricorn.jpg',
      desc: '坚韧，而这的确是他们的一大优点。内敛又稳重，心有沟壑表面却不为所动。'
    }, {
      name: '水瓶座',
      imgUrl: '../../images/Aquarius.jpg',
      desc: '叛逆。水瓶座的人知性，较为浪漫。他们极有天赋，可能看上去更容易成功。'
    }, {
      name: '双鱼座',
      imgUrl: '../../images/Pisces.jpg',
      desc: '复杂。双鱼的心思不定，是由于他们自己也不知道选择与决定是什么，经常彷徨。'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      },
    });
  },

  toDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/luckyDetail/luckyDetail?name=' + e.target.dataset.name + '&imgUrl=' + e.target.dataset.img,
    })
  }
})