<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper :swiperdata = "headerSwiper"></home-swiper>
        <home-icon :icons = "iconList"></home-icon>
        <home-list-bottom></home-list-bottom>
        <home-wek-hot :weekendHot = "weekendHot"></home-wek-hot>
        <home-recom :recomment = "recomment"></home-recom>
        <home-wek-go :weekendGo = "weekendGo"></home-wek-go>
        <home-foot></home-foot>
    </div>
</template>
<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcon from './components/icon.vue'
import homeListBottom from './components/map-list-bottom.vue'
import homeWekHot from './components/weekend-hot.vue'
import homeRecom from './components/recommend.vue'
import homeWekGo from './components/weekend-go.vue'
import homeFoot from './components/foot-dec.vue'
import axios from 'axios'

export default {
    name : "homepage",
    data(){
        return {
            headerSwiper:[],
            iconList:[],
            weekendHot:[],
            recomment:[],
            weekendGo:[]
        }
    },
    components: {
        homeHeader,
        homeSwiper,
        homeIcon,
        homeListBottom,
        homeWekHot,
        homeRecom,
        homeWekGo,
        homeFoot
    },
    created(){
        //mockjs + axios
        axios.get('/home/data')
            .then(res => {
                let Data = res.data.data
                if(res.data.codemsg){
                    this.headerSwiper = Data.headerSwiper
                    this.iconList = Data.iconList
                    this.weekendHot = Data.weekendHot
                    this.recomment = Data.recomment
                    this.weekendGo = Data.weekendGo
                }
            })
        // webpack 中的代理proxy  + axios
        // axios.get('/api/data.json')
        //     .then(res => {
        //         console.log(res)
        //     },fa => {
        //         console.log(fa)
        //     })
    }
}
</script>
