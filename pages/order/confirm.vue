<template>
	<view class="main">
		<view class="module address" @click="address">
			<image src="../../static/img/order/dingwei.png" class="dw"></image>
			<view class="info">请选择送车地址</view>
			<!-- <view class="info1">李某 86-17553665533</view>
			<view class="info2">北京市 朝阳区 高碑店镇 高碑店村口</view> -->
			<image src="../../static/img/rightj.png" class="jiao"></image>
		</view>
		<view class="module car">
			<image src="http://test.bjtopclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
			<view class="title">兰博基尼LP700-4</view>
			<view class="paizhao">
				<image src="../../static/img/car_jingpai.png"></image>
				<text>京牌</text>
			</view>
			<view class="nian">
				<image src="../../static/img/car_chexing.png"></image>
				<text>16年上牌</text>
			</view>
			<view class="price">¥<text>12999</text>/天</view>
		</view>
		<view class="module time">
			<picker mode="date" :value="startDate" @change="start_date" class="start">
				<view class="title">用车时间</view>
				<view class="notime">未选时间</view>
				<view class="hr"></view>
			</picker>
			<view class="date">
				<view>用车时间1天</view>
				<image src="../../static/img/order/jiantou.png"></image>
			</view>
			<picker :value="endDate" :range="times" class="end">
				<view class="title">还车时间</view>
				<view class="notime">未选时间</view>
				<view class="hr"></view>
			</picker>
		</view>
		<view class="module content">
			<view class="coupon">
				<view class="l">优惠券</view>
				<view class="r">
					<text>无优惠券可用</text>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</view>
			<view class="info">
				<view class="title">费用明细</view>
				<view class="item">
					<view class="l">车辆租金（线下缴纳）</view>
					<view class="r">￥12999</view>
				</view>
				<view class="item">
					<view class="l">基准押金（线下缴纳）</view>
					<view class="r">￥50000</view>
				</view>
				<view class="item">
					<view class="l">定金费用（订单生效时转为违章押金）</view>
					<view class="r">￥2000</view>
				</view>
				<view class="price">
					<view class="l">线下需交费用</view>
					<view class="r">￥62999</view>
				</view>
				<view class="table">
					<view class="title">押金说明</view>
					<view class="boxs">
						<view class="tr">
							<view class="td">
								租车押金
							</view>
							<view class="td">
								<view class="price">
									￥50000 <text>可退</text>
								</view>
								<view class="introduce">
									交付车辆时缴纳50000元租车押金，若用车期间无车损，还车当日退还押金
								</view>
							</view>
						</view>
						<view class="tr">
							<view class="td">
								违章押金
							</view>
							<view class="td">
								<view class="price">
									￥2000 <text>可退</text>
								</view>
								<view class="introduce">
									订单生效时定金转为违章押金，若用车期间无违章，订单结束后20天内退还押金
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="content">
				<view class="xy">
					<checkbox value="" />
					<view>
						我已阅读并同意<text class="a" @click="xieyi_box()">《用车服务协议》</text>
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="lv">
					<view class="price">￥2000</view>
					<view class="info">该费用是车辆定金，交车时缴纳佣金及押金</view>
				</view>
				<view class="rv" @click="yuding()">
					<image src="../../static/img/car/lijiyuding.png"></image>
				</view>
			</view>
			<!-- <view class="select_time_box">
				123
			</view> -->
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				'times': ['00时','01时','02时','03时','04时','05时','06时','07时','08时','09时','10时','11时','12时'],
				// 用车时间
				startDate: '',
				startTime: '',
				// 还车时间
				endDate: '',
				endTime: '',
			}
		},
		onLoad() {
			
		},
		methods: {
			// 选择送车地址
			address() {
				uni.navigateTo({
					url: '../address/address'
				})
			},
			// 用车时间
			start_date(e) {
				// console.log(e)
			},
			start_time() {
				
			},
			// 还车时间
			end_date() {
				
			},
			end_time() {
				
			}
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #F7F7F7;
		width: 100%;
		height: auto;
	}
	.module {
		background-color: #FFFFFF;
		margin-bottom: 18rpx;
	}
	.address {
		position: relative;
		height: 120rpx;
		color: #393D59;
		font-size: 28rpx;
		.dw {
			position: absolute;
			width: 26rpx;
			height: 34rpx;
			margin-top: 44rpx;
			margin-left: 40rpx;
		}
		.info {
			position: absolute;
			padding-top: 40rpx;
			margin-left: 86rpx;
		}
		.jiao {
			position: absolute;
			width: 10rpx;
			height: 20rpx;
			margin-top: 50rpx;
			margin-left: 700rpx;
		}
		.info1 {
			position: absolute;
			margin-top: 22rpx;
			margin-left: 86rpx;
		}
		.info2 {
			position: absolute;
			margin-top: 62rpx;
			margin-left: 86rpx;
		}
	}
	.car {
		position: relative;
		height: 220rpx;
		.img {
			position: absolute;
			width: 240rpx;
			height: 160rpx;
			margin-top: 30rpx;
			margin-left: 40rpx;
		}
		.title {
			position: absolute;
			font-size: 36rpx;
			color: #393D59;
			margin-top: 30rpx;
			margin-left: 314rpx;
		}
		.paizhao {
			position: absolute;
			margin-left: 314rpx;
			padding-top: 90rpx;
			image {
				width: 40rpx;
				height: 20rpx;
			}
			text {
				margin-left: 12rpx;
				color: #393B5B;
				font-size: 24rpx;
			}
		}
		.nian {
			position: absolute;
			margin-left: 434rpx;
			padding-top: 100rpx;
			image {
				float: left;
				width: 28rpx;
				height: 28rpx;
			}
			text {
				float: left;
				margin-left: 12rpx;
				color: #393B5B;
				font-size: 24rpx;
			}
		}
		.price {
			color: #BFA077;
			font-size: 28rpx;
			font-weight: 600;
			padding-top: 140rpx;
			margin-left: 314rpx;
			text {
				font-size: 36rpx;
			}
		}
	}
	.time {
		color: #393D59;
		height: 186rpx;
		.notime {
			float: left;
			margin-top: 4rpx;
			font-size: 36rpx;
			font-weight: 600;
		}
		.hr {
			clear: both;
			width: 200rpx;
			height: 20rpx;
			border-bottom: 2rpx solid #F7F7F7;
		}
		.start {
			float: left;
			.title {
				padding-top: 40rpx;
				margin-left: 88rpx;
				font-size: 28rpx;
				font-weight: 500;
			}
			.notime {
				margin-left: 88rpx;
			}
			.hr {
				margin-left: 60rpx;
			}
		}
		.date {
			float: left;
			margin-left: 48rpx;
			view {
				padding-top: 40rpx;
				color: #808080;
				font-size: 24rpx;
			}
			image {
				margin-left: 20rpx;
				width: 100rpx;
				height: 16rpx;
			}
		}
		.end {
			float: left;
			.title {
				padding-top: 40rpx;
				margin-left: 114rpx;
				font-size: 28rpx;
				font-weight: 500;
			}
			.notime {
				margin-left: 84rpx;
			}
			.hr {
				margin-left: 60rpx;
			}
		}
	}
	.content {
		.coupon {
			margin: 0 auto;
			width: 670rpx;
			height: 120rpx;
			line-height: 120rpx;
			border-bottom: 2rpx solid #F7F7F7;
			.l {
				float: left;
				view {
					color: #393D59;
					font-size: 28rpx;
				}
			}
			.r {
				float: right;
				color: #808080;
				font-size: 24rpx;
				image {
					margin-left: 12rpx;
					width: 10rpx;
					height: 20rpx;
				}
			}
		}
		.info {
			margin: 0 auto;
			width: 670rpx;
			.title {
				color: #393D59;
				font-size: 28rpx;
				margin-top: 30rpx;
				font-weight: 500;
			}
			.item {
				width: 100%;
				height: 34rpx;
				line-height: 34rpx;
				margin-top: 20rpx;
				.l {
					float: left;
					color: #393D59;
					font-size: 24rpx;
				}
				.r {
					float: right;
					color: #BFA077;
					font-size: 24rpx;
					font-weight: 600;
				}
			}
			.price {
				margin-top: 30rpx;
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				border-top: 2rpx solid #F7F7F7;
				border-bottom: 2rpx solid #F7F7F7;
				.l {
					float: left;
					color: #393D59;
					font-size: 28rpx;
					font-weight: 600;
				}
				.r {
					float: right;
					color: #BFA077;
					font-size: 28rpx;
					font-weight: 600;
				}
			}
			.table {
				background-color: #F7F7F7;
				width: 660rpx;
				height: 430rpx;
				margin-top: 46rpx;
				.title {
					padding-top: 40rpx;
					margin-left: 32rpx;
					color: #393D59;
					font-size: 28rpx;
					font-weight: 500;
				}
				.boxs {
					margin-top: 26rpx;
					margin-left: 32rpx;
					width: 594rpx;
					.td {
						height: 148rpx;
						border: 2rpx solid #D8D8D8;
					}
					.td:nth-child(1) {
						float: left;
						width: 148rpx;
						line-height: 148rpx;
						text-align: center;
						color: #D8D8D8;
						font-size: 28rpx;
						font-weight: 500;
					}
					.td:nth-child(2) {
						float: right;
						width: 440rpx;
						border-left: 0rpx;
						.price {
							margin-top: -14rpx;
							margin-left: 26rpx;
							font-size: 20rpx;
							font-weight: 600;
							color: #808080;
							text {
								color: #BFA077;
								margin-left: 8rpx;
							}
						}
						.introduce {
							width: 380rpx;
							color: #D8D8D8;
							font-size: 20rpx;
							margin-top: -24rpx;
							margin-left: 26rpx;
						}
					}
					.tr:nth-child(2) {
						.td {
							border-top: 0rpx;
						}
					}
				}
			}
		}
		.content {
			width: 670rpx;
			margin: 0 auto;
			.xy {
				float: left;
				width: 100%;
				height: 98rpx;
				line-height: 98rpx;
				font-size: 20rpx;
				checkbox {
					float: left;
					margin-top: -3rpx;
				}
				view {
					float: left;
					.a {
						color: #BFA077;
					}
				}
				padding-bottom: 98rpx;
			}
		}
		.footer {
			position: fixed;
			z-index: 100;
			bottom: 0rpx;
			clear: both;
			width: 100%;
			border-top: 1rpx solid #F7F7F7;
			.lv {
				float: left;
				width: 65.87%;
				height: 98rpx;
				background-color: #FFFFFF;
				.price {
					color: #BFA077;
					font-size: 36rpx;
					margin-top: 8rpx;
					margin-left: 40rpx;
				}
				.info {
					color: #808080;
					font-size: 20rpx;
					margin-left: 46rpx;
				}
			}
			.rv {
				float: left;
				width: 34.13%;
				height: 98rpx;
				background-color: #BFA077;
				image {
					width: 118rpx;
					height: 42rpx;
					margin-top: 28rpx;
					margin-left: 70rpx;
				}
			}
		}
	}
	.select_time_box {
		position: fixed;
		z-index: 101;
		width: 100%;
		height: 716rpx;
		background-color: #4CD964;
		bottom: 98rpx;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
	}
</style>
