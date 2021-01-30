<template>
	<view class="main">
		<view class="content">
			<view class="search">
				<image src="../../static/img/search.jpg" class="icon"></image>
				<input type="text" name="search" placeholder="输入您喜欢的车型或关键字" :value="search" @input="searchChange" />
			</view>
			<view class="open_box" @click="types_box_switch(true)">
				<view>筛选</view>
				<image src="../../static/img/shaixuanb.png"></image>
			</view>
			<view class="brands">
				<swiper :duration="1000" :current="current" @change="bannerChange">
					<swiper-item v-for="(item, index) in brands" :key="index">
						<view class="swiper-item">
							<block v-if="index == 0">
								<view class="item">
									<image src="../../static/img/car/quanbu.png" v-if="'all_car' != brand" @click="brandChange('all_car')"></image>
									<image src="../../static/img/car/quanbu_curr.png" v-if="'all_car' == brand"></image>
								</view>
							</block>
							<view class="item" v-for="(value, key) in item" :key="key">
								<image :src="value.image" v-if="(value.pid+'_'+value.id) != brand" @click="brandChange(value.pid+'_'+value.id)"></image>
								<image :src="value.image_curr" v-if="(value.pid+'_'+value.id) == brand"></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="brands_dots">
				<view v-for="(item, index) in brands" :key="index" :class="index == current ? 'dot_item curr' : 'dot_item'"></view>
			</view>
			<view class="cars">
				<view class="car_item" v-for="(item, index) in list" :key="index" @click="car_detail(item.id)">
					<image :src="item.image"></image>
					<view class="title">
						{{item.title}}
					</view>
					<view class="price">
						￥{{item.price}}/天
					</view>
				</view>
			</view>
			<view class="notcar" v-if="not_car">
				<view class="info">该车型暂无，可以联系客服咨询哦</view>
				<view class="btn">点击拨打客服热线</view>
			</view>
			<view class="types" @touchmove.stop.prevent="moveHandle" :style="'display:'+types_box">
				<view class="mask" @click="types_box_switch(false)"></view>
				<view class="types_box">
					<view class="box_title">
						<text>筛选</text>
						<image src="../../static/img/shaixuanb.png"></image>
					</view>
					<view class="box_content">
						<view class="item" v-for="(item, index) in types">
							<view class="title">
								{{item.title}}
							</view>
							<view class="items">
								<view :class="type[item.id] ? 'btn' : 'btn curr'" @click="typesChange(item.id+'_all')">不限</view>
								<view v-for="(value, key) in item.son" :class="(type[value.pid] == value.pid+'_'+value.id) ? 'btn curr' : 'btn'" @click="typesChange(value.pid+'_'+value.id)">{{value.title}}</view>
							</view>
						</view>
					</view>
					<view class="operation">
						<view class="reset" @click="resetTypes">重置选择</view>
						<view class="submit" @click="submitTypes">确认选择</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js';
	export default {
		data() {
			return {
				// 页面初始化
				init: true,
				// 筛选框显示状态
				types_box: 'none',
				// swiper默认选中页
				current: 0,
				// 品牌
				brands: [],
				// 类型
				types: [],
				// 列表数据
				list: [],
				// 当前分页
				page: 1,
				// 查询关键字
				search: '',
				// 选中的品牌
				brand: 'all_car',
				// 选中的类型
				type: [],
				// 没有车
				not_car: false
			};
		},
		methods: {
			onShow() {
				// 判断是否有其他页面传过来的搜索
				var search_car = uni.getStorageSync('search_car')
				if(search_car != '') {
					this.search = search_car;
					uni.setStorageSync('search_car', '')
					this.getData()
				}
			},
			onLoad() {
				this.getData()
			},
			// 禁止页面滑动
			moveHandle() {
				return;
			},
			// swiper滑动
			bannerChange(e) {
				this.current = e.detail.current
			},
			// 控制筛选框显示/隐藏
			types_box_switch(e) {
				if(e) {
					var types_box = 'block';
				} else {
					var types_box = 'none';
				}
				this.types_box = types_box;
			},
			// 搜索框更改
			searchChange(e) {
				this.search = e.detail.value;
				this.page = 1;
				this.getData();
			},
			// 重置选择
			resetTypes() {
				this.type = [];
			},
			// 确认选择
			submitTypes() {
				this.types_box = 'none';
				this.page = 1;
				this.getData();
			},
			// 选择品牌
			brandChange(brand) {
				this.brand = brand;
				this.page = 1;
				this.getData();
			},
			// 选择类别
			typesChange(types) {
				var typesArr = types.split('_');
				if(typesArr[1] == 'all') {
					this.type[typesArr[0]] = '';
				} else {
					this.type[typesArr[0]] = types;
				}
				this.types_box = 'none';
				this.types_box = 'block';
			},
			// 车辆详情页面
			car_detail(id) {
				uni.navigateTo({
					url: 'detail?id='+id
				})
			},
			// 获取列表数据
			getData() {
				if(this.type.length == 0) {
					var types = '';
				}else{
					var types = '';
					for(let i = 0; i < this.type.length; i++) {
						if(this.type[i] != undefined && this.type[i] != '') {
							types += this.type[i]+',';
						}
					}
				}
				if(this.brand == 'all_car') {
					// 获取全部车辆
					var brand = '';
				} else {
					var brand = this.brand;
				}
				var data = {
					init: this.init,
					search: this.search,
					types: types.slice(0, types.length - 1),
					brand: brand,
					page: this.page
				}
				api.request('/api/Car/index', data).then(res => {
					this.init = false;
					var datas = res.data.result;
					this.types = datas.types;
					this.brands = datas.brands;
					
					if(res.data.status == 0) {
						this.not_car = false;
						if(this.page != 1) {
							uni.showToast({
								title: res.data.message,
								icon: 'none'
							})
							this.page -= 1;
						} else {
							this.list = [];
							this.not_car = true;
						}
					} else if(res.data.status == 1) {
						this.not_car = false;
						if(this.page == 1) {
							this.list = datas.result;
						} else {
							this.list = this.list.concat(datas.result);
						}
					}
				})
			},
			// 上拉加载
			onReachBottom(){
				uni.showLoading({
					title: '加载中'
				})
				this.page+=1
				this.getData()
				uni.hideLoading()
			}
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
		width: 576rpx;
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
			// #ifdef H5 || APP-PLUS
			padding-top: 10rpx;
			// #endif
		}
	}
	.open_box {
		position: absolute;
		float: left;
		width: 50rpx;
		height: 52rpx;
		top: 38rpx;
		right: 64rpx;
		font-size: 24rpx;
		image {
			position: absolute;
			width: 16rpx;
			height: 18rpx;
			top: 9rpx;
			left: 54rpx;
		}
	}
	.brands {
		position: absolute;
		margin-top: 108rpx;
		width: 100%;
		height: 336rpx;
		overflow: hidden;
		swiper {
			width: 100%;
			height: 100%;
		}
		.item {
			float: left;
			width: 168rpx;
			height: 168rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.brands_dots {
		position: absolute;
		margin-top: 464rpx;
		margin-left: 294rpx;
		.dot_item {
			float: left;
			width: 12rpx;
			height: 12rpx;
			background: #D8D8D8;
			border-radius: 10rpx;
			margin-left: 12rpx;
		}
		.curr {
			width: 36rpx;
			background: #BEA077;
		}
	}
	.notcar {
		position: absolute;
		width: 90%;
		margin-top: 736rpx;
		text-align: center;
		.info {
			font-size: 24rpx;
			color: #808080;
		}
		.btn {
			margin-top: 40rpx;
			margin-left: 200rpx;
			width: 276rpx;
			height: 64rpx;
			line-height: 64rpx;
			border: 2rpx solid #BFA077;
			border-radius: 32rpx;
			text-align: center;
			font-size: 28rpx;
			color: #BFA077;
		}
	}
	.cars {
		position: absolute;
		margin-top: 504rpx;
		// #ifdef H5
		margin-bottom: 100rpx;
		// #endif
		width: 100%;
		.car_item {
			width: 670rpx;
			height: 360rpx;
			overflow: hidden;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			border-radius: 16rpx;
			box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.08);
			font-size: 28rpx;
			font-weight: 500;
			image {
				width: 100%;
				height: 290.14rpx;
			}
			.title {
				float: left;
				margin-top: 8rpx;
				margin-left: 22rpx;
			}
			.price {
				float: right;
				margin-top: 8rpx;
				margin-right: 24rpx;
				color: #BEA077;
			}
		}
	}
	.types {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100vh;
		// #ifdef MP-WEIXIN || APP-PLUS
		height: 100vh;
		// #endif
		// #ifdef H5
		height: 92.8vh;
		// #endif
		.mask {
			float: left;
			background-color: #000000;
			opacity: 0.26;
			width: 222rpx;
			height: 100%;
		}
		.types_box {
			float: left;
			background-color: #FFFFFF;
			width: 528rpx;
			height: 100%;
			.box_title {
				width: 100%;
				height: 110rpx;
				border-bottom: 1rpx solid #E8E8E8;
				text {
					position: absolute;
					font-size: 28rpx;
					top: 30rpx;
					margin-left: 40rpx;
				}
				image {
					position: absolute;
					top: 38rpx;
					width: 20rpx;
					height: 22rpx;
					margin-left: 104rpx;
				}
			}
			.box_content {
				margin: 0 auto;
				margin-top: 30rpx;
				width: 468rpx;
				height: 50rpx;
				.item {
					float: left;
					margin-top: 26rpx;
					.title {
						font-weight: 500;
						font-size: 24rpx;
						margin-bottom: 20rpx;
					}
					.btn {
						float: left;
						background-color: #E8E8E8;
						color: #808080;
						font-size: 24rpx;
						width: 136rpx;
						height: 44rpx;
						line-height: 44rpx;
						border-radius: 4rpx;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						text-align: center;
					}
					.curr {
						background-color: #BEA077;
						font-weight: 600;
						color: #FFFFFF;
					}
				}
				.item:nth-child(1) {
					margin-top: 0rpx;
				}
			}
			.operation {
				float: left;
				margin-top: 40rpx;
				view {
					float: left;
					width: 216rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 4rpx;
					font-size: 24rpx;
					font-weight: 500;
					text-align: center;
				}
				.reset {
					background-color: #F1F1F1;
					color: #808080;
					margin-left: 30rpx;
				}
				.submit {
					background-color: #BEA077;
					color: #FFFFFF;
					margin-left: 16rpx;
				}
			}
		}
	}
</style>
