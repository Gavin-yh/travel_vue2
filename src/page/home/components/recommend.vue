<template>
    <div class="recom-wrap">
        <div class="recom-title">
            <img class="title-img" src = "http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
            <span class="title">猜你喜欢</span>
        </div>
        <ul>
            <li  class="recom-content" v-for = "item of recomment" :key = "item.id">
                <a href="" class="re-content-wrap">
                    <div class="content-img">
                        <img :src = "item.url"/>
                    </div>
                    <div class="content-cont">
                        <p class="cont-name paddin">{{item.name}}</p>
                        <div class="cont-icon paddin">
                            <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                        </div>
                        <div class="cont-info paddin">
                            <p class="info-com">{{item.comment}}</p>
                            <p class="info-der">{{item.local}}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <div class="recom-more">
            <a href="#" class="iconfont">查看更多&#xe63f;</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"recommend",
    props:["recomment"]
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .recom-wrap
        margin-top: .2rem
        background: #fff
        width: 100%
        .recom-title
            padding: .4rem 0
            .title-img
                width: .3rem
                height: .3rem
                margin-left: .1rem
            .title
                font-size: .3rem
                color: #212121
        .recom-content
            padding: .1rem 0 .2rem .3rem 
            border-bottom: 1px solid #eee
            .re-content-wrap
                display: flex
                width: 100%
                height: 100%
                color: #000
                .content-img
                    width: 2rem
                    height: 2rem
                img 
                    width: 100%
                .content-cont
                    margin: .4rem 0 0 .3rem
                    flex-grow: 1
                    .paddin
                        padding: .1rem 0
                .cont-name
                    font-size: 20px
                    font-weight: bold
                    width 4rem
                    ellipsis()
                .cont-icon
                    color: #ffb436
                    i
                        font-size: 10px !important
                .cont-info
                    display: flex
                    .info-com
                        flex-grow 1
                    .info-der
                        width 1.5rem
                        text-align: right
                        padding-right: .2rem
                        ellipsis()
        .recom-more
            height: .6rem
            a
                display: block
                text-align:center
                font-size: .28rem
                height: .6rem
                line-height: .6rem

</style>