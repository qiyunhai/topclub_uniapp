<template>
	<view class="main">
		<view class="module">
			<view class="item">
				<view class="l">头像</view>
				<image :src="userInfo.head_image == '' ? '../../static/img/default_head.jpg' : userInfo.head_image" class="r"></image>
			</view>
			<view class="item">
				<view class="l">昵称</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
			<view class="item">
				<view class="l">生日</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
		</view>
		<view class="module">
			<view class="item">
				<view class="l">手机号</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
			<view class="item">
				<view class="l">信息认证</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
			<view class="item">
				<view class="l">更改密码</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
		</view>
		<view class="module">
			<view class="item">
				<view class="l">驾驶人</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
			<view class="item">
				<view class="l">紧急联系人</view>
				<image src="../../static/img/rightj.png" class="r"></image>
			</view>
		</view>
		<view class="module logout" @click="logout">退出登录</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				// 用户信息
				userInfo: []
			};
		},
		methods: {
			onLoad() {
				this.userInfo = uni.getStorageSync('userInfo')
			},
			// 退出登录
			logout() {
				uni.showModal({
					title: '提示',
					content: '您确定要退出登录吗？',
					success(res) {
						if (res.confirm) {
							api.request('/api/Logout/index', {}, "GET", true).then(res => {
								if(res.data.status == 1) {
									uni.switchTab({
										url: '../my/my'
									})
								} else {
									uni.showToast({
										title: res.data.message,
										icon: 'none'
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		position: absolute;
		width: 100%;
		height: 100vh;
		background-color: #F7F7F7;
		.module {
			background-color: #FFFFFF;
			width: 100%;
			margin-top: 20rpx;
			.item {
				margin: 0 auto;
				width: 670rpx;
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: 2rpx solid #F5F5F5;
				.l {
					float: left;
					color: #000000;
					font-size: 28rpx;
				}
				.r {
					float: right;
					margin-top: 36rpx;
					width: 16rpx;
					height: 28rpx;
				}
			}
			.item:nth-last-child(1) {
				border-bottom: 0rpx;
			}
		}
		.module:nth-child(1) .item:nth-child(1) {
			height: 136rpx;
			line-height: 136rpx;
			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: 50%;
				margin-top: 20rpx;
			}
		}
	}
	.logout {
		height: 96rpx;
		line-height: 96rpx;
		text-align: center;
		color: #BFA077;
		font-size: 28rpx;
		font-weight: 600;
	}
</style>
