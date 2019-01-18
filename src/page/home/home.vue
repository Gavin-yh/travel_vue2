<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-list-bottom></home-list-bottom>
        <home-wek-hot></home-wek-hot>
        <home-recom></home-recom>
        <home-wek-go></home-wek-go>
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

export default {
    name : "homepage",
    components: {
        homeHeader,
        homeSwiper,
        homeIcon,
        homeListBottom,
        homeWekHot,
        homeRecom,
        homeWekGo,
        homeFoot

    }
}
</script>
