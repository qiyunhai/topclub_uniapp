<template>
	<view class="main">
		<view class="module address" @click="address">
			<image src="../../static/img/order/dingwei.png" class="dw"></image>
			<block v-if="userAddress.length == 0">
				<view class="info">请选择送车地址</view>
			</block>
			<block v-else>
				<view class="info1">{{userAddress.name}} 86-{{userAddress.phone}}</view>
				<view class="info2">{{userAddress.borrow_address}}</view>
			</block>
			<image src="../../static/img/rightj.png" class="jiao"></image>
		</view>
		<view class="module car">
			<image :src="car.image" class="img"></image>
			<view class="title">{{car.title}}</view>
			<view class="paizhao">
				<image src="../../static/img/car_jingpai.png"></image>
				<text>{{car.license}}</text>
			</view>
			<view class="nian">
				<image src="../../static/img/car_chexing.png"></image>
				<text>{{car.year_limit}}</text>
			</view>
			<view class="price">¥<text>{{car.price}}</text>/天</view>
		</view>
		<view class="module time">
			<view @tap="shortTermVisibleStart=true" class="start">
				<view class="title">用车时间</view>
				<view class="notime" v-if="start == false">未选时间</view>
				<view class="istime" v-else>{{startInfo}}</view>
				<view class="hr"></view>
			</view>
			<w-picker
				:visible.sync="shortTermVisibleStart"
				mode="shortTerm"
				:current="true"
				expand="60"
				@confirm="start_date($event)"
				ref="shortTerm" 
			></w-picker>
			<view class="date">
				<view v-if="day == 0">请选择时间</view>
				<view v-if="day == 'null'">至少为1天</view>
				<view v-if="day != 0 && day != 'null'">用车时间{{day}}天</view>
				<image src="../../static/img/order/jiantou.png"></image>
			</view>
			<view @tap="shortTermVisibleEnd=true" class="end">
				<view class="title">还车时间</view>
				<view class="notime" v-if="end == false">未选时间</view>
				<view class="istime" v-else>{{endInfo}}</view>
				<view class="hr"></view>
			</view>
			<w-picker
				:visible.sync="shortTermVisibleEnd"
				mode="shortTerm"
				:current="true"
				expand="3650"
				@confirm="end_date($event)"
				ref="shortTerm" 
			></w-picker>
		</view>
		<view class="module content">
			<view class="coupon">
				<view class="l">优惠券</view>
				<view class="r">
					<text>无优惠券可用</text>
					<image src="../../static/img/rightj.png"></image>
				</view>
			</view>
			<view class="info">
				<view class="title">费用明细</view>
				<view class="item">
					<view class="l">车辆租金（线下缴纳）</view>
					<view class="r">￥{{car.price}}</view>
				</view>
				<view class="item">
					<view class="l">基准押金（线下缴纳）</view>
					<view class="r">￥{{car.mortgage_price}}</view>
				</view>
				<view class="item">
					<view class="l">定金费用（订单生效时转为违章押金）</view>
					<view class="r">￥{{car.reserve_price}}</view>
				</view>
				<view class="price">
					<view class="l">线下需交费用</view>
					<view class="r">￥{{total_price}}</view>
				</view>
				<view class="table">
					<view class="title">押金说明</view>
					<view class="boxs">
						<view class="tr">
							<view class="td">
								租车押金
							</view>
							<view class="td">
								<view class="price">
									￥{{car.mortgage_price}} <text>可退</text>
								</view>
								<view class="introduce">
									交付车辆时缴纳{{car.mortgage_price}}元租车押金，若用车期间无车损，还车当日退还押金
								</view>
							</view>
						</view>
						<view class="tr">
							<view class="td">
								违章押金
							</view>
							<view class="td">
								<view class="price">
									￥{{car.reserve_price}} <text>可退</text>
								</view>
								<view class="introduce">
									订单生效时定金转为违章押金，若用车期间无违章，订单结束后20天内退还押金
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="content">
				<view class="xy">
					<checkbox v-if="checkboxVal == true" checked @click="checkboxChange" />
					<checkbox v-if="checkboxVal == false" @click="checkboxChange" />
					<view>
						<text @click="checkboxChange">我已阅读并同意</text>
						<text class="a" @click="xieyi_box()">《用车服务协议》</text>
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="lv">
					<view class="price">￥{{car.reserve_price}}</view>
					<view class="info">该费用是车辆定金，交车时缴纳佣金及押金</view>
				</view>
				<view class="rv" @click="yuding">
					<image src="../../static/img/car/lijiyuding.png"></image>
				</view>
			</view>
			<view class="mengban" :style="'display:'+pay_box" @click="close_pay_box" @touchmove.stop.prevent="moveHandle"></view>
			<view class="select_time_box" :style="'display:'+pay_box" @touchmove.stop.prevent="moveHandle">
				<view class="title">请选择支付方式</view>
				<view class="wx" @click="edit_pay_mode(1)">
					<image src="../../static/img/order/weixn.png" class="img"></image>
					<view class="name">微信支付</view>
					<image src="../../static/img/xuanzhong.png" class="dh" v-if="pay_mode == 1"></image>
				</view>
				<view class="zfb" @click="edit_pay_mode(2)">
					<image src="../../static/img/order/zhifubao.png" class="img"></image>
					<view class="name">支付宝支付</view>
					<image src="../../static/img/xuanzhong.png" class="dh" v-if="pay_mode == 2"></image>
				</view>
				<button class="btn" @click="pay">立即支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	// const jweixin = require('jweixin-module');
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				shortTermVisibleStart: false,
				shortTermVisibleEnd: false,
				// 用车时间
				start: false,//选择状态
				startInfo: '',//展示时间信息
				startDateTime: '',//时间戳
				// 还车时间
				end: false,//选择状态
				endInfo: '',//展示时间信息
				endDateTime: '',//时间戳
				// 用户地址
				userAddress: [],
				// 汽车信息
				car_id: 0,
				car: [],
				price: '',	// 租金
				// 总金额
				total_price: 0,
				// 用车天数
				day: 0,
				// 支付框显示状态
				pay_box: 'none',
				// 支付方式 1=微信,2=支付宝
				pay_mode: 1,
				// 同意协议
				checkboxVal: false
			}
		},
		onLoad(e) {
			this.car_id = e.id;
			var data = {
				id: e.id
			}
			api.request('/api/Order/confirm', data, "GET", true).then(res => {
				var datas = res.data.result;
				var car = datas.car;
				this.userAddress = datas.address;
				this.car = car;
				this.price = car.price
				this.startInfo = datas.thisDateTimeInfo;
				this.endInfo = datas.thisDateTimeInfo;
				// 总金额
				this.total_price = Number(car.price) + Number(car.mortgage_price) + Number(car.reserve_price);
			})
		},
		methods: {
			// 禁止滑动
			moveHandle() {
				return false;
			},
			// 协议同意状态
			checkboxChange() {
				this.checkboxVal = !this.checkboxVal;
			},
			// 更改支付方式
			edit_pay_mode(mode) {
				this.pay_mode = mode;
			},
			// 关闭支付框
			close_pay_box() {
				this.pay_box = 'none';
			},
			// 选择送车地址
			address() {
				uni.navigateTo({
					url: '../address/address'
				})
			},
			// 用车时间
			start_date(res) {
				if(typeof res.obj.date == 'object') {
					var date = res.obj.date.value;
				} else {
					var date = res.obj.date;
				}
				if(typeof res.obj.hour == 'object') {
					var hour = res.obj.hour.value;
				} else {
					var hour = res.obj.hour;
				}
				this.startInfo = date.substring(5,7)+'月'+date.substring(8,10)+'日'+hour+'点';
				this.start = true;
				let startDateTime = String((new Date(date+' '+hour+':00:00')).getTime()).substring(0, 10);
				this.startDateTime = startDateTime;
				this.count_day();
			},
			// 还车时间
			end_date(res) {
				if(typeof res.obj.date == 'object') {
					var date = res.obj.date.value;
				} else {
					var date = res.obj.date;
				}
				if(typeof res.obj.hour == 'object') {
					var hour = res.obj.hour.value;
				} else {
					var hour = res.obj.hour;
				}
				this.endInfo = date.substring(5,7)+'月'+date.substring(8,10)+'日'+hour+'点';
				this.end = true;
				let endDateTime = String((new Date(date+' '+hour+':00:00')).getTime()).substring(0, 10);
				this.endDateTime = endDateTime;
				this.count_day();
			},
			// 根据时间戳计算天数
			count_day() {
				if(this.startDateTime != '' && this.endDateTime != '') {
					if(this.endDateTime < this.startDateTime) {
						this.day = 'null';
					} else {
						let diff = this.endDateTime - this.startDateTime;
						if(diff < 86400) {
							var day = 1;
						} else {
							var day = Math.ceil(diff / 86400);
						}
						this.day = day;
						// 计算优惠价格
						var price = this.car.price;
						if(day >= 3 && day < 7) {
							price = this.car.day3_price;
						} else if(day >= 7 && day < 15) {
							price = this.car.day7_price;
						} else if(day >= 15 && day < 30) {
							price = this.car.day15_price;
						} else if(day >= 30) {
							price = this.car.day30_price;
						}
						this.car.price = price;
						// 总金额
						this.total_price = (Number(price) * day) + Number(this.car.mortgage_price) + Number(this.car.reserve_price);
					}
				}
			},
			// 立即预定
			yuding() {
				if(this.start == false) {
					uni.showToast({
						title:"请选择用车时间",
						icon:"none"
					})
					return
				}
				if(this.end == false) {
					uni.showToast({
						title:"请选择还车时间",
						icon:"none"
					})
					return
				}
				if(this.checkboxVal == false) {
					uni.showToast({
						title:"您还未同意用车服务协议",
						icon:"none"
					})
					return
				}
				this.pay_box = 'block';
			},
			// 支付
			pay() {
				// uni.showToast({
				// 	title:"支付正在对接中",
				// 	icon:"none"
				// })
				// return
				// // #ifdef H5
				// var local = 'https://test.bjtopclub.com/pages/order/confirm';   //你自己的需要跳转到的页面
				// 				var APPID = 'wx6264f512db5292f5';
				// 				window.location.href =
				// 					'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
				// 					APPID +
				// 					'&redirect_uri=' +
				// 					encodeURIComponent(local) +
				// 					'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
				// // this.isWechat()
				// // #endif
				// return
				// 下单
				api.request('/api/Order/create', {
					car_id: this.car_id,
					start_date_time: this.startDateTime,
					end_date_time: this.endDateTime
				}, 'POST', true).then(res => {
					// 订单号
					var order_number = res.data.result.order_number
					if(res.data.status == 1) {
						// 下单成功，发起支付
						// #ifdef MP-WEIXIN
						uni.getProvider({
						    service: 'oauth',
						    success: function (e) {
								if (~e.provider.indexOf('weixin')) {
									uni.login({
										provider: 'weixin',
										success: function (loginRes) {
											api.request('/api/Pay/wxPayOrder', {
												code: loginRes.code,
												order_number: order_number
											}).then(res => {
												var datas = JSON.parse(res.data.result);
												// 发起微信支付
												uni.requestPayment({
													provider: 'wxpay',
													timeStamp: datas.timeStamp,
													nonceStr: datas.nonceStr,
													package: datas.package,
													signType: datas.signType,
													paySign: datas.paySign,
												    success (result) {
														console.log(result)
												        uni.showToast({
															title:"支付成功",
															icon:"none"
												        })
												    },
												    fail () {
												        uni.showToast({
															title:"支付失败",
															icon:"none"
												        })
												    }
												})
											})
										},
										fail() {
											uni.showToast({
												title:"获取登录信息失败",
												icon:"none"
											})
										}
									});
								}
							},
							fail() {
								uni.showToast({
									title:"拉取设备信息失败",
									icon:"none"
								})
							}
						})
						// #endif
					} else if(res.data.status == 0) {
						// 下单失败
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
				return;
			},
			payRequest:function(){
				var self = this;
				console.log(self)
				jweixin.config({
					debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId:AppId, // 必填，公众号的唯一标识
					timestamp:self.rtData.timeStamp, // 必填，生成签名的时间戳
					nonceStr:self.rtData.nonceStr, // 必填，生成签名的随机串
					signature:self.rtData.paySign, // 必填，签名，见附录1
					jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				jweixin.ready(function() {
					jweixin.checkJsApi({
						jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
						success: function(res) {
							console.log('checkjsapi Success')
							console.log(res);
						},
						fail:function(res) {
							console.log('res')
							console.log(res);
						}
					});
					jweixin.chooseWXPay({
						timestamp: self.rtData.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
						nonceStr: self.rtData.nonceStr, // 支付签名随机串，不长于 32 位
						package: self.rtData.packageValue, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
						signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
						paySign:self.rtData.paySign, // 支付签名
						success:function(res) {
							// 支付成功后的回调函数
							
							console.log('paysuccess')
							console.log(res)
							var route =  'payResult' + '?type=1'
							uni.navigateTo({
							  url:route
							});
							
						},
						cancel: function(r) {
						   var route =  'payResult' + '?type=2'
						   uni.navigateTo({
							 url:route
						   });
						},
						fail:function(res) {
						   
							console.log('payfail')
							console.log(res)
							var route =  'payResult' + '?type=0' 
							uni.navigateTo({
							  url:route
							});
							
							
						}
					});
				});
				 
				jweixin.error(function(res) {
					console.log('error')
					console.log(res)
					uni.showToast({
						icon: 'none',
						title: '支付失败了',
						duration: 4000
					});
						// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
						/*alert("config信息验证失败");*/
				});
							
			},
			
			
			
			//判断是否在微信中  
			isWechat: function() {
				var ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/micromessenger/i) == 'micromessenger') {
					console.log('是微信客户端')
					return true;
				} else {
					console.log('不是微信客户端')
					return false;
				}
			},
			//初始化sdk配置  
			initJssdkShare: function(callback, url) {
				console.log("init Url : "+url)
				return;
				// 这是我这边封装的 request 请求工具，实际就是 uni.request 方法。
				request.post(
					'http://127.0.0.1:8080/mptask/api/getSignPackage',
					{
						url: url
					},
					"form",
					function(res){
						let success = res["success"];
						let result = res["result"];
						if(success){
							jweixin.config({
								debug: false,
								appId: result.appId,
								timestamp: result.timestamp,
								nonceStr: result.nonceStr,
								signature: result.signature,
								jsApiList: [
									'checkJsApi',
									'onMenuShareTimeline',
									'onMenuShareAppMessage'
								]
							});
							//配置完成后，再执行分享等功能  
							if (callback) {
								callback(result);
							}
						}
					}
				);
			},
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #F7F7F7;
		width: 100%;
		height: auto;
	}
	.module {
		background-color: #FFFFFF;
		margin-bottom: 18rpx;
	}
	.address {
		position: relative;
		height: 120rpx;
		color: #393D59;
		font-size: 28rpx;
		.dw {
			position: absolute;
			width: 26rpx;
			height: 34rpx;
			margin-top: 44rpx;
			margin-left: 40rpx;
		}
		.info {
			position: absolute;
			padding-top: 40rpx;
			margin-left: 86rpx;
		}
		.jiao {
			position: absolute;
			width: 10rpx;
			height: 20rpx;
			margin-top: 50rpx;
			margin-left: 700rpx;
		}
		.info1 {
			position: absolute;
			margin-top: 22rpx;
			margin-left: 86rpx;
		}
		.info2 {
			position: absolute;
			margin-top: 62rpx;
			margin-left: 86rpx;
		}
	}
	.car {
		position: relative;
		height: 220rpx;
		.img {
			position: absolute;
			width: 240rpx;
			height: 160rpx;
			margin-top: 30rpx;
			margin-left: 40rpx;
		}
		.title {
			position: absolute;
			font-size: 36rpx;
			color: #393D59;
			margin-top: 30rpx;
			margin-left: 314rpx;
		}
		.paizhao {
			position: absolute;
			margin-left: 314rpx;
			padding-top: 90rpx;
			image {
				width: 40rpx;
				height: 20rpx;
			}
			text {
				margin-left: 12rpx;
				color: #393B5B;
				font-size: 24rpx;
			}
		}
		.nian {
			position: absolute;
			margin-left: 434rpx;
			padding-top: 100rpx;
			image {
				float: left;
				width: 28rpx;
				height: 28rpx;
			}
			text {
				float: left;
				margin-left: 12rpx;
				color: #393B5B;
				font-size: 24rpx;
			}
		}
		.price {
			color: #BFA077;
			font-size: 28rpx;
			font-weight: 600;
			padding-top: 140rpx;
			margin-left: 314rpx;
			text {
				font-size: 36rpx;
			}
		}
	}
	.time {
		color: #393D59;
		height: 186rpx;
		.notime {
			float: left;
			margin-top: 4rpx;
			font-size: 36rpx;
			font-weight: 600;
		}
		.istime {
			float: left;
			font-size: 32rpx;
			margin-top: 10rpx;
			margin-left: 40rpx;
		}
		.hr {
			clear: both;
			width: 200rpx;
			height: 20rpx;
			border-bottom: 2rpx solid #F7F7F7;
		}
		.start {
			float: left;
			.title {
				padding-top: 40rpx;
				margin-left: 88rpx;
				font-size: 28rpx;
				font-weight: 500;
			}
			.notime {
				margin-left: 88rpx;
			}
			.hr {
				margin-left: 60rpx;
			}
		}
		.date {
			float: left;
			margin-left: 48rpx;
			view {
				padding-top: 40rpx;
				color: #808080;
				font-size: 24rpx;
			}
			image {
				margin-left: 12rpx;
				width: 100rpx;
				height: 16rpx;
			}
		}
		.end {
			float: left;
			.title {
				padding-top: 40rpx;
				margin-left: 114rpx;
				font-size: 28rpx;
				font-weight: 500;
			}
			.notime {
				margin-left: 84rpx;
			}
			.hr {
				margin-left: 60rpx;
			}
		}
	}
	.content {
		.coupon {
			margin: 0 auto;
			width: 670rpx;
			height: 120rpx;
			line-height: 120rpx;
			border-bottom: 2rpx solid #F7F7F7;
			.l {
				float: left;
				view {
					color: #393D59;
					font-size: 28rpx;
				}
			}
			.r {
				float: right;
				color: #808080;
				font-size: 24rpx;
				image {
					margin-left: 12rpx;
					width: 10rpx;
					height: 20rpx;
				}
			}
		}
		.info {
			margin: 0 auto;
			width: 670rpx;
			.title {
				color: #393D59;
				font-size: 28rpx;
				margin-top: 30rpx;
				font-weight: 500;
			}
			.item {
				width: 100%;
				height: 34rpx;
				line-height: 34rpx;
				margin-top: 20rpx;
				.l {
					float: left;
					color: #393D59;
					font-size: 24rpx;
				}
				.r {
					float: right;
					color: #BFA077;
					font-size: 24rpx;
					font-weight: 600;
				}
			}
			.price {
				margin-top: 30rpx;
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				border-top: 2rpx solid #F7F7F7;
				border-bottom: 2rpx solid #F7F7F7;
				.l {
					float: left;
					color: #393D59;
					font-size: 28rpx;
					font-weight: 600;
				}
				.r {
					float: right;
					color: #BFA077;
					font-size: 28rpx;
					font-weight: 600;
				}
			}
			.table {
				background-color: #F7F7F7;
				width: 660rpx;
				height: 430rpx;
				margin-top: 46rpx;
				.title {
					padding-top: 40rpx;
					margin-left: 32rpx;
					color: #393D59;
					font-size: 28rpx;
					font-weight: 500;
				}
				.boxs {
					margin-top: 26rpx;
					margin-left: 32rpx;
					width: 594rpx;
					.td {
						height: 148rpx;
						border: 2rpx solid #D8D8D8;
					}
					.td:nth-child(1) {
						float: left;
						width: 148rpx;
						line-height: 148rpx;
						text-align: center;
						color: #D8D8D8;
						font-size: 28rpx;
						font-weight: 500;
					}
					.td:nth-child(2) {
						float: right;
						width: 440rpx;
						border-left: 0rpx;
						.price {
							margin-top: -14rpx;
							margin-left: 26rpx;
							font-size: 20rpx;
							font-weight: 600;
							color: #808080;
							text {
								color: #BFA077;
								margin-left: 8rpx;
							}
						}
						.introduce {
							width: 380rpx;
							color: #D8D8D8;
							font-size: 20rpx;
							margin-top: -24rpx;
							margin-left: 26rpx;
						}
					}
					.tr:nth-child(2) {
						.td {
							border-top: 0rpx;
						}
					}
				}
			}
		}
		.content {
			width: 670rpx;
			margin: 0 auto;
			.xy {
				float: left;
				width: 100%;
				height: 98rpx;
				line-height: 98rpx;
				font-size: 20rpx;
				checkbox {
					float: left;
					margin-top: -3rpx;
				}
				view {
					float: left;
					.a {
						color: #BFA077;
					}
				}
				padding-bottom: 98rpx;
			}
		}
		.footer {
			position: fixed;
			z-index: 100;
			bottom: 0rpx;
			clear: both;
			width: 100%;
			border-top: 1rpx solid #F7F7F7;
			.lv {
				float: left;
				width: 65.87%;
				height: 98rpx;
				background-color: #FFFFFF;
				.price {
					color: #BFA077;
					font-size: 36rpx;
					margin-top: 8rpx;
					margin-left: 40rpx;
				}
				.info {
					color: #808080;
					font-size: 20rpx;
					margin-left: 46rpx;
				}
			}
			.rv {
				float: left;
				width: 34.13%;
				height: 98rpx;
				background-color: #BFA077;
				image {
					width: 118rpx;
					height: 42rpx;
					margin-top: 28rpx;
					margin-left: 70rpx;
				}
			}
		}
	}
	.mengban {
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: 101;
		background-color: rgba($color: #000000, $alpha: 0.5);
		width: 100%;
		height: 75%;
	}
	.select_time_box {
		position: fixed;
		z-index: 102;
		width: 100%;
		height: 394rpx;
		background-color: #FFFFFF;
		bottom: 0rpx;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		color: #222222;
		.title {
			font-size: 28rpx;
			font-weight: 600;
			text-align: center;
			padding-top: 30rpx;
		}
		.wx {
			margin-top: 60rpx;
			width: 100%;
			height: 60rpx;
			border-bottom: 2rpx solid #F2F2F2;
			.img {
				float: left;
				width: 44rpx;
				height: 40rpx;
				margin-left: 30rpx;
			}
			.name {
				float: left;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.zfb {
			margin-top: 20rpx;
			width: 100%;
			height: 44rpx;
			.img {
				float: left;
				width: 44rpx;
				height: 44rpx;
				margin-left: 30rpx;
			}
			.name {
				float: left;
				font-size: 28rpx;
				margin-top: 2rpx;
				margin-left: 20rpx;
			}
		}
		.dh {
			float: right;
			margin-top: 8rpx;
			margin-right: 40rpx;
			width: 32rpx;
			height: 24rpx;
		}
		.btn {
			position: absolute;
			bottom: 0rpx;
			clear: both;
			width: 100%;
			height: 98rpx;
			line-height: 98rpx;
			border-radius: 0rpx;
			background-color: #BFA077;
			color: #FFFFFF;
			font-size: 32rpx;
		}
	}
</style>