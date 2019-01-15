<template>
   <div class="weekend-hot">
      <div class="hot-title">
         <img class = "title-img" src = "http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/>
         <span class="title">本周热门榜单</span>
         <router-link class="title-link" to = "/look-bar">
            <span>全部榜单</span>
            <i class="iconfont">&#xe632;</i>
         </router-link>
      </div>
      <div class="hot-info">
         <ul class="info-wrap">
            <li class="info-wrap-item" v-for = "item of urldata" :key = "item.id">
               <img class="info-wrap-item-img" :src="item.url"/>
               <p class="dec">{{item.text}}</p>
            </li>
         </ul>
      </div>
   </div> 
</template>

<script>
export default {
   name :"weekend-h",
   data(){
      return {
         urldata:[{
            id :"001",
            url:"http://img1.qunarzz.com/sight/p0/1504/cb/cbd992d4861cbcaf.water.jpg_250x250_ff878db5.jpg",
            text:"德化九仙山"
         },{
            id :"002",
            url:"http://img1.qunarzz.com/sight/p0/1501/88/88eaebdf8c0ac671.water.jpg_250x250_ac1daa78.jpg",
            text:"清源山"
         },{
            id :"003",
            url:"http://img1.qunarzz.com/sight/p0/1701/48/48201ed52a31518ba3.img.jpg_250x250_2a09a5e9.jpg",
            text:"【泉州海西之眼】石狮世茂摩天轮"
         },{
            id :"004",
            url:"http://img1.qunarzz.com/sight/p0/1702/3f/3ffc2297280d414aa3.img.jpg_250x250_380f7aad.jpg",
            text:"泉州海丝野生动物世界"
         },{
            id :"005",
            url:"http://img1.qunarzz.com/sight/p0/1501/8b/8b1e9d648f923e68.water.jpg_250x250_1f452ec0.jpg",
            text:"南安香草世界"
         },{
            id :"006",
            url:"http://img1.qunarzz.com/sight/p0/1705/88/88e65ed5da3ff5d7a3.img.jpg_250x250_cd1a0772.jpg",
            text:"洛江石龙谷森林游乐园"
         },{
            id :"007",
            url:"http://img1.qunarzz.com/sight/p0/1411/97/1f50d2cb9964b3d0ca21b51587060961.water.jpg_250x250_4640e63d.jpg",
            text:"崇武古城"
         },{
            id :"008",
            url:"http://img1.qunarzz.com/sight/p0/1611/77/772d260d9e4903f2a3.water.jpg_250x250_1e21649f.jpg",
            text:"泉州少林寺"
         }]
      }
   }
}
</script>
<style lang="stylus" scoped>
   .weekend-hot
      width 100%
      height 0
      padding-bottom 53%
      margin-top .2rem
      background #ffffff
      .hot-title
         position relative
         padding .4rem 0
         .title-img
            width .3rem
            height .3rem
            vertical-align .001rem
            margin-left .1rem
         .title
            color #212121
            font-size .3rem
         .title-link
            color #000
            position absolute 
            top .4rem
            right 0
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
                  text-overflow ellipsis 
                  overflow hidden 
                  white-space nowrap
</style>