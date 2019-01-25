<template>
   <div class="list-wrap" ref = "wrapper"> 
       <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                    </div>
                <ul class="wrap">
                    <li class="wrap-item">北京</li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <ul class="wrap">
                    <li class="wrap-item" v-for = "item of hotcity" :key = "item.id">{{item.name}}</li>
                </ul>
            </div>
            <div class="area">
                <div :ref = "key"  v-for="(val,key) of cities" :key = "key">
                    <div class="title border-topbottom">
                        {{key}}
                    </div>
                    <ul class="grapheme">
                        <li  v-for = "res of val" :key = "res.id" class = "grap-item border-bottom">{{res.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
   name: "city-list",
   props:{
       hotcity : Array,
       cities : Object,
       graph : String
   },
   mounted(){
       this.scroll = new Bscroll(this.$refs.wrapper)
   },
   watch: {
       graph(){
           const el = this.$refs[this.graph][0]
           this.scroll.scrollToElement(el)
       }
   }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:after
            border-color #cccccc
        &:before
            border-color #cccccc
    .list-wrap
        position absolute
        top 1.7rem
        left 0
        right 0
        bottom 0
        overflow hidden
        .title
            line-height .54rem
            background #eee
            font-size .24rem
            padding 0 .2rem
        .wrap
            background #fff
            overflow hidden
            padding .2rem .4rem .2rem .4rem
            .wrap-item
                float left
                width 1.1rem
                line-height .5rem
                text-align center
                border .02rem solid #666
                margin .1rem
        .grapheme
            background #ffffff
        .border-bottom
            &:before
                border-color #cccccc
        .grap-item
            box-sizing border-box
            line-height .7rem
            padding 0 .4rem


</style>
