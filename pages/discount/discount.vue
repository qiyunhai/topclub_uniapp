<template>
	<view class="main">
		<view class="item">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="l">牛气冲天迎新年！</view>
			<view class="r">进行中</view>
		</view>
		<view class="item">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="l">牛气冲天迎新年！</view>
			<view class="r">进行中</view>
		</view>
		<view class="item">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="l">牛气冲天迎新年！</view>
			<view class="r">进行中</view>
		</view>
		
		<view class="not_data" style="display: none;">
			<image src="../../static/img/collection/not_data.png" class="img"></image>
			<view class="info">暂时还没有优惠活动，去车库看看吧</view>
			<view class="btn" @click="car">
				<image src="../../static/logo.png"></image>
			</view>
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
			// 车库
			car() {
				uni.switchTab({
					url: '../car/car'
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		position: absolute;
		width: 100%;
		min-height: 100vh;
		background-color: #F7F7F7;
	}
	.item {
		margin: 0 auto;
		margin-top: 26rpx;
		width: 670rpx;
		height: 386rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 16rpx;
		font-size: 28rpx;
		font-weight: 500;
		.img {
			width: 100%;
			height: 286rpx;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
		}
		.l {
			float: left;
			color: #000000;
			margin-top: 24rpx;
			margin-left: 24rpx;
		}
		.r {
			float: right;
			color: #BEA077;
			margin-top: 24rpx;
			margin-right: 24rpx;
		}
	}
	.item:nth-child(1) {
		margin-top: 40rpx;
	}
	.not_data {
		margin-top: 244rpx;
		text-align: center;
		.img {
			width: 604rpx;
			height: 464rpx;
			margin-bottom: 150rpx;
		}
		.info {
			color: #808080;
			font-size: 24rpx;
		}
		.btn {
			margin-left: 136rpx;
			margin-top: 40rpx;
			width: 480rpx;
			height: 88rpx;
			background-color: #BFA077;
			border-radius: 44rpx;
			image {
				margin-top: 22rpx;
				width: 148rpx;
				height: 42rpx;
			}
		}
	}
</style>
