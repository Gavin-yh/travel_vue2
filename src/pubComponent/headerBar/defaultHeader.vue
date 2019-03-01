<template>
    <div class="Dheader-wrap">
        <div class="back-icon border-right">
            <i class="iconfont icon">&#xe64a;</i>
        </div>
        <div class="content">
            榜单--{{stateCity}}
        </div>
        <div class="home-icon border-left">
            <p class="iconfont">&#xe60f;</p>
            {{stateCity}}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "defaultHeader",
    computed: {
        ...mapState({
            stateCity : state => state.city
        })
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .Dheader-wrap
        display flex
        background #000
        padding-bottom .3rem
        .back-icon
            height .84rem
            background #ffffff
            .icon
                display inline-block
                line-height .84rem
                width .84rem
                font-size .7rem
        .content
            flex-grow 1
            background #ffffff
            text-align center
            line-height .84rem
            font-size .36rem
            ellipsis()
        .home-icon
            background #ffffff
            width .84rem
            text-align center
            padding 0rem .1rem
            ellipsis()
            min-width .84rem
            p
                margin .1rem 0rem
        

</style>
