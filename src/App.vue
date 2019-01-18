<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import homepage from './page/home/home.vue'
export default {
    name :"app",
    components: {
        homepage
    }
}
</script>
<style lang="stylus" scoped>
    #app
        background #f5f5f5
        overflow-x hidden
</style>