<template>
   <div class="weekend-hot">
      <div class="hot-title">
         <img class = "title-img" src = "http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/>
         <span class="title">本周热门榜单</span>
         <router-link class="title-link" to = "/hot-all-bar">
            <span>全部榜单</span>
            <i class="iconfont">&#xe632;</i>
         </router-link>
      </div>
      <div class="hot-info">
         <ul class="info-wrap">
            <router-link 
               tag = "li"
               class="info-wrap-item"
               v-for = "item of weekendHot" 
               :key = "item.id"
               :to = "'/detail/' + item.id"
            >
               <img class="info-wrap-item-img" :src="item.url"/>
               <p class="dec">{{item.text}}</p>
            </router-link>
         </ul>
      </div>
   </div> 
</template>

<script>
export default {
   name :"weekend-h",
   props:["weekendHot"]
}
</script>
<style lang="stylus" scoped>
    @import '~style/mixin.styl'
   .weekend-hot
      width 100%
      height 0
      padding-bottom 53%
      margin-top .2rem
      background #ffffff
      .hot-title
         position relative
         height .9rem
         line-height .9rem
         .title-img
            width .3rem
            height .3rem
            vertical-align .001rem
            margin-left .1rem
         .title
            color #212121
            font-size .3rem
         .title-link
            color: #000;
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            height: .9rem;
            line-height: .9rem;
      .hot-info
         width 100%
         height 40%;
         .info-wrap
            overflow-x scroll
            overflow-y hidden
            white-space nowrap
            padding-left .3rem
            .info-wrap-item
               display inline-block
               margin-right .1rem
               width 1.8rem
               .info-wrap-item-img
                  width 100%
               .dec
                  height .7rem
                  line-height .7rem
                  text-align center
                  ellipsis()
</style>