// pages/tabs/message.js
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
    onLoad: function (options) {

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
        this.queryCallTask();
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
    /* 查询呼叫任务 */
    queryCallTask: function () {
        var _this = this;
        wx.request({
            url: app.globalData.url + '/css/nurse/calltask/list',
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
                if (data.code === 0) {
                    if (data.data != null) {
                        var callTaskList = data.data.records;
                        _this.setData({
                            dataList: callTaskList
                        })
                    } else {
                        _this.setData({
                            dataList: []
                        })
                    }
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