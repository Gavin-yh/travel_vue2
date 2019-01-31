<template>
    <div>
        <div @click = "changeS" class="head-wrap">
            <img class="head-img" :src = "firstImg" />
            <div class="head-info">
                <div class="info-icon">
                    <span class="iconfont">&#xe653;</span>
                    {{imgLength}}
                </div>
                <div class="info-title">{{imgName}}(AAAAA景区) </div>
            </div> 
        </div>
        <!-- hidden是detail-header 父级定义的函数 在img-bar里触发 去改变相应的展示 -->
       <!-- <keep-alive> -->
            <img-bar  @hidden = "hidden" v-if="state"></img-bar> 
       <!-- </keep-alive> -->
    </div>
</template>

<script>

import { mapState, mapMutations } from "vuex"

import imgBar from 'pubCom/imgBar/imgBar'
export default {
    name: "detailHead",
    data (){
        return {
            //控制img-bar 的显示和隐藏
            state: false,
            // imgName:'',
            // imgLength:0,
            // firstImg:''

        }
    },
    methods: {
        changeS (){
            this.state = true
        },
        hidden (){
            this.state = false
        },
        ...mapMutations({
            con:'con'
        })
        
    },
    computed: {
        ...mapState({
            viewName: state => state.viewName,
            imgLength: state => state.imgLength,
            imgName: state => state.imgName,
            firstImg: state => state.firstImg
        })
    },
    components:{
        imgBar
    },
    mounted (){
        this.con()
        // this.imgName = localStorage.imgName
        // this.imgLength = localStorage.imgLength
        // this.firstImg = localStorage.firstImg
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