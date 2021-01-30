<template>
	<view class="main">
		<view class="box">
			<view class="title">账户总额（元）</view>
			<view class="btn">充值</view>
			<view class="rmb">￥37001.00</view>
			<view class="consume">
				<view class="l">累计消费：12999</view>
				<view class="r">本月消费：12999</view>
			</view>
		</view>
		<view class="record">
			<view class="title">交易记录</view>
			<view class="list">
				<view class="item">
					<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<view class="title">兰博基尼LP700-4</view>
					<view class="time">2021年1月7日 16:49</view>
					<view class="info">-12999</view>
					<view class="detail">详情></view>
				</view>
				<view class="item recharge">
					<image src="../../static/img/my/chongzhijilu.png"></image>
					<view class="title">充值</view>
					<view class="time">2021年1月7日 16:49</view>
					<view class="info">+12999</view>
					<view class="detail">详情></view>
				</view>
				<view class="item">
					<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png"></image>
					<view class="title">兰博基尼LP700-4</view>
					<view class="time">2021年1月7日 16:49</view>
					<view class="info">-12999</view>
					<view class="detail">详情></view>
				</view>
			</view>
			<view class="not_data">没有更多了</view>
			<view class="not_record">
				<image src="../../static/img/my/wudingdan.png"></image>
				<view>您还没有任何交易记录了</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			onLoad() {
				
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 670rpx;
		height: auto;
		margin: 0 auto;
	}
	.box {
		margin-top: 66rpx;
		width: 100%;
		height: 314rpx;
		background-color: #4CD964;
		border-radius: 24rpx;
		color: #FFFFFF;
		.title {
			float: left;
			margin-top: 30rpx;
			margin-left: 42rpx;
			font-size: 28rpx;
		}
		.btn {
			float: right;
			margin-top: 30rpx;
			margin-right: 30rpx;
			width: 102rpx;
			height: 50rpx;
			line-height: 50rpx;
			background: linear-gradient(133deg, #FFFFFF 0%, #F6E2CA 100%);
			box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(191, 160, 119, 0.4);
			border-radius: 38rpx;
			color: #111112;
			font-size: 24rpx;
			text-align: center;
			font-weight: 600;
		}
		.rmb {
			clear: both;
			font-size: 60rpx;
			margin-top: 30rpx;
			margin-left: 30rpx;
		}
		.consume {
			margin-top: 66rpx;
			font-size: 24rpx;
			.l {
				float: left;
				width: 254rpx;
				border-right: 2rpx solid #FFFFFF;
				margin-left: 80rpx;
			}
			.r {
				float: right;
				margin-right: 80rpx;
			}
		}
	}
	.record {
		margin-top: 50rpx;
		.title {
			color: #222222;
			font-size: 32rpx;
			font-weight: 600;
		}
		.list {
			margin-top: 60rpx;
			.item {
				position: relative;
				width: 120%;
				height: 114rpx;
				border-bottom: 2rpx solid #EEEEEE;
				margin-top: 40rpx;
				image {
					position: absolute;
					margin-left: 4rpx;
					margin-top: 6rpx;
					width: 120rpx;
					height: 80rpx;
					border-radius: 8rpx;
				}
				.title {
					position: absolute;
					font-weight: 400;
					margin-left: 144rpx;
				}
				.time {
					position: absolute;
					color: #808080;
					font-weight: 400;
					margin-top: 56rpx;
					margin-left: 144rpx;
					font-size: 24rpx;
				}
				.info {
					position: absolute;
					font-size: 28rpx;
					color: #3F4455;
					font-weight: 600;
					margin-left: 578rpx;
				}
				.detail {
					position: absolute;
					font-size: 24rpx;
					color: #808080;
					font-weight: 400;
					margin-top: 56rpx;
					margin-left: 610rpx;
				}
			}
			.recharge {
				image {
					border-radius: 0rpx;
				}
				.info {
					color: #BFA077;
				}
			}
		}
	}
	.not_data {
		margin-top: 96rpx;
		text-align: center;
		color: #808080;
		font-size: 24rpx;
	}
	.not_record {
		display: none;
		margin-top: 110rpx;
		text-align: center;
		image {
			width: 604rpx;
			height: 464rpx;
		}
		view {
			margin-top: 110rpx;
			color: #808080;
			font-size: 24rpx;
		}
	}
</style>
