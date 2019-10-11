// pages/tabs/eld.js
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

  queryEld: function () {
    var _this = this;
    wx.request({
      url: 'https://aliiot.on-bright.com/css/nurse/elder/list',
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
        var eldList = json.data.records;
        _this.setData({
          dataList: eldList
        })
      }
    })
  }
})