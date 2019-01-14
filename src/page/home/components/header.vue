<template>
    <div class="header">
        <router-link to = "/back" class = "back iconfont">&#xe64a;</router-link>
        <div class = "map">
            <a  href = "#" class = "map-link">
                <i class = " select iconfont">&#xe650;</i>
                <span class = "map-link-info">请输入城市/景点/游玩主题</span>
            </a>
        </div>
        <div class = "localtion">
            <router-link to = "/localtion" href="#">
                <span>北京</span>
                <i class="localtion-icon iconfont">&#xe625;</i>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name :"headerpage",
    components:{

    }
}
</script>
<style scoped lang="stylus">
    .header
        height .84rem
        width 100%
        background-color #00BCD4
        display flex
        line-height .8rem
        .back
            display line-block
            color #ffffff
            font-size .7rem
            width 0.8rem
            heigth .84rem
            line-height .84rem
        .map
            position relative
            height .6rem
            margin .14rem 0
            box-sizing border-box
            flex-grow 1
            .map-link
                display inline-block
                width 100%
                height 100%
                border-radius 0.06rem
                background-color #ffffff
                color #cccccc
                .select
                    display inline-block
                    height .6rem
                    width .5rem
                    font-size .5rem
                    position absolute
                    left .1rem
                    line-height .6rem
                .map-link-info
                    position: absolute;
                    left: .7rem;
                    top: 0;
                    width 3.6rem
                    height .6rem
                    line-height .6rem
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
        .localtion
            width 1.3rem
            a
                color #fff
                padding 0 .2rem
                .localtion-icon
                    font-size .5rem
                    vertical-align middle
        

</style>