// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
	data: {
		tags:[
			{
				type:'primary',
				name:'Vue2/Vue3'
			},
			{
				type:'success',
				name:'React'
			},
			{
				type:'danger',
				name:'NodeJs'
			},
			{
				type:'warning',
				name:'小程序'
			},
			{
				type:'primary',
				name:'Git'
			},
			{
				type:'success',
				name:'Vite'
			},
			{
				type:'danger',
				name:'Es6'
			},
			{
				type:'warning',
				name:'Mysql'
			}
		]
	},

	onLoad() {
		// @ts-ignore

	},

})
