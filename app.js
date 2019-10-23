//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var _this = this;
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

    function parseTime(time, fmt) {
      if (arguments.length === 0) {
        return null
      }
      const format = fmt || '{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if (typeof time === 'object') {
        date = time
      } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
      }
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
      }
      const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
          value = '0' + value
        }
        return value || 0
      })
      return timeStr
    }

    wx.onSocketError(function() {
      console.log('onSocketError')
    })

    wx.onSocketOpen(function(res) {
      console.log('onSocketOpen')
    })

    wx.onSocketClose(function(res) {
      console.log('onSocketClose')
      wx.connectSocket({
        // 昂宝地址
        url: 'wss://aliiot.on-bright.com/webWxSocket/' + _this.globalData.accessToken,
        // jj调试服务器地址
        // url: 'ws://10.10.92.161:8901/webWxSocket/jetty'
      })
    })

    wx.onSocketMessage(function({
      data
    }) {
      var jo = JSON.parse(data);
      var show = (jo.type == 1);
      console.log(jo);
      if (show) {
        wx.showModal({
          title: jo.elderName + jo.callTaskName,
          content: '呼叫时间:' + jo.execTime + ',请前往协助！',
          showCancel: true,
          confirmText: '前往',
          cancelText: '忽略',
          success: function(res) {
            if (res.confirm) {
              wx: wx.navigateTo({
                url: '/pages/ssodetial/ssodetial?name=' + jo.elderName + jo.callTaskName + '&iconPath=/res/call_message.png' +
                  '&messageTime=' + jo.execTime + '&callTaskId=' + jo.callTaskId + '&status=待完成' +
                  '&elderId=' + jo.elderId,
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
              })
            } else if (res.cancel) {
             
            }
          },
          fail: function(res) {
            console.log('fail')
          },
          complete: function(res) {
            console.log('complete')
          },
        })
      }
    })
  },
  /* 连接推送 */
  connectPush: function () {
    wx.connectSocket({
      // 昂宝地址
      url: 'wss://aliiot.on-bright.com/webWxSocket/' + this.globalData.accessToken,
      // jj调试服务器地址
      // url: 'ws://10.10.92.161:8901/webWxSocket/jetty'
    })
  },
  globalData: {
    userInfo: null,
    accessToken: null,
    url: 'https://aliiot.on-bright.com/nursinghome'
    // url: 'https://10.10.92.161:8401/nursinghome'
  }
});

