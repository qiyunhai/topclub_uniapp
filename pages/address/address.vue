<template>
	<view class="main">
		<view class="item" v-for="(item, index) in list">
			<view class="default cur" v-if="item.default == 1">默认</view>
			<view @click="setDefault(item.id)" class="default" v-else>设默认</view>
			<view class="info">{{item.name}} 86-{{item.phone}}</view>
			<view class="addr">{{item.borrow_address}}</view>
			<view class="btn">编辑</view>
			<view class="hr"></view>
		</view>
		<view class="add" @click="form(0)">点击添加更多地址</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				list: []
			};
		},
		methods: {
			onLoad() {
				this.getData();
			},
			// 获取列表数据
			getData() {
				api.request('/api/Address/index', {}, "GET", true).then(res => {
					if(res.data.status == 1) {
						this.list = res.data.result;
					} else if(res.data.status == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
					}
				})
			},
			// 设置默认地址
			setDefault(id) {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '您确定要设置该地址为默认地址吗？',
					success(res) {
						if (res.confirm) {
							var data = {
								id: id
							}
							api.request('/api/Address/setDefault', data, 'POST', true).then(res => {
								if(res.data.status == 1) {
									uni.showToast({
										title: res.data.message,
										icon: 'success'
									})
									that.getData()
								} else if(res.data.status == 0) {
									uni.showToast({
										title: res.data.message,
										icon: 'none'
									})
								}
							})
						}
					}
				})
			},
			// 添加、编辑表单
			form(id) {
				if(id == 0) {
					var url = 'form';
				} else {
					var url = 'form?id='+id;
				}
				uni.navigateTo({
					url: url
				})
			},
			// 下拉加载更多
			onPullDownRefresh() {
				this.getData();
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
	}
	.item {
		margin-top: 30rpx;
		margin-left: 22rpx;
		.default {
			float: left;
			font-size: 24rpx;
			width: 88rpx;
			height: 88rpx;
			line-height: 88rpx;
			background-color: #F7F7F7;
			color: #BFA077;
			border-radius: 50%;
			text-align: center;
		}
		.cur {
			background-color: #808080;
			color: #FFFFFF;
		}
		.info {
			margin-top: 4rpx;
			margin-left: 108rpx;
			color: #393D59;
			font-size: 28rpx;
		}
		.addr {
			float: left;
			margin-left: 20rpx;
			color: #393D59;
			font-size: 28rpx;
		}
		.btn {
			float: left;
			margin-top: -68rpx;
			margin-left: 598rpx;
			width: 128rpx;
			height: 40rpx;
			line-height: 40rpx;
			font-size: 24rpx;
			color: #808080;
			text-align: center;
			border-left: 2rpx solid #808080;
		}
		.hr {
			margin-top: 44rpx;
			margin-left: 18rpx;
			width: 710rpx;
			height: 30rpx;
			border-bottom: 2rpx solid #F7F7F7;
		}
	}
	.add {
		margin-top: 154rpx;
		margin-left: 234rpx;
		width: 276rpx;
		height: 64rpx;
		line-height: 64rpx;
		border: 2rpx solid #BFA077;
		border-radius: 32rpx;
		text-align: center;
		font-size: 28rpx;
		color: #BFA077;
	}
</style>
