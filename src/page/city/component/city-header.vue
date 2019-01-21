<template>
    <div class="cityheader">
        <div class="header-bar">
            <router-link to = "/" class="back-btn">
                <i class="back iconfont">&#xe64a;</i>
            </router-link>
            <h1 class="title">城市选择</h1>
        </div>
        <div class="header-search">
            <input type = "text" placeholder = "请输入城市名或拼音"/>
        </div>
    </div>
</template>

<script>

export default {
    name : "cityheader",
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .cityheader
        background #00BCD4
        .header-bar
            height .86rem
            line-height .86rem
            display flex
            .back-btn
                display inline-block
                color #ffffff
                height .8rem
                width .86rem
                text-align center
                i 
                    vertical-align middle
                .back
                    font-size .6rem
            .title
                display inline-block
                flex-grow 1
                margin-right .86rem
                text-align center 
                color #ffffff
                font-size .36rem
                ellipsis()
        .header-search
            padding .1rem .1rem
            input 
                box-sizing border-box
                width 100%
                height .62rem
                line-height .62rem
                text-align center
                padding 0 .1rem
                color #666
                border-radius .1rem
</style>
