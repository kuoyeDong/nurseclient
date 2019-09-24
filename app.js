//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    var taskSocket = wx.connectSocket({
      // url: 'wss://websck.eloeg.wang:20001',
      url: 'ws://10.10.92.161:8901/websocket/doufu',
      // url: 'wss://aliiot.on-bright.com/queueServer',
    })

    wx.onSocketError(function() {
      console.log('onSocketError')
    })
    wx.onSocketOpen(function(res) {
      console.log('onSocketOpen')
    })

    taskSocket.onMessage((data) => {
      console.log('onMessage')
      console.log(data)
      wx.showModal({
        content: '收到呼叫',
        showCancel: true,
        cancelText: '忽略',
        confirmText: '前往',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        },
        fail: function(res) {
          console.log('fail')
        },
        complete: function(res) {
          console.log('complete')
        },
      })
    })
  },
  globalData: {
    userInfo: null
  }
})