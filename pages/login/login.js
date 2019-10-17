const app = getApp()
const base64 = require('../../utils/base64.js')
const md5 = require('../../utils/md5.js')
Page({

  data: {
    username: '',
    password: '',
  },

  onLoad: function() {
    wx.getStorage({
      key: 'accessToken',
      success(res) {
        console.log(res.data)
        if (res.data!=null){
          app.globalData.accessToken = res.data;
          wx.switchTab({
            url: '/pages/tabs/eld/eld',
          })
        }
      }
    })
  },
  nameInput: function(e) {
    this.setData({
      username: e.detail
    })
  },

  pwdInput: function(e) {
    this.setData({
      password: e.detail
    })
  },

  nurseLogin: function() {
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        icon: 'none',
        title: '请输入账号密码',
        duration: 800
      })
      return;
    }
    var base64str = base64.Base64.encode(this.data.password);
    console.log(this.data.username);
    console.log(base64str);
    var md5Str = md5(base64str + this.data.password);
    const password = md5Str;
    console.log(password);
    wx.request({
      url: app.globalData.url + '/oauth/token',
      data: {
        grant_type: 'password',
        username: this.data.username,
        password: password
        // username: '15879618946',
        // password: '297297c35d079df661902fd4fc8d0777'
      },
      header: {
        'Authorization': 'Basic bnVyc2U6bnVyc2U=',
      },
      success(res) {
        var data = res.data
        console.log('success', data);
        if (data.status == null) {
          var accessToken = data.access_token;
          wx.setStorage({
            key: "accessToken",
            data: accessToken
          })
          app.globalData.accessToken = accessToken;
          wx.switchTab({
            url: '/pages/tabs/eld/eld',
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: data.message,
            duration: 1500
          })
        }
      },
    })
  }
});