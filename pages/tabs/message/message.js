// pages/tabs/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      name: '曾锦英',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 09:00'
    }, {
      name: '石亚娣',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 09:30'
    }, {
      name: '黄观勤',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '朱美婵',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '刘秋菊',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '刘灶有',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '李蕉莲',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '江叔水',
      iconPath: '/res/oldman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '李伟芳',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }, {
      name: '黄张娣',
      iconPath: '/res/oldwoman.png',
      messageTime: '2019-9-27 10:00'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  queryCallTask: function () {
    var _this = this;
    wx.request({
      url: 'https://aliiot.on-bright.com/css/nurse/calltask/list',
      header: {
        'Authorization': 'bnVyc2U6bnVyc2U'
      },
      data: {
        access_token: ap.globalData.accessToken,
        nurseId: ap.globalData.nurseId,
        pageNo: 1,
        pageSize: 100,
      },
      success(res) {
        console.log(res.data);
        var json = JSON.parse(res);
        var callTaskList = json.data.records;
        _this.setData({
          dataList: callTaskList
        })
      }
    })
  }
})