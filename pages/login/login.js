Page({

  data: {
    username:'账号',
    password: '密码',
  },

  onLoad: function() {

  },
  nameInput: function (e) {
    this.setData({
      username: e.detail.value
    })},
  pwdInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  nurseLogin: function() {
    console.log(this.data.username);
    let _this = this;
    wx.request({
      url: 'https://aliiot.on-bright.com/nursinghome/oauth/token',
      header: {
        'Authorization': 'bnVyc2U6bnVyc2U',
      },
      data: {
        grant_type: 'password',
        // name: this.data.username,
        // pwd: this.data.password
        username: '15879618946',
        password: '297297c35d079df661902fd4fc8d0777'
      },
      success(res) {
        console.log(res.data);
        var json = JSON.parse(JSON.parse(res).data);
        var accessToken = json.access_token;
        _that.setData({
          accessToken:accessToken
        });
        wx.switchTab({
          url: '/pages/tabs/eld/eld',
        })
      }
    })
  }
});