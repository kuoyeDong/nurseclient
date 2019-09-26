// pages/tabs/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      name: '石亚娣聊天',
      iconPath: '/res/talk.png',
      taskTime: '2019-9-27 09:00'
    }, {
      name: '石亚娣换尿布',
      iconPath: '/res/diaper.png',
      taskTime: '2019-9-27 09:30'
    }, {
      name: '李伟芳洗澡',
      iconPath: '/res/bathing.png',
      taskTime: '2019-9-27 10:00'
    }, {
      name: '江叔水晒太阳',
      iconPath: '/res/sunbathing.png',
      taskTime: '2019-9-27 10:30'
    }, {
      name: '李伟芳聊天',
      iconPath: '/res/talk.png',
      taskTime: '2019-9-27 11:00'
    }, {
      name: '黄观勤换尿布',
      iconPath: '/res/diaper.png',
      taskTime: '2019-9-27 11:30'
    }, {
      name: '刘秋菊洗澡',
      iconPath: '/res/bathing.png',
      taskTime: '2019-9-27 14:00'
    }, {
      name: '刘秋菊晒太阳',
      iconPath: '/res/sunbathing.png',
      taskTime: '2019-9-27 16:00'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnload')
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

  }
})