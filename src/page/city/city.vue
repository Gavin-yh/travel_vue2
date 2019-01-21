<template>
    <div>
        <city-header></city-header>
        <city-list></city-list>
        <city-graph></city-graph>
    </div>
</template>

<script>
import cityHeader from './component/city-header'
import cityList from './component/city-list'
import cityGraph from './component/city-graph'

export default {
    name: "city",
    components: {
        cityHeader,
        cityList,
        cityGraph
    }
}
</script>

<style lang="stylus" scoped>
</style>