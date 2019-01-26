import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
    state: {
        city :"上海"
    },
    mutations: {
        changeState(state,city){
            state.city = city
        }
    }
})