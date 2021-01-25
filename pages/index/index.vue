<template>
	<view class="main">
		<view class="content">
			<view class="search">
				<image src="../../static/img/search.jpg" class="icon"></image>
				<input type="text" name="search" placeholder="输入您喜欢的车型或关键字" confirm-type="search" @confirm="doSearch" />
			</view>
			<image src="../../static/img/search_kefu.png" class="kefu"></image>
			<swiper :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="http://test.bjtopclub.com/static/img/banner.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="http://test.bjtopclub.com/static/img/banner.png"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="menu">
				<view class="item">
					<image src="../../static/img/index/dingsucheku.png"></image>
				</view>
				<view class="item">
					<image src="../../static/img/index/zucheliucheng.png"></image>
				</view>
				<view class="item">
					<image src="../../static/img/index/changjianwenti.png"></image>
				</view>
				<view class="item">
					<image src="../../static/img/index/guanyuwomen.png"></image>
				</view>
			</view>
			<view class="member">
				<image src="../../static/img/default_head.jpg" class="face"></image>
				<view class="member_name">尊敬的会员Clark-lee，您好</view>
				<view class="show_member">
					<text>查看会员卡</text>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</view>
			<view class="dsyx">
				<view class="title">
					<image src="../../static/img/index/dingsuyouxuan.png" class="title_image"></image>
				</view>
				<view class="item">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<text class="car_name">阿斯顿马丁Va...</text>
					<text class="car_price">10000/天</text>
				</view>
				<view class="item">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<text class="car_name">阿斯顿马丁Va...</text>
					<text class="car_price">10000/天</text>
				</view>
				<view class="item">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<text class="car_name">阿斯顿马丁Va...</text>
					<text class="car_price">10000/天</text>
				</view>
				<view class="item">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<text class="car_name">阿斯顿马丁Va...</text>
					<text class="car_price">10000/天</text>
				</view>
			</view>
			<view class="yhzq">
				<view class="title">
					<image src="../../static/img/index/youhuizhuanqu.png" class="title_image"></image>
					<view class="more">
						<text>更多</text>
						<image src="../../static/img/rightj.png"></image>
					</view>
				</view>
				<view class="list">
					<view class="item">
						<image src="http://test.bjtopclub.com/static/img/dz1.png" class="img1"></image>
					</view>
					<view class="item">
						<image src="http://test.bjtopclub.com/static/img/dz2.png" class="img2"></image>
					</view>
					<view class="item">
						<image src="http://test.bjtopclub.com/static/img/dz3.png" class="img3"></image>
					</view>
				</view>
			</view>
			<view class="foo_img">
				<image src="../../static/img/index/jieshao.png"></image>
				<view class="hr_box"></view>
			</view>
			<view class="footer_kefu">客服24小时服务热线：18518888088</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			// 搜索
			doSearch(e) {
				uni.setStorageSync('search_car', e.detail.value)
				uni.switchTab({
					url: '/pages/car/car'
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #FBFBFB;
		width: 100%;
		height: auto;
	}
	.content {
		width: 670rpx;
		margin: 0 auto;
	}
	.search {
		float: left;
		position: relative;
		margin-top: 30rpx;
		width: 596rpx;
		height: 48rpx;
		background-color: #EBEBEB;
		border-radius: 12px;
		.icon {
			position: absolute;
			width: 24rpx;
			height: 28rpx;
			top: 10rpx;
			left: 32rpx;
		}
		input {
			position: absolute;
			left: 76rpx;
			width: 500rpx;
			height: 28rpx;
			line-height: 28rpx;
			font-size: 20rpx;
			font-weight: 400;
			// #ifdef H5 || APP-PLUS
			padding-top: 10rpx;
			// #endif
		}
	}
	.kefu {
		position: absolute;
		float: left;
		width: 50rpx;
		height: 52rpx;
		top: 26rpx;
		right: 40rpx;
	}
	swiper{
		width: 670rpx;
		height: 280rpx;
		padding-top: 106rpx;
		image {
			width: 670rpx;
			height: 280rpx;
			border-radius: 8px;
		}
	}
	.menu {
		margin-top: 40rpx;
		.item {
			display: inline-flex;
			height: 152rpx;
			width: 138rpx;
			margin-left: 38rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.item:nth-child(1) {
			margin-left: 0rpx;
		}
	}
	.member {
		position: relative;
		margin-top: 34rpx;
		width: 100%;
		height: 96rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		font-size: 24rpx;
		font-weight: 400;
		.face {
			position: absolute;
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			top: 14rpx;
			left: 20rpx;
		}
		.member_name {
			position: absolute;
			top: 32rpx;
			left: 106rpx;
			color: #222222;
		}
		.show_member {
			position: absolute;
			top: 32rpx;
			right: 20rpx;
			color: #808080;
			image {
				width: 10rpx;
				height: 20rpx;
				margin-left: 8rpx;
			}
		}
	}
	.dsyx {
		margin-top: 40rpx;
		width: 100%;
		height: auto;
		.title {
			.title_image {
				width: 150rpx;
				height: 46rpx;
			}
			margin-bottom: 28rpx;
		}
		overflow: hidden;
		.item {
			float: left;
			margin-right: 8rpx;
			margin-bottom: 10rpx;
			width: 326rpx;
			height: 226rpx;
			background-color: #FFFFFF;
			border-radius: 14rpx;
			overflow: hidden;
			box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.05);
			image {
				width: 100%;
				height: 176rpx;
			}
			text {
				font-size: 24rpx;
			}
			.car_name {
				float: left;
				margin-left: 12rpx;
			}
			.car_price {
				float: right;
				margin-right: 12rpx;
			}
		}
	}
	.yhzq {
		margin-top: 30rpx;
		width: 100%;
		height: auto;
		.title {
			.title_image {
				float: left;
				width: 150rpx;
				height: 46rpx;
			}
			.more {
				font-size: 24rpx;
				color: #808080;
				margin-left: 595rpx;
				padding-top: 10rpx;
				image {
					width: 10rpx;
					height: 20rpx;
					margin-left: 8rpx;
				}
			}
		}
		.list {
			width: 100%;
			overflow: hidden;
			margin-top: 28rpx;
			.item {
				image {
					float: left;
					border-radius: 16rpx;
					width: 332rpx;
					height: 180rpx;
					box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.05);
				}
				.img1 {
					width: 318rpx;
					height: 380rpx;
				}
				.img2 {
					margin-left: 12rpx;
				}
				.img3 {
					margin-top: 20rpx;
					margin-left: 12rpx;
				}
			}
		}
	}
	.foo_img {
		margin-top: 40rpx;
		image {
			width: 100%;
			height: 300rpx;
		}
		.hr_box {
			height: 1rpx;
			width: 528rpx;
			border-bottom: 1rpx solid #979797;
			margin: 34rpx auto;
		}
	}
	.footer_kefu {
		text-align: center;
		color: #B8966C;
		margin-bottom: 40rpx;
		text-decoration:underline;
	}
</style>
