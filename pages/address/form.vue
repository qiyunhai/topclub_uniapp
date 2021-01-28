<template>
	<view class="main">
		<view class="item">
			<view class="name">用车人</view>
			<input type="text" value="" placeholder="用车人" />
		</view>
		<view class="item">
			<view class="name">联系电话</view>
			<text>+86</text>
			<input type="text" value="" placeholder="联系电话" />
		</view>
		<view class="item">
			<view class="name">所在地区</view>
			<input type="text" value="" placeholder="省、市、区、乡镇/街道" />
		</view>
		<view class="item">
			<view class="name">详细地址</view>
			<input type="text" value="" placeholder="道路，楼牌号等" />
		</view>
		<view class="save">
			<image src="../../static/logo.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.main {
		margin: 0 auto;
		width: 670rpx;
	}
	.item {
		margin-top: 40rpx;
		height: 80rpx;
		border-bottom: 2rpx solid #EEEEEE;
		.name {
			float: left;
			color: #000000;
			font-size: 28rpx;
		}
		input {
			float: left;
			margin-left: 100rpx;
			font-size: 28rpx;
		}
	}
	.item:nth-child(n+2) {
		input {
			margin-left: 72rpx;
		}
	}
	.item:nth-child(2) {
		text {
			float: left;
			color: #BFA077;
			font-size: 28rpx;
			margin-left: 72rpx;
		}
		input {
			margin-left: 14rpx;
		}
	}
	.save {
		margin-top: 62rpx;
		height: 88rpx;
		text-align: center;
		background-color: #BFA077;
		border-radius: 16rpx;
		image {
			margin-top: 22rpx;
			width: 60rpx;
			height: 42rpx;
		}
	}
</style>
