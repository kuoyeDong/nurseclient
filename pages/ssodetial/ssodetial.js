// pages/tabs/eld.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '这位长者',
    iconPath: '',
    messageTime: '',
    callTaskId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      name: options.name,
      iconPath: options.iconPath,
      messageTime: options.messageTime,
      callTaskId: options.callTaskId
    })
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
  //确认完成sso任务
  ssoConfirm: function() {
    wx.request({
      method: 'POST',
      url: app.globalData.url + '/css/nurse/calltask/update',
      header: {
        'Authorization': 'Basic bnVyc2U6bnVyc2U=',
      },
      data: {
        access_token: app.globalData.accessToken,
        callTaskId: this.data.callTaskId
      },
      success(res) {
        console.log(res.data)
        wx.navigateBack({

        })
      }
    })
  },

  //忽略sso任务
  ssoCancel: function() {
    wx.navigateBack({

    })
  }
})