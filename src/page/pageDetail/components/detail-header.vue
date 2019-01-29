<template>
    <div>
        <div @click = "changeS" class="head-wrap">
            <img class="head-img" src = "//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
            <div class="head-info">
                <div class="info-icon">
                    <span class="iconfont">&#xe653;</span>
                    8
                </div>
                <div class="info-title">故宫(AAAAA景区) </div>
            </div> 
        </div>
       <img-bar @hidden = "hidden" v-if="state"></img-bar> 
    </div>
</template>

<script>
import imgBar from 'pubCom/imgBar/imgBar'
export default {
    name: "detailHead",
    data (){
        return {
            state: false,
        }
    },
    methods: {
        changeS (){
            this.state = true
        },
        hidden (){
            this.state = false
        }
        
    },
    components:{
        imgBar
    }
}
</script>

<style lang="stylus" scoped>
    .head-wrap
        position relative
        height 0
        overflow hidden
        padding-bottom 55%
        .head-img
            width 100%
        .head-info
            position absolute 
            left .3rem 
            right 0
            bottom .3rem
            line-height .3rem
            color #ffffff
            .info-title
                font-size .36rem
                padding .2rem 0 
</style>