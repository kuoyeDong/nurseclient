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
    var _this = this;
    wx.request({
      url: app.globalData.url + '/css/nurse/task/list',
      header: {
        'Authorization': 'Basic bnVyc2U6bnVyc2U=',
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data: {
        access_token: app.globalData.accessToken,
        pageNo: 1,
        pageSize: 100000,
      },
      success(res) {
        var data = res.data;
        console.log(data);
        var taskList = data.data.records;
        _this.setData({
          dataList: taskList
        })
      }
    })
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


})