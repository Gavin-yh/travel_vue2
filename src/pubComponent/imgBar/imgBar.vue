<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-head">
                <div @click = "hidden" class="icon iconfont">&#xe64a;</div>
                <div class="title">景区图片</div>
            </div>
            <ul class="wrapper-img">
                <li @click = "showGallary(index)" v-for = "(item,index) of url" :key = "index" class="img-cont">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>
        <gallary :index = "index" @changeImgShow = "changeImgShow" :url = "url" v-if = "showImg"></gallary>
    </div>
</template>

<script>
import gallary from "../gallary/gallary"
export default {
    name: "imgBar",
    props: {
        paramsId: Number
    },
    components: {
        gallary
    },
    data (){
        return {
            url: [
                "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg",
                "http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg",
                "http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg",
                "http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png",
                "http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg",
                "http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_350x240_8571d9ed.jpg",
                "http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg"
            ],
            showImg: false,
            index: 0
        }
    },
    methods: {
        hidden (){
            this.$emit('hidden')
        },
        showGallary (index){
            this.showImg = true
            this.index = index
        },
        changeImgShow (){
            this.showImg = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .wrapper-head
        width 100%
        height .8rem
        display flex
        line-height .8rem
        background #ffffff
        position absolute
        top 0
        .icon
            width .8rem
            font-size .72rem
        .title
            flex-grow 1
            font-size .32rem
            color #333
            ellipsis()
            text-align center
            margin-right .8rem
    .wrapper-img
        position absolute
        top .8rem
        left 0
        bottom 0
        right 0
        background #eee
        padding-top .2rem
        overflow scroll
        .img-cont
            display inline-block
            padding .1rem .1rem
            width 50%
            box-sizing border-box
            img 
                width 100%
</style>