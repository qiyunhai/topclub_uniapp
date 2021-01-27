// 请求api地址
var apiUrl = 'http://test.bjtopclub.com';

// 发起请求
function request(url, data, post_get, is_login) {
	return new Promise((resolve, reject) => {
		if(is_login) {
			this.isLogin();
			var header = post_get ? {
				'content-type': 'application/x-www-form-urlencoded',
				'access-token': uni.getStorageSync('token')
			} : {
				'content-type': 'application/json',
				'access-token': uni.getStorageSync('token')
			};
		} else {
			var header = post_get ? {
				'content-type': 'application/x-www-form-urlencoded'
			} : {
				'content-type': 'application/json'
			};
		}
		uni.request({
			url: this.apiUrl + url,
			method: post_get || "GET",
			data: data || {},
			header: header,
			success: (res) => {
				resolve(res)
			},
			fail: (res) => {
				uni.showToast({
					title: '网络错误',
					icon: 'loading'
				})
				reject(res)
			}
		})
	})
}

// 判断是否登录
function isLogin()
{
	if(!uni.getStorageSync('token') || uni.getStorageSync('token') == '') {
		console.log('请先登录')
		return;
	}
}

module.exports = {
	apiUrl: apiUrl,
	request: request,
	isLogin: isLogin
}