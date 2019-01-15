<template>
    <div id="app">
        <homeheader></homeheader>
        <homeswiper></homeswiper>
        <homeicon></homeicon>
    </div>
</template>
<script>
import homeheader from './components/header.vue'
import homeswiper from './components/swiper.vue'
import homeicon from './components/icon.vue'
export default {
    name : "homepage",
    components: {
        homeheader,
        homeswiper,
        homeicon

    }
}
</script>
<style>
</style>