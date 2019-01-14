import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import '../src/assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import router from '../router/router.js'
// import mock from '../mock/mock'


fastclick.attach(document.body)



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')