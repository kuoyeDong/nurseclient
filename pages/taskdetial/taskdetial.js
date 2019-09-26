// pages/tabs/eld.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskName: '',
    finishTips: '如果任务已完成，可点击按钮确认',
    taskTime: '',
    iconPath: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      taskName: options.name,
      taskTime: options.taskTime,
      iconPath: options.iconPath
    });
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

  taskFinish: function() {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
    var cpdataList = prevPage.data.dataList
    var index
    for (var i = 0; i < cpdataList.length; i++) {
      if (cpdataList[i].name == this.data.taskName) {
        index = i
      }
    }
    cpdataList.splice(index, 1)
    prevPage.setData({
      dataList: cpdataList
    });
    wx.navigateBack({

    })
  }
})