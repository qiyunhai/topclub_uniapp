// 请求api地址
var apiUrl = 'http://www.topclub.com';

/**
 * 发起请求
 * @param {String} url (api地址)
 * @param {Object} data (请求数据)
 * @param {String} post_get (请求类型)
 * @param {Bool} is_login (是否需要登录)
 */
function request(url, data, post_get, is_login) {
	return new Promise((resolve, reject) => {
		// 判断是否在登录的条件下执行
		if(is_login) {
			// 需要登录，验证登录
			this.isLogin();
			
			var header = post_get ? {
				'content-type': 'application/x-www-form-urlencoded',
				'access-token': uni.getStorageSync('token')
			} : {
				'content-type': 'application/json',
				'access-token': uni.getStorageSync('token')
			};
		} else {
			// 无需登录
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
				console.log(res)
				reject(res)
			}
		})
	})
}

// 判断是否登录
function isLogin()
{
	if(!uni.getStorageSync('token') || uni.getStorageSync('token') == '') {
		uni.showToast({
			title:"请先登录",
			icon:"none"
		})
		
		var interval = setInterval(function(){
			uni.switchTab({
				url: '/pages/my/my'
			})
			clearInterval(interval)
		}, 800)
		
		return false;
	} else {
		return true;
	}
}


module.exports = {
	apiUrl: apiUrl,
	request: request,
	isLogin: isLogin
}