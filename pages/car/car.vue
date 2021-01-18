<template>
	<view class="main">
		<view class="content">
			<view class="search">
				<image src="../../static/img/search.jpg" class="icon"></image>
				<input type="text" name="search" placeholder="输入您喜欢的车型或关键字" />
			</view>
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
		width: 596rpx;
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
			// #ifdef H5
			padding-top: 10rpx;
			// #endif
			// #ifdef APP-PLUS
			padding-top: 10rpx;
			// #endif
		}
	}
</style>
