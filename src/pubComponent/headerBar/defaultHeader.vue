<template>
    <div class="Dheader-wrap">
        <div class="back-icon border-right">
            <router-link tag = "i" to = "/" class="iconfont icon ">&#xe64a;</router-link>
        </div>
        <div class="content">
            榜单--{{stateCity}}
        </div>
        <div class="home-icon border-left">
            <router-link @click.native = "changeState" class="city" to = "/city">
                <p class="iconfont">&#xe60f;</p>
                {{stateCity}}
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState ,mapMutations } from 'vuex'

export default {
    name: "defaultHeader",
    data (){
        return {
            flag: false
        }
    },
    computed: {
        ...mapState({
            stateCity : state => state.city
        })
    },
    methods: {
        ...mapMutations ({
             chagefromRouteState: "chagefromRouteState"
        }),
        changeState (){
           this.flag = true 
        }
    },
    watch: {
        $route (to ,from){
            if(this.flag){
                console.log('barlist')
                this.chagefromRouteState(from.path)
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .Dheader-wrap
        display flex
        background #00bcd4
        .back-icon
            height .84rem
            .icon
                display inline-block
                line-height .84rem
                width .84rem
                font-size .7rem
                color #ffffff
        .content
            flex-grow 1
            text-align center
            line-height .84rem
            font-size .36rem
            ellipsis()
            color #ffffff
        .home-icon
            width .84rem
            text-align center
            padding 0rem .1rem
            ellipsis()
            min-width .84rem
            .city
                color #ffffff
                p
                    margin .1rem 0rem
        

</style>
