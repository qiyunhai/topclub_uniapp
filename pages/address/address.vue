<template>
	<view class="main">
		<view class="item">
			<view class="default cur">默认</view>
			<view class="info">李某 86-17553665533</view>
			<view class="addr">北京市 朝阳区 高碑店镇 高碑店村口</view>
			<view class="btn">编辑</view>
			<view class="hr"></view>
		</view>
		<view class="item">
			<view class="default">设默认</view>
			<view class="info">李某1 86-17553665533</view>
			<view class="addr">北京市 朝阳区 高碑店镇 高碑店村口</view>
			<view class="btn">编辑</view>
			<view class="hr"></view>
		</view>
		<view class="item">
			<view class="default">设默认</view>
			<view class="info">李某2 86-17553665533</view>
			<view class="addr">北京市 朝阳区 高碑店镇 高碑店村口</view>
			<view class="btn">选择</view>
			<view class="hr"></view>
		</view>
		<view class="add" @click="form(0)">点击添加更多地址</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			form(id) {
				if(id == 0) {
					var url = 'form';
				} else {
					var url = 'form?id='+id;
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
	}
	.item {
		margin-top: 30rpx;
		margin-left: 22rpx;
		.default {
			float: left;
			font-size: 24rpx;
			width: 88rpx;
			height: 88rpx;
			line-height: 88rpx;
			background-color: #F7F7F7;
			color: #BFA077;
			border-radius: 50%;
			text-align: center;
		}
		.cur {
			background-color: #808080;
			color: #FFFFFF;
		}
		.info {
			margin-top: 4rpx;
			margin-left: 108rpx;
			color: #393D59;
			font-size: 28rpx;
		}
		.addr {
			float: left;
			margin-left: 20rpx;
			color: #393D59;
			font-size: 28rpx;
		}
		.btn {
			float: left;
			margin-top: -68rpx;
			margin-left: 598rpx;
			width: 128rpx;
			height: 40rpx;
			line-height: 40rpx;
			font-size: 24rpx;
			color: #808080;
			text-align: center;
			border-left: 2rpx solid #808080;
		}
		.hr {
			margin-top: 44rpx;
			margin-left: 18rpx;
			width: 710rpx;
			height: 30rpx;
			border-bottom: 2rpx solid #F7F7F7;
		}
	}
	.add {
		margin-top: 154rpx;
		margin-left: 234rpx;
		width: 276rpx;
		height: 64rpx;
		line-height: 64rpx;
		border: 2rpx solid #BFA077;
		border-radius: 32rpx;
		text-align: center;
		font-size: 28rpx;
		color: #BFA077;
	}
</style>
