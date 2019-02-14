<template>
    <div>
        <div @click = "changeS" class="head-wrap">
            <div class="head-header" :style="myOpacity" v-show="showHeader">
                <a href = "/" class = "back-btn">
                    <i class="back iconfont">&#xe64a;</i>
                </a>
                <p class="header-title">{{imgName}}</p>
            </div>
            <img class="head-img" :src = "firstImg" />
            <div class="head-info">
                <div class="info-icon">
                    <span class="iconfont">&#xe653;</span>
                    {{imgLength}}
                </div>
                <div class="info-title">{{imgName}}(AAAAA景区) </div>
            </div>
            <router-link v-show="!showHeader" to = "/" class="iconfont head-icon">&#xe64a;</router-link>
        </div>
        <!-- hidden是detail-header 父级定义的函数 在img-bar里触发 去改变相应的展示 -->
       <!-- <keep-alive> -->
        <img-bar  @hidden = "hidden" v-if="state"></img-bar>
       <!-- </keep-alive> -->
       <detail-recom v-show="!state" :recom = "recom"></detail-recom>
    </div>
</template>

<script>

import { mapState, mapMutations } from "vuex"
import detailRecom from './detail-recommend.vue'

import imgBar from 'pubCom/imgBar/imgBar'
export default {
    name: "detailHead",
    components: {
        detailRecom,
        imgBar
    },
    data (){
        return {
            //控制img-bar 的显示和隐藏
            state: false,
            // imgName:'',
            // imgLength:0,
            // firstImg:''

            //控制 head-header的显隐
            showHeader: false,
            myOpacity:{
              opacity: 0  
            }

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
            // con:'con' 测试方法（没什么作用）
        }),
        getTop (){
            const top = document.documentElement.scrollTop
            if(top > 30){
                let opacity = top / 80
                opacity = opacity > 1 ? 1 : opacity
                this.myOpacity.opacity = opacity
                this.showHeader = true
            }else{
                this.showHeader = false
            }
        }
        
    },
    computed: {
        ...mapState({
            viewName: state => state.viewName,//景点名字
            imgLength: state => state.imgLength,
            imgName: state => state.imgName,
            firstImg: state => state.firstImg,

            recom: state => state.recom
        })
    },
    activated (){
        window.addEventListener('scroll', this.getTop)
    },
    deactivated (){
        this.state = false//当切换出 detail-header时 将img-bar隐藏
        window.removeEventListener('scroll',this.getTop)
    }
    
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .head-wrap
        position relative
        height 0
        overflow hidden
        padding-bottom 55%
        .head-header
            z-index 1000
            position fixed
            top 0 
            left 0
            height .84rem
            width 100%
            background-color #00BCD4
            display flex
            line-height .8rem
            .back-btn
                display line-block
                color #ffffff
                width 0.8rem
                heigth .84rem
                line-height .9rem
                text-align center
                .back
                    font-size .6rem
            .header-title
                flex 1
                text-align center
                margin-right .8rem
                font-size .34rem
                color #ffffff
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
        .head-icon
            position absolute
            top .2rem
            left .3rem
            color #fff
            width .8rem
            line-height .8rem
            text-align center
            background #000
            opacity .8
            font-size .6rem
            border-radius 50%
        
</style>