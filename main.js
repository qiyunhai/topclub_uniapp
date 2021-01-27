import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 请求api地址
Vue.prototype.apiUrl = 'http://www.topclub.com';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
