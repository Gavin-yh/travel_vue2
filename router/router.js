import router from 'vue-router'
import vue from 'vue'

vue.use(router)

export default new router({
    mode :"history",
    routes:[{
        path:'/about'
    },{
        path:'/localtion'
    }
    ]
})