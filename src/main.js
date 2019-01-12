import Vue from 'vue'
import App from './App.vue'
import '../src/assets/styles/reset.css'


// import mock from '../mock/mock'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')