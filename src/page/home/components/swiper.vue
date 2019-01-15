<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide class="swiper-img" v-for = "item of swiperdata" :key = "item.id">
                <img :src = "item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name : "homeswiper",
    data(){
        return {
            swiperOption : {
                pagination:".swiper-pagination",
                loop:true,
                autoplay: 3000,
                speed: 1000,

            },
            swiperdata:[{
                id : "01",
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg",
            },{
                id : "02",
                imgUrl :"http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg",
            }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper-wrap >>> .swiper-pagination-bullet-active
        background: red !important;
    .swiper-wrap
        width 100%
        height 0
        padding-bottom 26%
    .swiper-img img 
        width 100%
        background #eee
</style>
