<template>
    <div class="we-go-wrap">
        <h2 class="wrap-title">周末去哪</h2>
        <ul class="wrap">
            <li class="wrap-item" v-for = "item of imgUrl" :key = "item.id">
                <a href="" class="wrap-content">
                    <div class="wrap-img">
                        <img :src = "item.url"/>
                    </div>
                        <div class="wrap-info">
                        <p class="info-title">{{item.title}}</p>
                        <p class="info-recom">{{item.recom}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "wekgo",
    data(){
        return {
            imgUrl:[{
                id:"01",
                url:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
                title:"京城周末撒欢",
                recom:"在帝都过周末，不仅仅是城中游！"
            },{
                id:"02",
                url:"http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                title:"京城有好泉",
                recom:"细数北京温泉，温暖你的冬天"
            },{
                id:"03",
                url:"http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
                title:"京城溜娃必去",
                recom:"德智体美劳全面发展的亲子日，这些地方该去看看…"
            },{
                id:"04",
                url:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
                title:"帝都必打卡",
                recom:"来北京必去的景点非这些地方莫属"
            },{
                id:"05",
                url:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
                title:"寻找北京的皇城范儿",
                recom:"数百年的宫廷庙宇，至今依旧威严霸气"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/mixin.styl'
    .we-go-wrap
        width: 100%
        .wrap-title
            height: .8rem
            line-height: .8rem
            color: #212121
            padding-left: .26rem
        .wrap
            background: #eee
            .wrap-item
                margin-bottom: .1rem
                .wrap-content
                    display: block
                    background: #ffffff
                    width: 100%
                    .wrap-img
                        width: 100%
                        padding-bottom: 37%
                        height: 0
                        overflow: hidden
                        img 
                            width:100%
                    .wrap-info
                        padding: .14rem .2rem .2rem .2rem
                        .info-title
                            font-size: .28rem
                            color: #212121
                            padding-left: .1rem
                            line-height .48rem
                            ellipsis()
                        .info-recom
                            color: #616161
                            font-size: .24rem
                            line-height: .42rem
                            padding-left: .14rem 
                            ellipsis()
</style>