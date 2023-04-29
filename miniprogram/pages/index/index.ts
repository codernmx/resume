// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
	data: {
		tags: []
	},
	onLoad() {
		// @ts-ignore
		wx.showLoading({
			title: '加载中',
			mask: true
		})
		wx.login({
			success: (res: any) => {
				if (res.code) {
					this.getUserInfo(res.code)
				} else {
					console.log('登录失败！' + res.errMsg)
					wx.hideLoading()
				}
			}
		})
	},
	getUserInfo(code: String) {
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
						title: res.data.msg,
						icon: 'none'
					})
					return 0
				}
				this.setData({ userInfo: res.data.data })
				wx.showToast({
					title: res.data.data.showMsg,
					icon: 'none'
				})
			},
			fail: (err: any) => {
				wx.showToast({
					title: err.toString(),
					icon: 'none'
				})
				wx.hideLoading()
			}
		})
	},
	call() {
		wx.makePhoneCall({
			// @ts-ignore
			phoneNumber: this.data.userInfo.phone //仅为示例，并非真实的电话号码
		})
	},
	copy(e: any) {
		let msg: any = {
			github: 'GitHub主页复制成功~',
			csdn: 'CSDN主页复制成功~',
			email: '邮箱账号复制成功~',
			weixin: '微信号复制成功~',
		}
		wx.setClipboardData({
			data: e.currentTarget.dataset.value,
			success: (res: any) => {
				wx.showToast({
					title: msg[e.currentTarget.dataset.type],
					icon: 'none'
				})
			}
		})
	},
	copyAdmin() {
		// @ts-ignore
		const { openId, adminUrl } = this.data.userInfo
		wx.setClipboardData({
			data: adminUrl + openId,
			success: (res: any) => {
				console.log(res);
			}
		})
	},
	onShareAppMessage() { },
	onShareTimeline() { }
})
