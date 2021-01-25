<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		devServer: {
			disableHostCheck: true
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* 自定义checked */
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
