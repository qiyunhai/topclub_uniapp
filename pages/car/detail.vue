<template>
	<view class="main">
		<view class="banner">
			<swiper :duration="1000" :current="current" @change="bannerChange">
				<swiper-item v-for="(item, index) in list.images">
					<view class="swiper-item">
						<image :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="banner_page">
				<text>{{current + 1}}</text>/<text>{{imagesTotal}}</text>
			</view>
			<view class="star">
				<image src="../../static/img/car/car_shoucang.png"></image>
			</view>
		</view>
		<view class="car_info">
			<view class="price">￥{{list.price}}/天</view>
			<view class="original_price">原价￥{{list.original_price}}/天</view>
			<view class="title">{{list.title}}</view>
			<view class="introduce">{{list.introduce}}</view>
			<view class="hr_box"></view>
			<view class="specs">
				<view class="item1">
					<image src="../../static/img/car_jingpai.png"></image>
					<text class="specs_item">{{list.license}}</text>
				</view>
				<view class="item2">
					<image src="../../static/img/car_rixian.png"></image>
					<text class="specs_item">{{list.day_limit}}</text>
				</view>
				<view class="item3">
					<image src="../../static/img/car_chexing.png"></image>
					<text class="specs_item">{{list.year_limit}}</text>
				</view>
			</view>
		</view>
		<view class="item_box">
			<view class="box_title">长租优惠</view>
			<view class="yhlist">
				<view>3日租金：<text>￥{{list.day3_price * 3}}</text>（合计￥{{list.day3_price}}/天 <text>省￥{{(list.price * 3) - (list.day3_price * 3)}}</text>）</view>
				<view>7日租金：<text>￥{{list.day3_price * 7}}</text>（合计￥{{list.day7_price}}/天 <text>省￥{{(list.price * 7) - (list.day3_price * 7)}}</text>）</view>
				<view>15日租金：<text>￥{{list.day3_price * 15}}</text>（合计￥{{list.day15_price}}/天 <text>省￥{{(list.price * 15) - (list.day3_price * 15)}}</text>）</view>
				<view>30日租金：<text>￥{{list.day3_price * 30}}</text>（合计￥{{list.day30_price}}/天 <text>省￥{{(list.price * 30) - (list.day3_price * 30)}}</text>）</view>
			</view>
			<view class="yhitem">
				<view class="item">
					<image src="../../static/img/car/huiyuanquanyi.png" class="icon"></image>
					<view>会员权益详细介绍</view>
					<image src="../../static/img/car/car_jiantou.png" class="show"></image>
				</view>
				<view class="item">
					<image src="../../static/img/car/jizhunyajin.png" class="icon"></image>
					<view>基准押金 ￥{{list.mortgage_price}}</view>
					<image src="../../static/img/car/car_jiantou.png" class="show"></image>
				</view>
			</view>
		</view>
		<view class="item_box">
			<view class="box_title">车辆配置</view>
			<view class="pzlist">
				<view class="item">
					<image src="../../static/img/car/fadongji.png"></image>
					<view>6.5L发动机</view>
				</view>
				<view class="item">
					<image src="../../static/img/car/fadongji.png"></image>
					<view>6.5L发动机</view>
				</view>
				<view class="item">
					<image src="../../static/img/car/fadongji.png"></image>
					<view>6.5L发动机</view>
				</view>
				<view class="item">
					<image src="../../static/img/car/fadongji.png"></image>
					<view>6.5L发动机</view>
				</view>
				<view class="item">
					<image src="../../static/img/car/fadongji.png"></image>
					<view>6.5L发动机</view>
				</view>
			</view>
		</view>
		<view class="item_box">
			<view class="box_title">用车流程</view>
			<view class="lccontent">
				<image src="../../static/img/car/yongcheliucheng.png"></image>
			</view>
		</view>
		<view class="item_box">
			<view class="content">
				<view>
					<image src="../../static/img/default_head.jpg" class="face"></image>
					<view class="gtitle">顶速超跑服务管家</view>
					<view class="ginfo">全天24小时在线咨询，详细讲解，用车无忧</view>
					<image src="../../static/img/car/car_jiantou.png" class="icon"></image>
				</view>
				<view class="xy">
					<checkbox value="" />
					<view>
						我已阅读并同意<text class="a" @click="xieyi_box()">《用车服务协议》</text>
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="lv">
					<view class="price">￥{{list.reserve_price}}</view>
					<view class="info">该费用是车辆定金，交车时缴纳佣金及押金</view>
				</view>
				<view class="rv" @click="yuding()">
					<image src="../../static/img/car/lijiyuding.png"></image>
				</view>
			</view>
		</view>
		<view class="mengban" :style="'display:'+xymengban" @touchmove.stop.prevent="moveHandle" @click="close_xieyi_box()">
			<view class="xieyi">
				<view class="xytitle">基准押金明细</view>
				<view class="item">
					<view class="title">*租车押金￥{{list.mortgage_price}}</view>
					<text>可退</text>
					<view class="introduce">
						订单生效时定金转为违章押金，若用车期间无违章，还车后20天内退还押金
					</view>
				</view>
				<view class="item">
					<view class="title">*违章押金￥{{list.reserve_price}}</view>
					<text>可退</text>
					<view class="introduce">
						订单生效时定金转为违章押金，若用车期间无违章，还车后20天内退还押金
					</view>
				</view>
			</view>
		</view>
		<view class="mengban all" :style="'display:'+yzmengban" @touchmove.stop.prevent="moveHandle">
			<view class="auth_box">
				<view class="title">温馨提示</view>
				<view class="introduce">租车前需要进行身份验证和驾驶证验证哦</view>
				<view class="btn" @click="toAuth()">去验证</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				xymengban: 'none',//协议蒙版
				yzmengban: 'none',//验证蒙版
				list: [],	//数据
				imagesTotal: 0,	//轮播图数量
				current: 0,
				id: '',//车辆id
			}
		},
		methods: {
			onLoad(e) {
				this.id = e.id;
				var data = {
					id: e.id
				};
				api.request('/api/car/detail', data).then(res => {
					if(res.data.status == 1) {
						this.list = res.data.result;
						this.imagesTotal = res.data.result.images.length;
					} else if(res.data.status == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
					}
				})
			},
			bannerChange(e) {
				this.current = e.detail.current;
			},
			// 禁止页面滑动
			moveHandle() {
				return;
			},
			// 用车协议
			xieyi_box() {
				this.xymengban = 'block';
			},
			// 关闭所有弹出
			close_xieyi_box() {
				this.xymengban = 'none';
			},
			// 立即预定
			yuding() {
				if(api.isLogin()) {
					uni.navigateTo({
						url: '../order/confirm?id='+this.id
					})
				}
				// this.yzmengban = 'block'
			},
			// 去验证
			toAuth() {
				this.yzmengban = 'none'
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
	.banner {
		width: 100%;
		height: 384rpx;
		swiper {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 384rpx;
			}
		}
		.banner_page {
			position: absolute;
			width: 80rpx;
			height: 36rpx;
			background-color: #000000;
			border-radius: 18rpx;
			opacity: 0.5;
			top: 328rpx;
			right: 30rpx;
			color: #FFFFFF;
			font-size: 20rpx;
			line-height: 36rpx;
			text-align: center;
		}
		.star {
			position: absolute;
			top: 30rpx;
			right: 30rpx;
			image {
				width: 70rpx;
				height: 70rpx;
			}
		}
	}
	.car_info {
		background-color: #FFFFFF;
		.price {
			float: left;
			font-size: 28rpx;
			color: #BFA077;
			font-weight: 600;
			margin-top: 30rpx;
			margin-left: 40rpx;
		}
		.original_price {
			float: left;
			font-size: 20rpx;
			color: #808080;
			margin-top: 40rpx;
			margin-left: 12rpx;
			text-decoration:line-through;
		}
		.title {
			clear: both;
			font-size: 36rpx;
			color: #393D59;
			padding-top: 14rpx;
			margin-left: 40rpx;
			font-weight: 500;
		}
		.introduce {
			width: 670rpx;
			font-size: 20rpx;
			color: #808080;
			padding-top: 12rpx;
			margin-left: 40rpx;
		}
		.hr_box {
			width: 670rpx;
			height: 30rpx;
			margin: 0 auto;
			border-bottom: 1rpx solid #F7F7F7;
		}
		.specs {
			margin: 0 auto;
			width: 670rpx;
			height: 94rpx;
			.item1 {
				float: left;
				margin-top: 30rpx;
				image {
					width: 40rpx;
					height: 20rpx;
				}
			}
			.item2 {
				float: left;
				margin-top: 30rpx;
				image {
					margin-left: 48rpx;
					width: 30rpx;
					height: 24rpx;
				}
			}
			.item3 {
				float: left;
				margin-top: 30rpx;
				image {
					margin-left: 48rpx;
					width: 28rpx;
					height: 28rpx;
				}
			}
			.specs_item {
				margin-left: 12rpx;
				color: #393B5B;
			}
		}
	}
	.item_box {
		margin-top: 18rpx;
		background-color: #FFFFFF;
		width: 100%;
		overflow: hidden;
		.box_title {
			font-size: 32rpx;
			color: #393D59;
			font-weight: 500;
			padding-top: 40rpx;
			padding-left: 40rpx;
		}
		.yhlist {
			font-size: 24rpx;
			margin-top: 20rpx;
			view {
				position: relative;
				margin-left: 72rpx;
				margin-bottom: 12rpx;
			}
			view::before {
				position: absolute;
				content: '';
				width: 12rpx;
				height: 12rpx;
				background-color: #BFA077;
				border-radius: 50%;
				margin-top: 10rpx;
				left: -30rpx;
			}
			text {
				color: #BFA077;
			}
		}
		.yhitem {
			margin-top: 18rpx;
			.item {
				width: 670rpx;
				height: 94rpx;
				line-height: 94rpx;
				border-top: 1rpx solid #F7F7F7;
				margin: 0 auto;
				.icon {
					float: left;
					width: 30rpx;
					height: 30rpx;
					margin-top: 32rpx;
				}
				view {
					float: left;
					margin-left: 20rpx;
					color: #393D59;
					font-size: 24rpx;
				}
				.show {
					float: right;
					margin-top: 40rpx;
					width: 12rpx;
					height: 18rpx;
				}
			}
		}
		.pzlist {
			margin-top: 40rpx;
			margin-left: 60rpx;
			.item {
				float: left;
				// #ifdef APP-PLUS
				width: 166rpx;
				margin-right: 60rpx;
				// #endif
				// #ifdef H5 || MP-WEIXIN
				width: 160rpx;
				margin-right: 70rpx;
				// #endif
				margin-bottom: 30rpx;
				height: 144rpx;
				text-align: center;
				image {
					width: 90rpx;
					height: 90rpx;
				}
				view {
					color: #393D59;
					margin-top: 8rpx;
					font-size: 24rpx;
				}
			}
		}
		.lccontent {
			margin: 20rpx 0rpx 40rpx 40rpx;
			image {
				width: 602rpx;
				height: 332rpx;
			}
		}
		.content {
			width: 670rpx;
			margin: 0 auto;
			.face {
				float: left;
				margin-top: 40rpx;
				width: 92rpx;
				height: 92rpx;
				border-radius: 50%;
			}
			.gtitle {
				float: left;
				margin-top: 48rpx;
				margin-left: 20rpx;
				color: #393D59;
				font-size: 28rpx;
			}
			.ginfo {
				float: left;
				color: #393D59;
				font-size: 20rpx;
				margin-top: 8rpx;
				margin-left: 20rpx;
			}
			.icon {
				float: right;
				width: 12rpx;
				height: 18rpx;
			}
			.xy {
				float: left;
				margin-top: 32rpx;
				width: 100%;
				height: 98rpx;
				line-height: 98rpx;
				font-size: 20rpx;
				border-top: 1rpx solid #F7F7F7;
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
	.mengban {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: rgba($color: #000000, $alpha: 0.5);
		width: 100vh;
		height: 100vh;
	}
	.all {
		z-index: 999;
	}
	.xieyi {
		position: fixed;
		z-index: 100;
		bottom: 98rpx;
		width: 100%;
		height: 696rpx;
		background-color: #FFFFFF;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		.xytitle {
			font-size: 32rpx;
			font-weight: 600;
			color: #393D59;
			margin-top: 40rpx;
			margin-left: 36rpx;
			margin-bottom: 16rpx;
		}
		.item {
			float: left;
			margin-top: 12rpx;
			margin-left: 40rpx;
			.title {
				float: left;
				font-size: 24rpx;
				color: #808080;
				font-weight: 600;
			}
			text {
				float: left;
				font-size: 24rpx;
				color: #BFA077;
				font-weight: 600;
				margin-left: 8rpx;
			}
			.introduce {
				clear: both;
				font-size: 24rpx;
				color: #808080;
			}
		}
	}
	.auth_box {
		width: 670rpx;
		height: 320rpx;
		background-color: #FFFFFF;
		border-radius: 16rpx;
		margin-left: 40rpx;
		margin-top: 586rpx;
		.title {
			font-size: 32rpx;
			color: #393D59;
			font-weight: 600;
			padding-top: 40rpx;
			text-align: center;
		}
		.introduce {
			font-size: 24rpx;
			color: #393D59;
			padding-top: 40rpx;
			text-align: center;
		}
		.btn {
			width: 518rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #BFA077;
			margin-top: 52rpx;
			margin-left: 76rpx;
			border-radius: 40rpx;
			text-align: center;
			color: #FFFFFF;
			font-size: 28rpx;
		}
	}
	
	/deep/ checkbox .uni-checkbox-input {
		width: 22rpx;
		height: 22rpx;
	}
	/deep/ checkbox .wx-checkbox-input {
		width: 22rpx;
		height: 22rpx;
	}
</style>
