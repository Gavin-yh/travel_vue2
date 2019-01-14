import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from '../router/router.js'
import '../src/assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

// import mock from '../mock/mock'


fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')