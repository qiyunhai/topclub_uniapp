<template>
	<view class="main">
		<view class="content">
			<view class="search">
				<image src="../../static/img/search.jpg" class="icon"></image>
				<input type="text" name="search" placeholder="输入您喜欢的车型或关键字" />
			</view>
			<view class="open_box" @click="types_box_switch(true)">
				<view>筛选</view>
				<image src="../../static/img/shaixuanb.png"></image>
			</view>
			<view class="brands">
				<swiper :duration="1000" :current="current" @change="bannerChange">
					<swiper-item>
						<view class="swiper-item">
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
							<view class="item">
								<image src="http://test.bjtopclub.com/uploads/20210112/8bc670856e004fcb18e74505579156a8.png" mode=""></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="brands_dots">
				<view class="dot_item curr"></view>
				<view class="dot_item"></view>
				<view class="dot_item"></view>
			</view>
			<view class="cars">
				<view class="car_item" @click="car_detail()">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<view class="title">
						兰博基尼LP700-4
					</view>
					<view class="price">
						￥12999/天
					</view>
				</view>
				<view class="car_item">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<view class="title">
						兰博基尼LP700-4
					</view>
					<view class="price">
						￥12999/天
					</view>
				</view>
				<view class="car_item">
					<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<view class="title">
						兰博基尼LP700-4
					</view>
					<view class="price">
						￥12999/天
					</view>
				</view>
			</view>
			<view class="types" @touchmove.stop.prevent="moveHandle" :style="'display:'+types_box">
				<view class="mask" @click="types_box_switch(false)"></view>
				<view class="types_box">
					<view class="box_title">
						<text>筛选</text>
						<image src="../../static/img/shaixuanb.png"></image>
					</view>
					<view class="box_content">
						<view class="item">
							<view class="title">
								车辆类型
							</view>
							<view class="items">
								<view class="btn curr">不限</view>
								<view class="btn">轿跑</view>
								<view class="btn">跑车</view>
								<view class="btn">SUV</view>
								<view class="btn">最多五个字</view>
							</view>
						</view>
						<view class="item">
							<view class="title">
								车辆类型
							</view>
							<view class="items">
								<view class="btn curr">不限</view>
								<view class="btn">轿跑</view>
								<view class="btn">跑车</view>
								<view class="btn">SUV</view>
								<view class="btn">最多五个字</view>
							</view>
						</view>
						<view class="item">
							<view class="title">
								车辆类型
							</view>
							<view class="items">
								<view class="btn curr">不限</view>
								<view class="btn">轿跑</view>
								<view class="btn">跑车</view>
								<view class="btn">SUV</view>
								<view class="btn">最多五个字</view>
							</view>
						</view>
					</view>
					<view class="operation">
						<view class="reset">重置选择</view>
						<view class="submit">确认选择</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types_box: 'none',
				current: 0
			};
		},
		methods: {
			// 禁止页面滑动
			moveHandle() {
				return;
			},
			// swiper滑动
			bannerChange(e) {
				this.current = e.detail.current
			},
			// 控制筛选框显示/隐藏
			types_box_switch(e) {
				if(e) {
					var types_box = 'block';
				} else {
					var types_box = 'none';
				}
				this.types_box = types_box;
			},
			// 车辆详情页面
			car_detail() {
				uni.navigateTo({
					url: 'detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #FFFFFF;
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
		width: 576rpx;
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
	.open_box {
		position: absolute;
		float: left;
		width: 50rpx;
		height: 52rpx;
		top: 38rpx;
		right: 64rpx;
		font-size: 24rpx;
		image {
			position: absolute;
			width: 16rpx;
			height: 18rpx;
			top: 9rpx;
			left: 54rpx;
		}
	}
	.brands {
		position: absolute;
		margin-top: 108rpx;
		width: 100%;
		height: 336rpx;
		overflow: hidden;
		swiper {
			width: 100%;
			height: 100%;
		}
		.item {
			float: left;
			width: 168rpx;
			height: 168rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.brands_dots {
		position: absolute;
		margin-top: 464rpx;
		margin-left: 294rpx;
		.dot_item {
			float: left;
			width: 12rpx;
			height: 12rpx;
			background: #D8D8D8;
			border-radius: 10rpx;
			margin-left: 12rpx;
		}
		.curr {
			width: 36rpx;
			background: #BEA077;
		}
	}
	.cars {
		position: absolute;
		margin-top: 504rpx;
		// #ifdef H5
		margin-bottom: 100rpx;
		// #endif
		width: 100%;
		.car_item {
			width: 670rpx;
			height: 360rpx;
			overflow: hidden;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			border-radius: 16rpx;
			box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.08);
			font-size: 28rpx;
			font-weight: 500;
			image {
				width: 100%;
				height: 290.14rpx;
			}
			.title {
				float: left;
				margin-top: 8rpx;
				margin-left: 22rpx;
			}
			.price {
				float: right;
				margin-top: 8rpx;
				margin-right: 24rpx;
				color: #BEA077;
			}
		}
	}
	.types {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100vh;
		// #ifdef MP-WEIXIN || APP-PLUS
		height: 100vh;
		// #endif
		// #ifdef H5
		height: 92.8vh;
		// #endif
		.mask {
			float: left;
			background-color: #000000;
			opacity: 0.26;
			width: 222rpx;
			height: 100%;
		}
		.types_box {
			float: left;
			background-color: #FFFFFF;
			width: 528rpx;
			height: 100%;
			.box_title {
				width: 100%;
				height: 110rpx;
				border-bottom: 1rpx solid #E8E8E8;
				text {
					position: absolute;
					font-size: 28rpx;
					top: 30rpx;
					margin-left: 40rpx;
				}
				image {
					position: absolute;
					top: 38rpx;
					width: 20rpx;
					height: 22rpx;
					margin-left: 104rpx;
				}
			}
			.box_content {
				margin: 0 auto;
				margin-top: 30rpx;
				width: 468rpx;
				height: 50rpx;
				.item {
					float: left;
					margin-top: 26rpx;
					.title {
						font-weight: 500;
						font-size: 24rpx;
						margin-bottom: 20rpx;
					}
					.btn {
						float: left;
						background-color: #E8E8E8;
						color: #808080;
						font-size: 24rpx;
						width: 136rpx;
						height: 44rpx;
						line-height: 44rpx;
						border-radius: 4rpx;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						text-align: center;
					}
					.curr {
						background-color: #BEA077;
						font-weight: 600;
						color: #FFFFFF;
					}
				}
				.item:nth-child(1) {
					margin-top: 0rpx;
				}
			}
			.operation {
				float: left;
				margin-top: 40rpx;
				view {
					float: left;
					width: 216rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 4rpx;
					font-size: 24rpx;
					font-weight: 500;
					text-align: center;
				}
				.reset {
					background-color: #F1F1F1;
					color: #808080;
					margin-left: 30rpx;
				}
				.submit {
					background-color: #BEA077;
					color: #FFFFFF;
					margin-left: 16rpx;
				}
			}
		}
	}
</style>
