<template>
    <div>
        <city-header></city-header>
        <city-list></city-list>
    </div>
</template>

<script>
import cityHeader from './component/city-header'
import cityList from './component/city-list'

export default {
    name: "city",
    components: {
        cityHeader,
        cityList
    }
}
</script>

<style lang="stylus" scoped>
</style>