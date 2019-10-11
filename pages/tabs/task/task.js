// pages/tabs/task.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad');
    queryTask();
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

  },

  queryTask: function() {
    var _this = this;
    wx.request({
      url: 'https://aliiot.on-bright.com/css/nurse/task/list',
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
        var taskList = json.data.records;
        _this.setData({
          dataList: taskList
        })
      }
    })
  }

})