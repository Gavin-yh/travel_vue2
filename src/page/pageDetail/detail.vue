<template>
    <div>
        <detail-header></detail-header>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from "axios"

import detailHeader from "./components/detail-header.vue"

export default {
    name: "Detail",
    components: {
       detailHeader
    },
    computed: {
       ...mapState ({
           viewName: state => state.viewName
       }) 
    },
    watch:{
        //监听路由，当第二次切换进入detail时，将页面至于顶部（防止出来，新进来的页面，位置停在了上次浏览的位置）
        $route(to,from){
　　　　　　 document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    },
    activated (){
        console.log('reun')
        //请求相应图片 传递给imgBar 由imgBar做一定的展示，以及再传递給画廊 gallary进行数据的渲染
        //上面的解释，是针对于用父子组件来传值的方法

        //下面的方法则是用状态管理vuex加上localStorage 进行的数据在组件间的传递
        axios.get ('/api/gallary.json')
        // axios.get('http://xpian.aliveto.cn/gallary.json')
            .then (res => {
                if (res.status === 200){
                    res.data.data.forEach(ele => {
                        // 使用localStorage 得结合 weekend-hot 导航 a ,若这里用<router-link>  页面起不到刷新的效果，则用户主动刷新页面是时
                        //由于 this.viewName 为空 则数据请求发送不了，页面空白
                       if(ele.name == (this.viewName || localStorage.viewName)){
                        //    console.log('ssss', ele.name)
                        //    console.log(ele.url)
                           console.log(ele)
                        
                           this.$store.commit('saveDetailData', {url:ele.url, name:ele.name,recom:ele.recom})
                        //传递多个参数,用对象的形式来传递
                       }
                    });

                }
            })
    }
    
}
</script>

<style lang="stylus" scoped>

</style>
