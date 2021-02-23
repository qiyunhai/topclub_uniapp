<template>
	<view class="">
		<view class="module1">
			<block v-if="isLogin === true">
				<image src="../../static/img/my/qingtong.png" class="background"></image>
				<image :src="userInfo.head_image == '' ? '../../static/img/default_head.jpg' : userInfo.head_image" class="head"></image>
				<view class="name">{{userInfo.name}}</view>
				<view class="phone">{{userInfo.phone}}</view>
				<image src="../../static/img/my/huizhang.png" class="v"></image>
				<image src="../../static/img/my/xiaoxi.png" class="xiaoxi" @click="message"></image>
				<image src="../../static/img/my/shezhi.png" class="shezhi" @click="setting"></image>
				<view class="progress_value"><text>{{userInfo.consume}}</text>/{{userInfo.nextGradeConsume}}</view>
				<view class="progress">
					<view class="val" :style="'width:'+userInfo.gradeProgress+'%'"></view>
				</view>
				<view class="show_member">
					<text>查看会员卡</text>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</block>
			<block v-else>
				<image src="../../static/img/my/wdlb.png" class="background"></image>
				<image src="../../static/img/default_head.jpg" class="head"></image>
				<view class="name" @click="start_login">登录/注册</view>
				<view class="phone" @click="start_login">点击登录，百辆豪车任你选用</view>
			</block>
		</view>
		<view class="module2" v-if="isLogin === true">
			<view class="box">
				<image src="../../static/img/my/youhuiquan.png"></image>
				<image src="../../static/img/my/dingdan.png" @click="order"></image>
				<image src="../../static/img/my/qianbao.png" @click="wallet"></image>
			</view>
		</view>
		<view class="module3">
			<view class="title">常用工具</view>
			<image src="../../static/img/my/zaixiankefu.png" class="zxkf"></image>
			<image src="../../static/img/my/changjianwenti.png" class="cjwt"></image>
			<image src="../../static/img/my/shoucangchexing.png" class="sccx" @click="collection"></image>
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
			<image src="../../static/img/my/qianbao.png" class="close" @click="close_login" v-if="login_current == 0 || login_current == 1"></image>
			<image src="../../static/img/my/qianbao.png" class="close" @click="zz(0)" v-else></image>
			<view class="register" v-if="login_current == 0 || login_current == 1" @click="zz(2)">还没有注册？立即注册</view>
			<image src="../../static/img/default_head.jpg" class="logo" :style="(login_current == 0 || login_current == 1) ? '' : 'margin-top: 154rpx;'"></image>
			<view :style="(login_current == 0 || login_current == 1) ? '' : 'display: none;'">
				<view class="cut_swiper">
					<view :class="login_current == 0 ? 'item curr' : 'item'" @click="cutSwiper(0)">密码登录</view>
					<view :class="login_current == 1 ? 'item curr' : 'item'" @click="cutSwiper(1)">验证码登录</view>
				</view>
				<swiper class="login_swiper" :current="login_current" :duration="duration" @change="loginSwiperChange">
					<swiper-item>
						<view class="swiper-item">
							<form @submit="login1">
								<view class="account">
									<view class="title">
										<text>+86</text>
										<image src="../../static/img/my/qianbao.png"></image>
									</view>
									<input type="text" name="phone" @input="login1_phone_input" placeholder="请输入手机号" />
								</view>
								<view class="password">
									<view class="title">密码</view>
									<input type="password" name="password" @input="login1_password_input" placeholder="请输入密码" />
									<image src="../../static/img/my/qianbao.png" class="icon"></image>
								</view>
								<view class="fun">
									<!-- <checkbox value="" />
									<view class="remember">记住密码</view> -->
									<view class="forget" @click="zz(3)">忘记密码</view>
								</view>
								<button :class="(login1Phone != '' && login1Password != '') ? 'btn cur' : 'btn'" form-type="submit">登录</button>
							</form>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<form @submit="login2">
								<view class="phone">
									<view class="title">
										<text>+86</text>
										<image src="../../static/img/my/qianbao.png"></image>
									</view>
									<input type="text" name="phone" @input="login2_phone_input" placeholder="请输入手机号" />
								</view>
								<view class="code">
									<view class="title">验证码</view>
									<input type="text" name="code" @input="login2_code_input" placeholder="请输入验证码" />
									<view class="get" @click="sendLoginSms">{{login2GetCode}}</view>
								</view>
								<button :class="(login2Phone != '' && login2Code != '') ? 'btn cur' : 'btn'" form-type="submit">登录</button>
							</form>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="zz" :style="(login_current == 2 || login_current == 3) ? '' : 'display: none;'">
				<view class="account">
					<view class="title">
						<text>+86</text>
						<image src="../../static/img/my/qianbao.png"></image>
					</view>
					<input type="text" @input="phone_input" placeholder="请输入手机号" />
				</view>
				<view class="code">
					<view class="title">验证码</view>
					<input type="text" @input="code_input" placeholder="请输入验证码" />
					<view class="get" @click="zzSendSms">{{zzGetCode}}</view>
				</view>
				<view class="password">
					<view class="title">密码</view>
					<input type="password" @input="password_input" placeholder="请输入密码" />
					<image src="../../static/img/my/qianbao.png" class="icon"></image>
				</view>
				<button :class="(zzPhone != '' && zzCode != '' && zzPassword != '') ? 'btn cur' : 'btn'" @click="zw">{{login_current == 2 ? '注册' : '确认修改'}}</button>
			</view>
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
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				duration: 500,
				// 0=密码登录，1=验证码登录，2=注册，3=忘记密码
				login_current: 0,
				login_box: 'none',
				// 登录框内容
				login1Phone: '',
				login1Password: '',
				login2Phone: '',
				login2Code: '',
				// 获取验证码/倒计时
				login2GetCode: '获取验证码',
				login2CodeLock: false,	// 防止用户重复点击
				// 注册、忘记密码
				zzPhone: '',
				zzPassword: '',
				zzCode: '',
				zzCodeLock: false,
				zzGetCode: '获取验证码',
				// 当前用户是否登录
				isLogin: false,
				// 用户信息
				userInfo: [],
			};
		},
		methods: {
			onShow() {
				this.isLogin = false;
				this.refresh()
			},
			// 消息
			message() {
				uni.navigateTo({
					url: '../message/message'
				})
			},
			// 设置页面
			setting() {
				uni.navigateTo({
					url: '../setting/setting'
				})
			},
			// 收藏车型
			collection() {
				uni.navigateTo({
					url: '../collection/collection'
				})
			},
			// 我的订单
			order() {
				uni.navigateTo({
					url: '../order/list'
				})
			},
			// 我的钱包
			wallet() {
				uni.navigateTo({
					url: 'wallet'
				})
			},
			// 切换登录方式
			cutSwiper(cut) {
				this.duration = 500;
				this.login_current = cut
			},
			loginSwiperChange(event) {
				this.duration = 500;
				this.login_current = event.detail.current
			},
			// 监听输入框更改按钮样式
			login1_phone_input(e) {
				this.login1Phone = e.detail.value
			},
			login1_password_input(e) {
				this.login1Password = e.detail.value
			},
			login2_phone_input(e) {
				this.login2Phone = e.detail.value
			},
			login2_code_input(e) {
				this.login2Code = e.detail.value
			},
			// 注册、忘记密码
			phone_input(e) {
				this.zzPhone = e.detail.value
			},
			code_input(e) {
				this.zzCode = e.detail.value
			},
			password_input(e) {
				this.zzPassword = e.detail.value
			},
			// 开启登录框
			start_login() {
				this.login_box = 'block';
				uni.hideTabBar();
			},
			// 关闭登录框
			close_login() {
				this.login_box = 'none';
				uni.showTabBar();
			},
			// 验证是否登录/登录状态是否有效
			refresh() {
				if(uni.getStorageSync('token') != '') {
					// 登录状态：已登录
					this.isLogin = true;
					// 获取用户信息
					api.request('/api/User/my', {}, 'GET', true).then(res => {
						if(res.data.status == 1) {
							this.userInfo = res.data.result;
							// 登录信息保存到缓存
							uni.setStorageSync('userInfo', res.data.result)
						} else if(res.data.status == 0) {
							uni.showToast({
								title: res.data.message,
								icon: 'none'
							})
						} else if(res.data.status == -1) {
							this.isLogin = false;
						}
					})
				}
			},
			// 账号密码登录
			login1(e) {
				if(e.detail.value.phone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return;
				}
				if(e.detail.value.password == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return;
				}
				var data = {
					phone: e.detail.value.phone,
					password: e.detail.value.password,
					type: this.login_current + 1
				};
				this.checkLogin(data)
			},
			// 短信验证码登录
			login2(e) {
				if(e.detail.value.phone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return;
				}
				if(e.detail.value.code == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return;
				}
				var data = {
					phone: e.detail.value.phone,
					code: e.detail.value.code,
					type: this.login_current + 1
				};
				this.checkLogin(data)
			},
			// 请求登录
			checkLogin(data) {
				api.request('/api/Login/checkLogin', data, "POST").then(res => {
					if(res.data.status == 1) {
						// 登录成功
						uni.showToast({
							title: res.data.message,
							icon: 'success'
						})
						uni.setStorageSync('token', res.data.result.token)
						// 关闭登录框
						this.close_login()
						// 清空输入框信息
						if(data.type == 1) {
							this.login1Phone = '';
							this.login1Password = '';
						} else if(data.type == 2){
							this.login2Phone = '';
							this.login2Code = '';
						}
						// 更新页面信息
						this.refresh()
					} else if(res.data.status == 0) {
						// 登录失败
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
					}
				})
			},
			// 登录短信验证码
			sendLoginSms() {
				if(!this.login2CodeLock) {
					if(this.login2GetCode == '获取验证码') {
						if(this.login2Phone == '') {
							uni.showToast({
								title: '请输入手机号',
								icon: 'none'
							})
							return;
						}
						this.login2CodeLock = true;//上锁
						var data = {
							phone: this.login2Phone,
							mode: 1
						}
						this.sendSms(data)
					}
				}
			},
			// 注册、忘记密码获取验证码
			zzSendSms () {
				if(!this.zzCodeLock) {
					if(this.zzGetCode == '获取验证码') {
						if(this.zzPhone == '') {
							uni.showToast({
								title: '请输入手机号',
								icon: 'none'
							})
							return;
						}
						this.zzCodeLock = true;//上锁
						if(this.login_current == 2) {
							// 注册短信场景
							var mode = 2;
						} else if(this.login_current == 3) {
							// 找回密码短信场景
							var mode = 3;
						}
						var data = {
							phone: this.zzPhone,
							mode: mode
						}
						this.sendSms(data)
					}
				}
			},
			// 发送短信验证码
			sendSms(data) {
				api.request('/api/Sms/send', data, "POST").then(res => {
					if(res.data.status == 1) {
						uni.showToast({
							title: res.data.message,
							icon: 'success'
						})
						var num = 60;
						var timer = setInterval(() => {
							num -= 1;
							if(data.mode == 2) {
								this.login2GetCode = num+'S';
								if(num <= 0) {
									this.login2GetCode = '获取验证码';
									this.login2CodeLock = false;//解锁
									clearInterval(timer)
								}
							} else {
								this.zzGetCode = num+'S';
								if(num <= 0) {
									this.zzGetCode = '获取验证码';
									this.zzCodeLock = false;//解锁
									clearInterval(timer)
								}
							}
						}, 1000)
					} else if(res.data.status == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
						if(data.mode == 2) {
							this.login2CodeLock = false;//解锁
						} else {
							this.zzCodeLock = false;//解锁
						}
					}
				})
			},
			// 注册、找回密码
			zz(val) {
				this.duration = 0;
				this.login_current = val;
			},
			zw() {
				if(this.zzPhone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return;
				}
				if(this.zzCode == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return;
				}
				if(this.zzPassword == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return;
				}
				var type = this.login_current;
				if(type == 2) {
					var url = '/api/Login/checkRegister';	//注册
				} else if(type == 3) {
					var url = '/api/Login/checkRetrieve';	//找回密码
				}
				var data = {
					phone: this.zzPhone,
					code: this.zzCode,
					password: this.zzPassword
				}
				api.request(url, data, "POST").then(res => {
					if(res.data.status == 1) {
						uni.showToast({
							title: res.data.message,
							icon: 'success'
						})
						// 清空输入框
						this.zzPhone = '';
						this.zzCode = '';
						this.zzPassword = '';
						// 跳转到登录
						this.zz(0)
					} else if(res.data.status == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
					}
				})
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
	.zz {
		width: 624rpx;
		margin-top: 112rpx;
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
		.btn {
			clear: both;
			margin-top: 40rpx;
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
</style>
