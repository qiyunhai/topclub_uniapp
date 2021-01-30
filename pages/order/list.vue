<template>
	<view class="main">
		<view class="types">
			<view :class="current == 0 ? 'item cur' : 'item'" @click="swiperChange(0)">全部订单</view>
			<view :class="current == 1 ? 'item cur' : 'item'" @click="swiperChange(1)">进行中</view>
			<view :class="current == 2 ? 'item cur' : 'item'" @click="swiperChange(2)">已完成</view>
		</view>
		<swiper class="swiper" :current="current" @change="swiperChange" :style="'height:'+swiperHeight+'rpx'">
			<swiper-item>
				<view class="list swiper-item0">
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="list swiper-item1" style="display: none;">
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
				</view>
				<view class="not_data swiper-item1">
					<image src="../../static/img/my/wudingdan.png"></image>
					<view class="info">您还没有下过订单哦~</view>
					<view class="btn">
						<image src="../../static/logo.png"></image>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="list swiper-item2">
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					<view class="item">
						<image src="http://www.topclub.com/uploads/20210107/8d71ceae0edd6d96dd9d60e36aaf09a6.png" class="img"></image>
						<view class="title">兰博基尼LP700-4</view>
						<view class="paizhao">
							<image src="../../static/img/car_jingpai.png"></image>
							<view>京牌</view>
						</view>
						<view class="nian">
							<image src="../../static/img/car_chexing.png"></image>
							<view>16年上牌</view>
						</view>
						<view class="price">￥<text>12999</text>/天</view>
						<view class="status">用车中</view>
						<view class="btns">
							<view>拨打电话</view>
							<view>联系客服</view>
							<view class="curr">查看订单</view>
						</view>
					</view>
					
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				current: 0,
				swiperHeight: '',
			};
		},
		methods: {
			onReady() {
				//swiper高度自适应
				this.getElementHeight('.list')
			},
			swiperChange(e) {
				let event = typeof e;
				if(event == 'number') {
					this.current = e;
				} else if(event == 'object') {
					this.current = e.detail.current;
				}
				this.getElementHeight('.swiper-item'+this.current)
			},
			getElementHeight(element) {
				setTimeout(()=>{
					let query = uni.createSelectorQuery().in(this);
					query.select(element).boundingClientRect();
					query.exec((res) => {
						if (!res) {//如果没获取到，再调一次
							this.getElementHeight();
						}else {
							this.swiperHeight = res[0].height * 2;
						}
					})
				},20)
			},
			// 上拉加载
			onReachBottom(){
				
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		min-height: 100vh;
		background-color: #F7F7F7;
	}
	.types {
		width: 100%;
		height: 128rpx;
		background-color: #FFFFFF;
		font-size: 32rpx;
		.item {
			float: left;
			width: 148rpx;
			height: 128rpx;
			line-height: 128rpx;
			color: #808080;
			text-align: center;
		}
		.item:nth-child(1) {
			margin-left: 96rpx;
		}
		.item:nth-child(2) {
			margin-left: 80rpx;
		}
		.item:nth-child(3) {
			margin-left: 60rpx;
		}
		.cur {
			color: #222222;
			height: 120rpx;
			border-bottom: 8rpx solid #BFA077;
		}
	}
	swiper {
		min-height: 90vh;
		width: 100%;
		.list {
			margin-left: 40rpx;
			padding-bottom: 64rpx;
			.item {
				width: 670rpx;
				height: 306rpx;
				background-color: #FFFFFF;
				margin-top: 30rpx;
				border-radius: 16rpx;
				box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(0, 0, 0, 0.05);
				.img {
					float: left;
					width: 274rpx;
					height: 160rpx;
					border-radius: 16rpx;
					margin-top: 30rpx;
					margin-left: 30rpx;
				}
				.title {
					float: left;
					margin-top: 30rpx;
					margin-left: 30rpx;
					color: #393D59;
					font-size: 36rpx;
					width: 336rpx;
				}
				.paizhao {
					float: left;
					max-width: 168rpx;
					margin-left: 30rpx;
					image {
						float: left;
						margin-top: 20rpx;
						width: 40rpx;
						height: 20rpx;
					}
					view {
						float: left;
						margin-top: 12rpx;
						margin-left: 8rpx;
						color: #393B5B;
						font-size: 24rpx;
					}
				}
				.nian {
					float: left;
					max-width: 168rpx;
					margin-left: 20rpx;
					image {
						float: left;
						width: 28rpx;
						height: 28rpx;
						margin-top: 16rpx;
					}
					view {
						float: left;
						color: #393B5B;
						font-size: 24rpx;
						margin-top: 12rpx;
						margin-left: 12rpx;
					}
				}
				.price {
					float: left;
					color: #BFA077;
					font-size: 28rpx;
					margin-top: 14rpx;
					margin-left: 30rpx;
					text {
						font-size: 36rpx;
					}
				}
				.status {
					float: right;
					color: #393B5B;
					font-size: 24rpx;
					margin-top: 30rpx;
					margin-right: 40rpx;
				}
				.btns {
					clear: both;
					margin-left: 158rpx;
					view {
						margin-top: 42rpx;
						margin-right: 20rpx;
						float: left;
						width: 144rpx;
						height: 56rpx;
						line-height: 56rpx;
						text-align: center;
						border: 2rpx solid #CAB08F;
						border-radius: 28rpx;
						color: #BFA077;
						font-size: 24rpx;
					}
					.curr {
						background-color: #BFA077;
						color: #FFFFFF;
					}
				}
			}
		}
		.not_data {
			text-align: center;
			image {
				width: 604rpx;
				height: 604rpx;
				margin-top: 80rpx;
			}
			.info {
				color: #222222;
				font-size: 24rpx;
				margin-top: 80rpx;
			}
			.btn {
				margin: 0 auto;
				width: 480rpx;
				height: 88rpx;
				background-color: #BFA077;
				border-radius: 44rpx;
				margin-top: 40rpx;
				image {
					margin-top: 24rpx;
					width: 148rpx;
					height: 42rpx;
				}
			}
		}
	}
</style>
