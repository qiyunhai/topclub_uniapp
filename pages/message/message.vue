<template>
	<view class="main">
		<view class="top">
			<view class="item" @click="order">
				<image src="../../static/logo.png"></image>
				<view>订单消息</view>
			</view>
			<view class="item">
				<image src="../../static/logo.png"></image>
				<view>活动消息</view>
			</view>
			<view class="item">
				<image src="../../static/logo.png"></image>
				<view>系统消息</view>
			</view>
		</view>
		<view class="t"></view>
		<view class="list">
			<view class="content">
				<view class="items">
					<view class="date">今天 09:23</view>
					<view class="item1">
						<view class="title">上新车啦！</view>
						<view class="info">劳斯莱斯F4、法拉利110、兰博基尼大摩托等你解锁…</view>
						<view class="detail">
							<view>查看详情</view>
							<image src="../../static/img/rightj.png"></image>
						</view>
					</view>
					<view class="item2">
						<view class="title">2021年会员体系调整及会员权益上线公告</view>
						<image src="../../static/img/rightj.png"></image>
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
				<view class="items">
					<view class="date">今天 09:23</view>
					<view class="item2">
						<view class="title">2021年会员体系调整及会员权益上线公告</view>
						<image src="../../static/img/rightj.png"></image>
					</view>
					<view class="item1">
						<view class="title">上新车啦！</view>
						<view class="info">劳斯莱斯F4、法拉利110、兰博基尼大摩托等你解锁…</view>
						<view class="detail">
							<view>查看详情</view>
							<image src="../../static/img/rightj.png"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="not_data">
			<image src="../../static/img/message/not_msg.png"></image>
			<view>一条消息都没有~</view>
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
				
			},
			order() {
				uni.navigateTo({
					url: 'order'
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		// min-height: 100vh;
		height: 272rpx;
		background-color: #F7F7F7;
	}
	.top {
		position: absolute;
		z-index: 3;
		top: 40rpx;
		margin-left: 40rpx;
		width: 670rpx;
		height: 176rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 8rpx;
		.item {
			width: 112rpx;
			height: 68rpx;
			float: left;
			text-align: center;
			margin-top: 30rpx;
			image {
				width: 78rpx;
				height: 78rpx;
				border-radius: 50%;
				box-shadow: 0rpx 12rpx 8rpx 0rpx rgba(194, 165, 125, 0.21);
			}
			view {
				font-size: 28rpx;
			}
		}
		.item:nth-child(1) {
			margin-left: 52rpx;
		}
		.item:nth-child(2) {
			margin-left: 102rpx;
		}
		.item:nth-child(3) {
			margin-left: 94rpx;
		}
	}
	.t {
		position: absolute;
		width: 100%;
		height: 116rpx;
		background-color: #FFFFFF;
		margin-top: 140rpx;
		z-index: 2;
	}
	.list {
		position: absolute;
		z-index: 1;
		margin-top: 272rpx;
		width: 100%;
		background-color: #FFFFFF;
		.content {
			margin-top: 40rpx;
			margin-left: 30rpx;
			.items:nth-child(1) .date {
				padding-top: 0rpx;
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
				.item1 {
					width: 694rpx;
					height: 230rpx;
					box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
					border-radius: 16rpx;
					margin-bottom: 30rpx;
					.title {
						padding-top: 44rpx;
					}
					.detail {
						margin-top: 20rpx;
						height: 84rpx;
						line-height: 84rpx;
					}
				}
				.item2 {
					width: 694rpx;
					height: 104rpx;
					line-height: 104rpx;
					box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
					border-radius: 16rpx;
					margin-bottom: 30rpx;
					view {
						float: left;
					}
					image {
						float: right;
						margin-top: 38rpx;
						width: 16rpx;
						height: 28rpx;
						margin-right: 40rpx;
					}
				}
				.item3 {
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
		}
	}
	.not_data {
		display: none;
		position: absolute;
		text-align: center;
		margin-top: 344rpx;
		margin-left: 74rpx;
		image {
			width: 604rpx;
			height: 464rpx;
		}
		view {
			color: #808080;
			font-size: 28rpx;
			margin-top: 110rpx;
		}
	}
</style>
