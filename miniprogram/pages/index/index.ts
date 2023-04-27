// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
	data: {
		tags: []
	},
	onLoad() {
		// @ts-ignore
		wx.login({
			success: (res: any) => {
				if (res.code) {
					this.getUserInfo(res.code)
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			}
		})
	},
	getUserInfo(code: String) {
		wx.showLoading({
			title: '加载中',
			mask: true
		})
		wx.request({
			url: 'https://bt.nmxgzs.cn/mini/program/resume/get/userInfo', //仅为示例，并非真实的接口地址
			method: 'POST',
			data: { code },
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: (res: any) => {
				wx.hideLoading()
				getApp().globalData.userInfo = res.data.data
				if (res.data.code != 200) {
					wx.showToast({
						title: '内部错误',
						icon: 'none'
					})
					return 0
				}
				this.setData({ userInfo: res.data.data })
				wx.showToast({
					title: res.data.data.openId,
					icon: 'none'
				})
			},
			fail: (err: any) => {
				wx.showToast({
					title: err.toString(),
					icon: 'none'
				})
			}
		})
	},
	onShareAppMessage() { },
	onShareTimeline() { }
})
