<template>
	<view class="main">
		<view class="drive">
			<image src="../../static/logo.png" class="card"></image>
			<image src="../../static/logo.png" class="card"></image>
			<view class="msg">
				<view class="title">*拍摄要求</view>
				<view class="info">需本人有效身份证，请确保身份证和驾驶证同一人拍摄时确保无反光阴影，信息完整，内容清晰</view>
			</view>
			<button class="btn">确认提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
