<template>
	<view class="main">
		<view class="module1">
			<image class="title" src="../../static/img/consult/zaixiankefu.png"></image>
			<view>服务时间：早9:30 - 晚5:30</view>
			<image class="icon" src="../../static/img/consult/kefu.png"></image>
		</view>
		<view class="module2">
			<image class="title" src="../../static/img/consult/kefurexian.png"></image>
			<view class="info1">185 1888 8088</view>
			<view class="info2">服务时间：早0:00 - 晚24:00</view>
			<image class="icon" src="../../static/img/consult/dianhua.png"></image>
		</view>
		<view class="module3">
			<image class="title" src="../../static/img/consult/gongzhonghao.png"></image>
			<image class="erimg" src="../../static/img/consult/GongZhongHa.png" @click="gzh_box()"></image>
		</view>
		<view class="module4">
			<image class="title" src="../../static/img/consult/wxkefu.png"></image>
			<image class="erimg" src="../../static/img/consult/WeiXinHa.png" @click="kf_box()"></image>
		</view>
		<view class="module5">
			<view class="title">常见问题</view>
			<view class="item">
				<image src="../../static/img/consult/zucheguize.png" class="img"></image>
				<view class="tit">预定流程，订单修改，取车流程，车辆归还...</view>
				<image src="../../static/img/consult/jiantou.png" class="icon"></image>
			</view>
			<view class="item">
				<image src="../../static/img/consult/shigu.png" class="img"></image>
				<view class="tit">事故处理，车辆故障，事故处理指引，基本…</view>
				<image src="../../static/img/consult/jiantou.png" class="icon"></image>
			</view>
			<view class="item">
				<image src="../../static/img/consult/feiyong.png" class="img"></image>
				<view class="tit">取车时，还车时，押金</view>
				<image src="../../static/img/consult/jiantou.png" class="icon"></image>
			</view>
		</view>
		<view class="mengban" @touchmove.stop.prevent="moveHandle" :style="'display:'+mengban" @click="close_box()"></view>
		<view class="box" @touchmove.stop.prevent="moveHandle" :style="'display:'+gzh">
			<image src="../../static/img/consult/gongzhonghao.png" class="title"></image>
			<image src="../../static/img/consult/gzh.png" class="erimg"></image>
			<view class="info1">长按保存二维码</view>
			<view class="info2">据说关注公众号可以领取优惠券哦</view>
			<view class="info3">24小时服务热线：185 1888 8088</view>
		</view>
		<view class="box" @touchmove.stop.prevent="moveHandle" :style="'display:'+kf">
			<image src="../../static/img/consult/wxkefu.png" class="title"></image>
			<image src="../../static/img/consult/kfewm.png" class="erimg"></image>
			<view class="info1">长按保存二维码</view>
			<view class="info2">添加微信客服24小时全天咨询</view>
			<view class="info3">24小时服务热线：185 1888 8088</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mengban: 'none',
				gzh: 'none',
				kf: 'none',
			};
		},
		methods: {
			// 禁止页面滑动
			moveHandle() {
				return;
			},
			// 公众号弹框
			gzh_box() {
				this.mengban = 'block';
				this.gzh = 'block';
			},
			// 客服弹框
			kf_box() {
				this.mengban = 'block';
				this.kf = 'block';
			},
			// 关闭弹框
			close_box() {
				this.mengban = 'none';
				this.gzh = 'none';
				this.kf = 'none';
			}
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #EEEEEE;
		width: 100%;
		height: 100vh;
	}
	.module1 {
		position: relative;
		width: 100%;
		height: 144rpx;
		background-color: #FFFFFF;
		.title {
			position: absolute;
			width: 102rpx;
			height: 24rpx;
			top: 40rpx;
			left: 40rpx;
		}
		view {
			position: absolute;
			color: #808080;
			font-size: 20rpx;
			top: 76rpx;
			left: 40rpx;
		}
		.icon {
			position: absolute;
			width: 86rpx;
			height: 88rpx;
			top: 32rpx;
			right: 28rpx;
		}
	}
	.module2 {
		position: relative;
		margin-top: 2rpx;
		width: 100%;
		height: 172rpx;
		background-color: #FFFFFF;
		color: #808080;
		font-size: 20rpx;
		.title {
			position: absolute;
			width: 102rpx;
			height: 22rpx;
			top: 48rpx;
			left: 40rpx;
		}
		.info1 {
			position: absolute;
			top: 76rpx;
			left: 40rpx;
		}
		.info2 {
			position: absolute;
			top: 104rpx;
			left: 40rpx;
		}
		.icon {
			position: absolute;
			width: 84rpx;
			height: 88rpx;
			top: 46rpx;
			right: 28rpx;
		}
	}
	.module3 {
		position: relative;
		width: 100%;
		height: 130rpx;
		background-color: #FFFFFF;
		margin-top: 16rpx;
		.title {
			position: absolute;
			width: 264rpx;
			height: 26rpx;
			top: 52rpx;
			left: 40rpx;
		}
		.erimg {
			position: absolute;
			width: 50rpx;
			height: 50rpx;
			top: 40rpx;
			right: 38rpx;
		}
	}
	.module4 {
		position: relative;
		width: 100%;
		height: 130rpx;
		background-color: #FFFFFF;
		margin-top: 2rpx;
		.title {
			position: absolute;
			width: 236rpx;
			height: 26rpx;
			top: 52rpx;
			left: 40rpx;
		}
		.erimg {
			position: absolute;
			width: 50rpx;
			height: 50rpx;
			top: 40rpx;
			right: 38rpx;
		}
	}
	.module5 {
		width: 100%;
		height: 60vh;
		background-color: #FFFFFF;
		margin-top: 16rpx;
		.title {
			font-size: 28rpx;
			padding-top: 40rpx;
			margin-left: 40rpx;
			color: #222222;
			font-weight: 500;
		}
		.item {
			width: 100%;
			height: 156rpx;
			line-height: 156rpx;
			border-bottom: 2rpx solid #EEEEEE;
			.img {
				float: left;
				width: 80rpx;
				height: 96rpx;
				margin-top: 30rpx;
				margin-left: 40rpx;
			}
			.tit {
				float: left;
				color: #222222;
				font-size: 24rpx;
				padding-left: 40rpx;
			}
			.icon {
				float: right;
				width: 10rpx;
				height: 20rpx;
				margin-top: 70rpx;
				margin-right: 40rpx;
			}
		}
	}
	.mengban {
		position: fixed;
		z-index: 2;
		width: 100vh;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: 0.45);
		top: 0;
		left: 0;
	}
	.box {
		position: fixed;
		z-index: 3;
		width: 532rpx;
		height: 594rpx;
		background-color: #FFFFFF;
		border-radius: 16rpx;
		top: 378rpx;
		left: 110rpx;
		.title {
			width: 332rpx;
			height: 52rpx;
			margin-top: 50rpx;
			margin-left: 100rpx;
		}
		.erimg {
			width: 252rpx;
			height: 252rpx;
			margin-top: 24rpx;
			margin-left: 140rpx;
		}
		.info1 {
			color: #222222;
			font-size: 28rpx;
			margin-top: 16rpx;
			margin-left: 168rpx;
		}
		.info2 {
			color: #222222;
			font-size: 24rpx;
			margin-top: 12rpx;
			margin-left: 86rpx;
		}
		.info3 {
			color: #222222;
			font-size: 24rpx;
			margin-top: 28rpx;
			margin-left: 86rpx;
			text-decoration:underline;
		}
	}
</style>
