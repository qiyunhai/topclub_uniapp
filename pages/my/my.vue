<template>
	<view class="">
		<view class="module1">
			<image src="../../static/img/my/qingtong.png" class="background"></image>
			<image src="../../static/img/default_head.jpg" class="head"></image>
			<view class="name">会员A19988</view>
			<view class="phone">175*****052</view>
			<image src="../../static/img/my/huizhang.png" class="v"></image>
			<image src="../../static/img/my/xiaoxi.png" class="xiaoxi"></image>
			<image src="../../static/img/my/shezhi.png" class="shezhi"></image>
			<view class="progress_value"><text>100</text>/8999</view>
			<view class="progress">
				<view class="val" style="width: 8%;"></view>
			</view>
			<view class="show_member">
				<text>查看会员卡</text>
				<image src="../../static/img/rightj.png"></image>
			</view>
		</view>
		<view class="module2">
			<view class="box">
				<image src="../../static/img/my/youhuiquan.png"></image>
				<image src="../../static/img/my/dingdan.png"></image>
				<image src="../../static/img/my/qianbao.png"></image>
			</view>
		</view>
		<view class="module3">
			<view class="title">常用工具</view>
			<image src="../../static/img/my/zaixiankefu.png" class="zxkf"></image>
			<image src="../../static/img/my/changjianwenti.png" class="cjwt"></image>
			<image src="../../static/img/my/shoucangchexing.png" class="sccx"></image>
			<view class="list">
				<view class="item">
					<view>意见反馈</view>
					<image src="../../static/img/rightj.png"></image>
				</view>
				<view class="item">
					<view>关于我们</view>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</view>
		</view>
		<view class="module4">
			客服24小时服务热线：185 1888 8088
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
	.module1 {
		padding-bottom: 430rpx;
		.background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 430rpx;
		}
		.head {
			position: absolute;
			width: 136rpx;
			height: 136rpx;
			border-radius: 50%;
			margin-left: 40rpx;
			margin-top: 61.12rpx;
		}
		.name {
			position: absolute;
			color: #222222;
			font-size: 32rpx;
			margin-top: 86rpx;
			margin-left: 216rpx;
		}
		.phone {
			position: absolute;
			color: #222222;
			font-size: 24rpx;
			margin-top: 134rpx;
			margin-left: 216rpx;
		}
		.v {
			position: absolute;
			width: 42rpx;
			height: 42rpx;
			margin-top: 86rpx;
			margin-left: 402rpx;
		}
		.xiaoxi {
			position: absolute;
			width: 44rpx;
			height: 72rpx;
			margin-top: 42rpx;
			margin-left: 604rpx;
		}
		.shezhi {
			position: absolute;
			width: 44rpx;
			height: 72rpx;
			margin-top: 42rpx;
			margin-left: 668rpx;
		}
		.progress_value {
			position: absolute;
			margin-top: 262rpx;
			margin-left: 240rpx;
			font-size: 20rpx;
			text {
				color: #E6782E;
			}
		}
		.progress {
			position: absolute;
			width: 254rpx;
			height: 8rpx;
			background-color: #FFFFFF;
			margin-top: 310rpx;
			margin-left: 92rpx;
			border-radius: 4rpx;
			overflow: hidden;
			.val {
				height: 100%;
				background-color: #222222;
			}
		}
		.show_member {
			position: absolute;
			color: #808080;
			margin-top: 254rpx;
			margin-left: 566rpx;
			font-size: 20rpx;
			image {
				width: 8rpx;
				height: 16rpx;
				margin-left: 4rpx;
			}
		}
	}
	.module2 {
		position: relative;
		width: 100%;
		height: 264rpx;
		border-bottom: 16rpx solid #EEEEEE;
		.box {
			position: absolute;
			width: 670rpx;
			height: 188rpx;
			border-radius: 16rpx;
			box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(0, 0, 0, 0.1);
			margin-top: 36rpx;
			margin-left: 40rpx;
			image {
				float: left;
				width: 128rpx;
				height: 136rpx;
				margin-top: 26rpx;
				margin-left: 100rpx;
			}
			image:nth-child(1) {
				margin-left: 44rpx;
			}
		}
	}
	.module3 {
		margin: 0 auto;
		margin-top: 40rpx;
		width: 670rpx;
		height: 192rpx;
		border-radius: 16rpx;
		box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(0, 0, 0, 0.1);
		.title {
			font-size: 28rpx;
			font-weight: 500;
			padding-top: 16rpx;
			margin-left: 20rpx;
		}
		image {
			float: left;
			width: 96rpx;
			height: 94rpx;
			margin-top: 22rpx;
		}
		.zxkf {
			margin-left: 72rpx;
		}
		.cjwt {
			margin-left: 118rpx;
		}
		.sccx {
			margin-left: 120rpx;
		}
		.list {
			clear: both;
			padding-top: 60rpx;
			.item {
				width: 100%;
				height: 34rpx;
				margin-bottom: 60rpx;
				view {
					margin-top: 18rpx;
					float: left;
					font-size: 24rpx;
				}
				image {
					float: right;
					width: 14rpx;
					height: 24rpx;
				}
			}
		}
	}
	.module4 {
		position: absolute;
		bottom: 22rpx;
		left: 170rpx;
		font-size: 24rpx;
		color: #B8966C;
		text-decoration:underline;
	}
</style>
