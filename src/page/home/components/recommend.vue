<template>
    <div class="recom-wrap">
        <div class="recom-title">
            <img class="title-img" src = "http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
            <span class="title">猜你喜欢</span>
        </div>
        <ul>
            <li  class="recom-content" v-for = "item of imgUrl" :key = "item.id">
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
    data(){
        return {
            imgUrl:[{
                id : "001",
                url : "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
                name : "故宫",
                comment :"343046条评论",
                local:"城东区"
            },{
                id : "002",
                url : "http://img1.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_200x200_912ce9f4.jpg",
                name : "鸟巢",
                comment :"343046条评论",
                local:"奥林匹克公园内"
            },{
                id : "003",
                url : "http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_200x200_595cfa1d.jpg",
                name : "金隅凤山温泉",
                comment :"343046条评论",
                local:"昌平区"
            },{
                id : "004",
                url : "http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                name : "北京欢乐谷",
                comment :"343046条评论",
                local:"朝阳区"
            },{
                id : "005",
                url : "http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg",
                name : "故宫春晖园温泉度假村",
                comment :"343046条评论",
                local:"顺义区"
            },{
                id : "006",
                url : "http://img1.qunarzz.com/sight/p0/201303/04/50b65ba27d711f92c8d65eac.jpg_200x200_633f68b7.jpg",
                name : "太平洋海底世界",
                comment :"343046条评论",
                local:"昌平区"
            },{
                id : "007",
                url : "http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg",
                name : "八达岭长城",
                comment :"343046条评论",
                local:"海淀区"
            },{
                id : "008",
                url : "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg",
                name : "北京海洋馆",
                comment :"343046条评论",
                local:"延庆县"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/mixin.styl'
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
            display: flex
            padding: .1rem 0 .2rem .3rem 
            border-bottom: 1px solid #eee
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