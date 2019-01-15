import router from 'vue-router'
import vue from 'vue'

vue.use(router)

import lookBar from '../src/page/lookBar/lookBar.vue'
import homepage from '../src/page/home/home.vue'
export default new router({
    mode :"history",
    routes:[{
        path:'/look-bar',
        component:lookBar
    },{
        path:'/',
        component:homepage
    }
    ]
})