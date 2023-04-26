
Page({
        /**
         * 页面的初始数据
         */
        data: {
                list: [
                        // {
                        //         time: "2023.03-至今",
                        //         company: '连偶科技有限公司',
                        //         content: "负责小程序Ar的研究开发。原有项目的迭代升级。"
                        // },
                        // {
                        //         time: "2021.04-2022.12",
                        //         company: '蚂蚁新课网络技术有限公司',
                        //         content: `负责公司所有项目的前端版块，在职期间，主要使用 React + Ant design +Redux /Vue + Element Ui/iView + Axios + Vuex + Vue Router  技术，App  端使用 uniapp+uView \n使用 Echarts  搭建可视化界面，百度地图 API  绘制轨迹路线。\nAxios 的请求、响应拦截封装，公用 Vue 组件抽离。`
                        // },
                        // {
                        //         time: "2020.12-2021.03",
                        //         company: '重庆灵悠科技有限公司',
                        //         content: "负责公司项目的前端界面开发，送代维护，部分文档的编写，在职期间，开发过西大学院招聘，海事局管理端两个小程序，和一个信息系统管理后台界面（Vue+ElementUi），数据库版块类似PhpMyAdmin，项目规划版块为开发提供了预期，接口版块为前后端调试提供了可视化基础，整个项目为开发人员提供了极大的便利。收获：熟悉了团队协作开发的过程，微信小程序开发，学会了如何独立开发前端，各种开源项目的接入使用。"
                        // }
                ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad() {
                this.setData({ list: getApp().globalData.userInfo.project })
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() { },
        onShareTimeline() { }
})