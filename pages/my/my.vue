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
		<view class="mengban" :style="'display:'+login_box"></view>
		<view class="login_box" :style="'display:'+login_box">
			<image src="../../static/img/my/qianbao.png" class="close" @click="close_login"></image>
			<view class="register">还没有注册？立即注册</view>
			<image src="../../static/img/default_head.jpg" class="logo"></image>
			<view class="cut_swiper">
				<view :class="[login_current == 0 ? 'item curr' : 'item']" @click="cutSwiper(0)">密码登录</view>
				<view :class="[login_current == 1 ? 'item curr' : 'item']" @click="cutSwiper(1)">验证码登录</view>
			</view>
			<swiper class="login_swiper" :current="login_current" :duration="500" @change="loginSwiperChange">
				<swiper-item>
					<view class="swiper-item">
						<view class="account">
							<view class="title">
								<text>+86</text>
								<image src="../../static/img/my/qianbao.png"></image>
							</view>
							<input type="text" placeholder="请输入手机号" />
						</view>
						<view class="password">
							<view class="title">密码</view>
							<input type="password" placeholder="请输入密码" />
							<image src="../../static/img/my/qianbao.png" class="icon"></image>
						</view>
						<view class="fun">
							<checkbox value="" />
							<view class="remember">记住密码</view>
							<view class="forget">忘记密码</view>
						</view>
						<view class="btn cur">登录</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="phone">
							<view class="title">
								<text>+86</text>
								<image src="../../static/img/my/qianbao.png"></image>
							</view>
							<input type="text" placeholder="请输入手机号" />
						</view>
						<view class="code">
							<view class="title">验证码</view>
							<input type="text" placeholder="请输入验证码" />
							<view class="get">获取验证码</view>
						</view>
						<view class="btn">登录</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="footer">
				登录代表您已同意
				<text>《服务协议》</text>
				和
				<text>《隐私政策》</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 登录方式：0=密码登录，1=验证码登录
				login_current: 0,
				login_box: 'block'
			};
		},
		methods: {
			onLoad() {
				uni.hideTabBar(); 
			},
			// 切换登录方式
			cutSwiper(cut) {
				this.login_current = cut
			},
			loginSwiperChange(event) {
				this.login_current = event.detail.current
			},
			// 关闭登录框
			close_login() {
				this.login_box = 'none';
				uni.showTabBar();
			}
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
	.mengban {
		position: absolute;
		z-index: 2;
		top: 0rpx;
		left: 0rpx;
		width: 100vh;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: 0.49);
	}
	.login_box {
		position: fixed;
		z-index: 3;
		bottom: 0rpx;
		width: 100%;
		height: 978rpx;
		background-color: #FFFFFF;
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		.close {
			float: left;
			width: 40rpx;
			height: 40rpx;
			margin-top: 40rpx;
			margin-left: 40rpx;
		}
		.register {
			color: #393D59;
			font-size: 28rpx;
			margin-top: 40rpx;
			margin-left: 430rpx;
		}
		.logo {
			clear: both;
			width: 505.42rpx;
			height: 44rpx;
			margin-top: 76rpx;
			margin-left: 42rpx;
		}
		.cut_swiper {
			margin-top: 96rpx;
			color: #393D59;
			font-size: 28rpx;
			.item {
				float: left;
			}
			.item:nth-child(1) {
				margin-left: 198rpx;
				margin-right: 78rpx;
			}
			.curr::after {
				position: absolute;
				content: '';
				width: 160rpx;
				height: 4rpx;
				margin-top: 48rpx;
				background-color: #393D59;
			}
			.item:nth-child(1).curr::after {
				left: 174rpx;
			}
			.item:nth-child(2).curr::after {
				right: 212rpx;
			}
		}
		.login_swiper {
			height: 450rpx;
			.swiper-item{
				width: 624rpx;
				margin-top: 40rpx;
				margin-left: 64rpx;
				color: #393D59;
				font-size: 28rpx;
				.account {
					padding-bottom: 60rpx;
					border-bottom: 2rpx solid #EEEEEE;
					.title {
						text {
							float: left;
							margin-top: 6rpx;
						}
						image {
							float: left;
							width: 16rpx;
							height: 10rpx;
							margin-top: 20rpx;
							margin-left: 8rpx;
						}
					}
					input {
						float: left;
						margin-left: 40rpx;
					}
				}
				.password {
					clear: both;
					padding-bottom: 60rpx;
					border-bottom: 2rpx solid #EEEEEE;
					margin-top: 40rpx;
					.title {
						float: left;
						margin-top: 6rpx;
					}
					input {
						float: left;
						margin-left: 58rpx;
					}
					.icon {
						float: right;
						right: 42rpx;
						width: 20rpx;
						height: 24rpx;
						margin-top: 6rpx;
					}
				}
				.fun {
					margin-top: 24rpx;
					padding-bottom: 36rpx;
					font-size: 20rpx;
					checkbox {
						float: left;
					}
					.remember {
						float: left;
						color: #393D59;
						margin-top: 2rpx;
					}
					.forget {
						float: right;
						margin-right: 10rpx;
						color: #BFA077;
						margin-top: 2rpx;
					}
				}
				.phone {
					padding-bottom: 60rpx;
					border-bottom: 2rpx solid #EEEEEE;
					.title {
						text {
							float: left;
							margin-top: 6rpx;
						}
						image {
							float: left;
							width: 16rpx;
							height: 10rpx;
							margin-top: 20rpx;
							margin-left: 8rpx;
						}
					}
					input {
						float: left;
						margin-left: 40rpx;
					}
				}
				.code {
					clear: both;
					border-bottom: 2rpx solid #EEEEEE;
					margin-top: 40rpx;
					padding-bottom: 60rpx;
					.title {
						float: left;
						margin-top: 6rpx;
					}
					input {
						float: left;
						margin-left: 30rpx;
					}
					.get {
						float: left;
						color: #BBBBBB;
						font-size: 24rpx;
						margin-top: 8rpx;
					}
				}
				.btn {
					clear: both;
					margin-top: 36rpx;
					width: 624rpx;
					height: 92rpx;
					line-height: 92rpx;
					background-color: #F6F7F9;
					color: #808080;
					border-radius: 12rpx;
					text-align: center;
				}
				.btn.cur {
					background-color: #BFA077;
					color: #FFFFFF;
				}
			}
		}
		.footer {
			position: absolute;
			bottom: 30rpx;
			color: #808080;
			font-size: 20rpx;
			left: 166rpx;
			text {
				color: #BFA077;
			}
		}
	}
	
	/deep/ checkbox .uni-checkbox-input {
		border-radius: 50%;
		width: 18rpx;
		height: 18rpx;
		border-color: #979797;
	}
	/deep/ checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: #BFA077;
		border-color:#979797;
	}
	/deep/ checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
		color: #FFFFFF;
		width: 26rpx;
		height: 26rpx;  
		line-height: 26rpx;
		text-align: center;
		font-size: 18rpx;
	}
	
	/deep/ checkbox .wx-checkbox-input {
		border-radius: 50%;
		width: 18rpx;
		height: 18rpx;
		border-color: #979797;
	}
	/deep/ checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #BFA077;
		border-color:#979797;
	}
	/deep/ checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
		color: #FFFFFF;
		width: 26rpx;
		height: 26rpx;
		line-height: 26rpx;
		text-align: center;
		font-size: 18rpx;
	}
</style>
