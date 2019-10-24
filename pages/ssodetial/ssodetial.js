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
        callTaskId: '',
        status: '',
        elderId: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            name: options.name,
            iconPath: options.iconPath,
            messageTime: options.messageTime,
            callTaskId: options.callTaskId,
            status: options.status,
            elderId: options.elderId
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    //确认完成sso任务
    ssoConfirm: function () {
        let that = this;
        wx.showModal({
            title: '提示',
            content: '确认后将不能申请开门密码，请务必在任务完成后执行此操作',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        method: 'POST',
                        url: app.globalData.url + '/css/nurse/calltask/update?access_token=' + app.globalData.accessToken,
                        header: {
                            'Authorization': 'Basic bnVyc2U6bnVyc2U=',
                        },
                        data: {
                            callTaskId: that.data.callTaskId
                        },
                        success(res) {
                            var data = res.data;
                            console.log(data);
                            if (data.code === 0) {
                                wx.navigateBack({})
                            } else {
                                wx.showToast({
                                    icon: 'none',
                                    title: data.msg,
                                    duration: 800
                                });
                                if (data.code === 511) {
                                    wx.setStorage({
                                        key: "accessToken",
                                        data: null
                                    })
                                    wx.reLaunch({
                                        url: '/pages/login/login',
                                    })
                                }
                            }
                        }
                    })
                } else if (res.cancel) {

                }
            }
        })

    },

    visit: function () {
        wx.request({
            method: 'POST',
            url: app.globalData.url + '/css/nurse/vist?access_token=' + app.globalData.accessToken,
            header: {
                'Authorization': 'Basic bnVyc2U6bnVyc2U=',
            },
            data: {
                elderId: this.data.elderId
            },
            success(res) {
                var data = res.data;
                console.log(data);
                if (data.code === 0) {
                    wx.showModal({
                        title: '成功发送申请',
                        content: '家属审核通过后将发送密码到您手机，请注意查收,请耐心等待，不要重复申请',
                        success(res) {
                            if (res.confirm) {
                                wx.navigateBack({

                                })
                            } else if (res.cancel) {
                                wx.navigateBack({

                                })
                            }
                        }
                    })
                } else {
                    wx.showToast({
                        icon: 'none',
                        title: data.msg,
                        duration: 800
                    });
                    if (data.code === 511) {
                        wx.setStorage({
                            key: "accessToken",
                            data: null
                        })
                        wx.reLaunch({
                            url: '/pages/login/login',
                        })
                    }
                }
            }
        })
    }
})