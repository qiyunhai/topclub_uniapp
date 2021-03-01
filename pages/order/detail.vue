<template>
	<view class="main">
		<view class="module address">
			<image src="../../static/img/order/dingwei.png" class="dw"></image>
				<view class="info1">李某 86-17544443333</view>
				<view class="info2">{{orderInfo.user_borrow_address}}</view>
			<image src="../../static/img/rightj.png" class="jiao"></image>
		</view>
		<view class="module car">
			<image :src="carInfo.image" class="img"></image>
			<view class="title">{{carInfo.title}}</view>
			<view class="paizhao">
				<image src="../../static/img/car_jingpai.png"></image>
				<text>{{carInfo.license}}</text>
			</view>
			<view class="nian">
				<image src="../../static/img/car_chexing.png"></image>
				<text>{{carInfo.year_limit}}</text>
			</view>
			<view class="price">¥<text>{{carInfo.price}}</text>/天</view>
			<view class="status">待送车</view>
		</view>
		<view class="module price_info">
			<view class="content">
				<view class="h">用车时间</view>
				<view class="date">{{orderInfo.start_date_time}}——{{orderInfo.end_date_time}}</view>
			</view>
			<view class="content">
				<view class="h">费用明细</view>
				<view class="item">
					<view class="l">车辆租金（线下未支付）</view>
					<view class="r">￥12999</view>
				</view>
				<view class="item">
					<view class="l">基准押金（线下未支付）</view>
					<view class="r">￥{{orderInfo.mortgage_price}}</view>
				</view>
				<view class="item">
					<view class="l">违章押金（线上已支付）</view>
					<view class="r">￥{{orderInfo.reserve_price}}</view>
				</view>
			</view>
			<view class="content">
				<view class="total_title">线下支付费用</view>
				<view class="total_price">￥{{orderInfo.price}}</view>
			</view>
		</view>
		<view class="module deposit">
			<view class="top">
				<image src="../../static/logo.png"></image>
				<view>押金状态及明细</view>
			</view>
			<view class="item">
				<view class="t">
					<view class="l">基准押金（用车中）</view>
					<view class="r">￥{{orderInfo.mortgage_price}}</view>
				</view>
				<view class="b">*用车期间车辆无损，还车当天退还押金</view>
			</view>
			<view class="item">
				<view class="t">
					<view class="l">违章押金（用车中）</view>
					<view class="r">￥{{orderInfo.reserve_price}}</view>
				</view>
				<view class="b">*订单结束后20天内退还押金</view>
			</view>
			<view class="btns">
				<view>自行处理</view>
				<view>托管处理</view>
			</view>
		</view>
		<view class="module handle">
			<view class="t">
				<view :class="statusCurrent == 0 ? 'curr' : ''" @click="statusChange(0)">待处理</view>
				<view :class="statusCurrent == 1 ? 'curr' : ''" @click="statusChange(1)">正在处理</view>
				<view :class="statusCurrent == 2 ? 'curr' : ''" @click="statusChange(2)">已处理</view>
			</view>
			<swiper class="swiper" @change="statusChange" :current="statusCurrent">
				<swiper-item>
					<view class="swiper-item">
						<view>*2021-01-08 18:22</view>
						<view>*平房桥东 非紧急情况在应急车道行驶  扣6分</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
					
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view>*2021-01-08 18:22</view>
						<view>*平房桥东 非紧急情况在应急车道行驶  扣6分</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="module deposit_info">
			<view>押金费用说明</view>
			<view>基准押金为车损押金，若用车期间无任何损坏，还车时将立即退款</view>
			<view>违章押金指您在用车中是否违反道路交通安全法，若用车期间正常行驶，押金将在还车20天内，查询无违章后，立即退款</view>
			<view class="x">*若用车期间违反交通道路安全法，将以1分/200元扣除押金中的金额</view>
			<view class="x">*用车人可自行处理违章，处理完成后押金将全额退款</view>
		</view>
		<view class="module order_info">
			<view class="title">订单信息</view>
			<view class="item">
				<view class="l">订单编号：{{orderInfo.order_number}}</view>
				<view class="r">复制</view>
			</view>
			<view class="item">
				<view class="l">支付方式：微信支付</view>
			</view>
			<view class="item">
				<view class="l">创建时间：{{orderInfo.createtime}}</view>
			</view>
			<view class="item">
				<view class="l">付款时间：{{orderInfo.pay_time}}</view>
			</view>
		</view>
		<view class="footer">
			<view>拨打电话</view>
			<view>联系客服</view>
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				statusCurrent: 0,
				orderInfo: [],
				carInfo: []
			}
		},
		methods: {
			onLoad(option) {
				api.request('/api/order/detail', {
					order_number: option.order_number
				}, 'GET', true).then(res => {
					console.log(res)
					var datas = res.data.result;
					this.orderInfo = datas
					this.carInfo = datas.Car
				})
			},
			statusChange(e) {
				if(typeof e == 'object') {
					var curr = e.detail.current
				} else {
					var curr = e;
				}
				this.statusCurrent = curr;
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
		width: 100%;
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
			position: absolute;
			color: #BFA077;
			font-size: 28rpx;
			font-weight: 600;
			padding-top: 140rpx;
			margin-left: 314rpx;
			text {
				font-size: 36rpx;
			}
		}
		.status {
			position: absolute;
			color: #393B5B;
			font-size: 24rpx;
			margin-top: 158rpx;
			margin-left: 634rpx;
		}
	}
	.price_info {
		.content {
			width: 670rpx;
			margin: 0 auto;
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			color: #393D59;
			border-bottom: 2rpx solid #F7F7F7;
			.h {
				font-size: 28rpx;
				font-weight: 500;
			}
			.date {
				margin-top: 20rpx;
				font-size: 24rpx;
			}
			.item {
				width: 100%;
				height: 34rpx;
				line-height: 34rpx;
				margin-top: 20rpx;
				font-size: 24rpx;
				.l {
					float: left;
				}
				.r {
					float: right;
					color: #BFA077;
				}
			}
		}
		.content:nth-last-child(1) {
			padding-top: 0rpx;
			padding-bottom: 0rpx;
			height: 100rpx;
			line-height: 100rpx;
			font-size: 28rpx;
			font-weight: 600;
			border-bottom: 0rpx;
			.total_title {
				float: left;
			}
			.total_price {
				float: right;
				color: #BFA077;
			}
		}
	}
	.order_info {
		padding-left: 40rpx;
		padding-right: 40rpx;
		height: 316rpx;
		color: #393D59;
		.title {
			padding-top: 30rpx;
			font-size: 28rpx;
			font-weight: 600;
		}
		.item {
			height: 34rpx;
			margin-top: 20rpx;
			font-size: 24rpx;
			.l {
				float: left;
			}
			.r {
				float: right;
				color: #BFA077;
			}
		}
	}
	.footer {
		background-color: #FFFFFF;
		margin-top: -20rpx;
		border-top: 2rpx solid #F7F7F7;
		height: 98rpx;
		view {
			margin-top: 20rpx;
			float: left;
			width: 144rpx;
			height: 56rpx;
			line-height: 56rpx;
			background-color: #BFA077;
			color: #FFFFFF;
			text-align: center;
			border-radius: 28rpx;
			font-size: 24rpx;
			margin-left: 20rpx;
		}
		view:nth-child(1) {
			margin-left: 402rpx;
		}
	}
	.deposit {
		padding-left: 40rpx;
		padding-top: 30rpx;
		padding-right: 40rpx;
		.top {
			image {
				float: left;
				width: 44rpx;
				height: 44rpx;
				margin-right: 20rpx;
			}
			view {
				color: #393D59;
				font-size: 32rpx;
			}
		}
		.item {
			height: 124rpx;
			margin-top: 30rpx;
			border-bottom: 2rpx solid #F7F7F7;
			.t {
				width: 100%;
				height: 40rpx;
				line-height: 40rpx;
				font-size: 28rpx;
				.l {
					color: #393D59;
					float: left;
				}
				.r {
					float: right;
					color: #BFA077;
				}
			}
			.b {
				float: right;
				margin-top: 20rpx;
				font-size: 24rpx;
				color: #808080;
			}
		}
		.item:nth-child(3) {
			border-bottom: 0rpx;
		}
		.btns {
			margin-top: 34rpx;
			padding-bottom: 40rpx;
			overflow: hidden;
			view {
				float: left;
				width: 144rpx;
				height: 56rpx;
				line-height: 56rpx;
				background-color: #BFA077;
				color: #FFFFFF;
				border-radius: 28rpx;
				text-align: center;
				font-size: 24rpx;
				margin-left: 20rpx;
			}
			view:nth-child(1) {
				margin-left: 362rpx;
			}
		}
	}
	
	
	.deposit_info {
		padding-left: 40rpx;
		padding-top: 30rpx;
		padding-right: 40rpx;
		color: #808080;
		view {
			margin-bottom: 20rpx;
			font-size: 20rpx;
		}
		view:nth-child(1) {
			margin-bottom: 12rpx;
			font-size: 24rpx;
		}
		.x {
			color: #BFA077;
		}
		view:nth-last-child(1) {
			padding-bottom: 30rpx;
		}
	}
	.handle {
		padding-left: 40rpx;
		padding-right: 40rpx;
		.t {
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			border-bottom: 2rpx solid #F7F7F7;
			view {
				float: left;
				margin-left: 120rpx;
				font-size: 28rpx;
				color: #808080;
				font-weight: 600;
			}
			view:nth-child(1) {
				margin-left: 84rpx;
			}
			.curr {
				color: #393D59;
			}
		}
		swiper {
			height: 128rpx;
		}
		.swiper-item {
			view {
				font-size: 24rpx;
				color: #E02E24;
			}
			view:nth-child(1) {
				padding-top: 30rpx;
			}
		}
	}
</style>
