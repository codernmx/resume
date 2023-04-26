// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
	data: {
		tags: [
			{
				type: 'primary',
				name: 'Vue2/Vue3'
			},
			{
				type: 'success',
				name: 'React'
			},
			{
				type: 'danger',
				name: 'NodeJs'
			},
			{
				type: 'warning',
				name: '小程序'
			},
			{
				type: 'primary',
				name: 'Git'
			},
			{
				type: 'success',
				name: 'Vite'
			},
			{
				type: 'danger',
				name: 'Es6'
			},
			{
				type: 'warning',
				name: 'Mysql'
			}
		]
	},

	onLoad() {
		// @ts-ignore
		wx.showLoading({
			title: '加载中',
			mask: true
		})
		wx.request({
			url: 'https://bt.nmxgzs.cn/mini/program/resume/get/userInfo', //仅为示例，并非真实的接口地址
			method: 'POST',
			data: {},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: (res: any) => {
				console.log(res.data.data)
				getApp().globalData.userInfo = res.data.data
				this.setData({ userInfo: res.data.data })
				wx.hideLoading()
			}
		})

	},
	onShareAppMessage() { },
	onShareTimeline() { }

})
