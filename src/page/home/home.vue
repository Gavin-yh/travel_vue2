<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-list-bottom></home-list-bottom>
    </div>
</template>
<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcon from './components/icon.vue'
import homeListBottom from './components/map-list-bottom.vue'

export default {
    name : "homepage",
    components: {
        homeHeader,
        homeSwiper,
        homeIcon,
        homeListBottom

    }
}
</script>
