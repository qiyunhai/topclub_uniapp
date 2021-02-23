<template>
	<view class="main">
		<view class="items">
			<view class="date">今天 09:23</view>
			<view class="item3">
				<view class="title">预订成功</view>
				<view class="info">预订车辆：兰博基尼LP700-4</view>
				<view class="info">预定租期：2天</view>
				<view class="info">送车时间：2021-01-09 08:00</view>
				<view class="detail">
					<view>查看详情</view>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</view>
			<view class="item3">
				<view class="title">预订成功</view>
				<view class="info">预订车辆：兰博基尼LP700-4</view>
				<view class="info">预定租期：2天</view>
				<view class="info">送车时间：2021-01-09 08:00</view>
				<view class="detail">
					<view>查看详情</view>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="date">今天 09:23</view>
			<view class="item3">
				<view class="title">预订成功</view>
				<view class="info">预订车辆：兰博基尼LP700-4</view>
				<view class="info">预定租期：2天</view>
				<view class="info">送车时间：2021-01-09 08:00</view>
				<view class="detail">
					<view>查看详情</view>
					<image src="../../static/img/rightj.png"></image>
				</view>
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
			onLoad() {
				
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		min-height: 100vh;
		background-color: #F5F5F5;
	}
	.items:nth-child(1) .date {
		padding-top: 40rpx;
	}
	.items {
		.date {
			color: #808080;
			font-size: 24rpx;
			text-align: center;
			padding-top: 60rpx;
			margin-bottom: 30rpx;
		}
		.title {
			font-size: 28rpx;
			margin-left: 30rpx;
		}
		.info {
			font-size: 24rpx;
			color: #808080;
			margin-left: 30rpx;
		}
		.detail {
			margin-left: 30rpx;
			width: 624rpx;
			border-top: 2rpx solid #F7F7F7;
			view {
				float: left;
				color: #C0A279;
				font-size: 24rpx;
			}
			image {
				float: right;
				margin-top: 28rpx;
				width: 16rpx;
				height: 28rpx;
			}
		}
		.item3 {
			background-color: #FFFFFF;
			margin: 0 auto;
			width: 694rpx;
			box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 16rpx;
			margin-bottom: 30rpx;
			.title {
				padding-top: 30rpx;
				margin-bottom: 20rpx;
			}
			.detail {
				height: 102rpx;
				view {
					margin-top: 20rpx;
				}
				image {
					margin-top: 24rpx;
				}
			}
		}
	}
</style>
