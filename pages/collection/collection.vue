<template>
	<view class="main">
		<view class="item">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="title">兰博基尼LP700-4</view>
			<view class="info1">
				<image src="../../static/img/car_jingpai.png"></image>
				<view>京牌</view>
			</view>
			<view class="info2">
				<image src="../../static/img/car_chexing.png"></image>
				<view>16年上牌</view>
			</view>
			<view class="price">￥<text>6400</text>/天</view>
			<image src="../../static/img/car/car_shoucang.png" class="star"></image>
		</view>
		<view class="item">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="title">兰博基尼LP700-4</view>
			<view class="info1">
				<image src="../../static/img/car_jingpai.png"></image>
				<view>京牌</view>
			</view>
			<view class="info2">
				<image src="../../static/img/car_chexing.png"></image>
				<view>16年上牌</view>
			</view>
			<view class="price">￥<text>6400</text>/天</view>
			<image src="../../static/img/car/car_shoucang.png" class="star"></image>
		</view>
		<view class="item">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="title">兰博基尼LP700-4</view>
			<view class="info1">
				<image src="../../static/img/car_jingpai.png"></image>
				<view>京牌</view>
			</view>
			<view class="info2">
				<image src="../../static/img/car_chexing.png"></image>
				<view>16年上牌</view>
			</view>
			<view class="price">￥<text>6400</text>/天</view>
			<image src="../../static/img/car/car_shoucang.png" class="star"></image>
		</view>
		<view class="not_data" style="display: none;">
			<image src="../../static/img/collection/not_data.png" class="img"></image>
			<view class="info">你还没有收藏过爱车，去车库看看吧</view>
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
		height: 220rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 16rpx;
		.img {
			float: left;
			margin-top: 30rpx;
			margin-left: 30rpx;
			width: 272rpx;
			height: 160rpx;
			border-radius: 16rpx;
		}
		.title {
			float: left;
			margin-top: 30rpx;
			margin-left: 42rpx;
			color: #393D59;
			font-size: 36rpx;
			width: 326rpx;
		}
		.info1 {
			image {
				margin-left: 42rpx;
				margin-top: 20rpx;
				float: left;
				width: 40rpx;
				height: 20rpx;
			}
			view {
				margin-top: 12rpx;
				margin-left: 8rpx;
				float: left;
				color: #393B5B;
				font-size: 24rpx;
			}
		}
		.info2 {
			image {
				margin-top: 16rpx;
				margin-left: 20rpx;
				float: left;
				width: 28rpx;
				height: 28rpx;
			}
			view {
				margin-top: 12rpx;
				margin-left: 12rpx;
				float: left;
				color: #393B5B;
				font-size: 24rpx;
			}
		}
		.price {
			clear: both;
			position: absolute;
			margin-top: 140rpx;
			margin-left: 334rpx;
			color: #BFA077;
			font-size: 28rpx;
			font-weight: 600;
			text {
				font-size: 36rpx;
			}
		}
		.star {
			clear: both;
			position: absolute;
			margin-top: 146rpx;
			margin-left: -82rpx;
			width: 38rpx;
			height: 38rpx;
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
