<template> 
    <swiper :options="swiperOption">
        <swiper-slide class="icon-wrap" v-for = "(items,index) of pages" :key = "index">
            <div class = "icon" v-for = "item of items" :key = item.id>
                <div class="img-wrap">
                    <img :src = "item.url" />
                </div>
                <div class="info">
                    <p>{{item.text}}</p>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name :'icons',
    data(){
        return {
            iconUrl:[{
                id :"01",
                url:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                text:"景点门票"
            },{
                id:"02",
                url:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                text:"一日游"
            },{
                id:"03",
                url:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                text:"必游景点"
            },{
                id:"04",
                url:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                text:"动植物园"
            },{
                id:"05",
                url:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
                text:"城市观光"
            },{
                id:"06",
                url:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
                text:"泡温泉"
            },{
                id:"07",
                url:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                text:"野生动物园"
            },{
                id:"08",
                url:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                text:"野生动物园"
            },{
                id:"09",
                url:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                text:"野生动物园"
            }],
            swiperOption:{
                pagination:".swiper-pagination",
            }
        }
    },
    computed:{
        pages(){
            let pages = []
            this.iconUrl.forEach((item ,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
     @import '../../../assets/styles/mixin.styl'
    .icon-wrap
        padding-top .2rem
        font-size 0
        width 100%
        padding-bottom 50%
        height 0
        background #ffffff
        .icon
            background #fff
            position relative
            overflow hidden
            display inline-block
            width 25%
            height 0
            padding-bottom 25%
            .img-wrap
                position absolute 
                top 0 
                left 0 
                right 0
                bottom .6rem
                img
                    display block
                    height 80%
                    margin:0 auto
            .info
                position absolute 
                bottom 0
                font-size 16px
                height .6rem
                line-height .6rem
                padding-bottom .3rem
                width 100%
                text-align center
                p
                    width: 1.3rem
                    text-align: center
                    ellipsis()
</style>
