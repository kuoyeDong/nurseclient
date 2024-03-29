// pages/tabs/eld.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        taskName: '',
        finishTips: '如果任务已完成，可点击按钮确认',
        taskTime: '',
        iconPath: '',
        taskId: '',
        status: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            taskName: options.name,
            taskTime: options.taskTime,
            iconPath: options.iconPath,
            taskId: options.taskId,
            status: options.status
        });
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
    /* 完成任务 */
    taskFinish: function () {
        console.log('onLoad');
        wx.request({
            method: 'POST',
            url: app.globalData.url + '/css/nurse/task/update?access_token=' + app.globalData.accessToken,
            header: {
                'Authorization': 'Basic bnVyc2U6bnVyc2U=',
            },
            data: {
                taskId: this.data.taskId
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

    }
})