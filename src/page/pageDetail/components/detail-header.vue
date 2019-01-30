<template>
    <div>
        <div @click = "changeS" class="head-wrap">
            <img class="head-img" :src = "firstImg" />
            <div class="head-info">
                <div class="info-icon">
                    <span class="iconfont">&#xe653;</span>
                    8
                </div>
                <div class="info-title">故宫(AAAAA景区) </div>
            </div> 
        </div>
        <!-- hidden是detail-header 父级定义的函数 在img-bar里触发 去改变相应的展示 -->
       <img-bar :imgUrl = "imgUrl" @hidden = "hidden" v-if="state"></img-bar> 
    </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex"

import imgBar from 'pubCom/imgBar/imgBar'
export default {
    name: "detailHead",
    data (){
        return {
            //控制img-bar 的显示和隐藏
            firstImg : '',
            state: false,
            imgUrl : ''
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
    computed: {
        ...mapState({
            viewName: state => state.viewName
        })
    },
    components:{
        imgBar
    },
    activated (){
        //请求相应图片 传递给imgBar 由imgBar做一定的展示，以及再传递給画廊 gallary进行数据的渲染
        axios.get ('/api/gallary.json')
            .then (res => {
                if (res.status === 200){
                    res.data.data.forEach(ele => {
                       if(ele.name == this.viewName){
                            this.imgUrl = ele.url
                            this.firstImg = this.imgUrl[0]
                       }
                    });

                }
            })
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