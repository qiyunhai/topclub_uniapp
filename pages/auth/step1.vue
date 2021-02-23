<template>
	<view class="main">
		<view class="idcard">
			<image src="../../static/logo.png" class="card"></image>
			<image src="../../static/logo.png" class="card"></image>
			<view class="msg">
				<view class="title">*拍摄要求</view>
				<view class="info">需本人有效身份证，请确保身份证和驾驶证同一人拍摄时确保无反光阴影，信息完整，内容清晰</view>
			</view>
			<view class="form">
				<view class="item">
					<view class="title">姓名</view>
					<input type="text" placeholder="请输入手机号" />
				</view>
				<view class="item">
					<view class="title">手机号</view>
					<input type="text" placeholder="请输入常用手机号" />
				</view>
				<view class="item">
					<view class="title">身份证</view>
					<input type="text" placeholder="请输入身份证号" />
				</view>
			</view>
			<button class="btn" @click="next">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			// 下一步
			next() {
				uni.navigateTo({
					url: 'step2'
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 624rpx;
		height: auto;
		margin: 0 auto;
	}
	.card {
		margin-top: 30rpx;
		width: 100%;
		height: 322rpx;
	}
	.msg {
		margin-top: 30rpx;
		.title {
			font-size: 24rpx;
			font-weight: 600;
		}
		.info {
			margin-top: 8rpx;
			width: 440rpx;
			font-size: 20rpx;
		}
	}
	.idcard {
		.form {
			.item {
				width: 100%;
				height: 60rpx;
				margin-top: 40rpx;
				border-bottom: 2rpx solid #EEEEEE;
				.title {
					float: left;
					margin-left: 16rpx;
					font-size: 28rpx;
				}
				input {
					float: right;
					font-size: 24rpx;
					padding-top: 4rpx;
					width: 492rpx;
				}
			}
		}
	}
	
	button::after {
		border: none;
	}
	.btn {
		margin-top: 40rpx;
		width: 100%;
		height: 92rpx;
		line-height: 92rpx;
		background-color: rgba($color: #BFA077, $alpha: 0.2);
		color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 46rpx;
	}
	.cur {
		background-color: rgba($color: #BFA077, $alpha: 1.0);
	}
</style>
