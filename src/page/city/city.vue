<template>
    <div>
        <city-header></city-header>
        <city-list :graph = "graph" :hotcity = hotcity :cities = cities></city-list>
        <city-graph @export = "childVal" :cities = cities></city-graph>
    </div>
</template>

<script>
import cityHeader from './component/city-header'
import cityList from './component/city-list'
import cityGraph from './component/city-graph'
import axios from 'axios'


export default {
    name: "city",
    data(){
        return {
            cities:{},
            hotcity:[],
            graph: ""
        }
    },
    methods: {
        childVal(val){
            if(val){
               this.graph = val 
            }
        }
    },
    components: {
        cityHeader,
        cityList,
        cityGraph
    },
    created(){
        axios.get('/city/data')
            .then(res => {
                if(res.data.codemsg){
                    // console.log(res)
                    let data = res.data.data
                    this.cities = data.cities
                    this.hotcity = data.hotcity
                }
            })
    }
}
</script>

<style lang="stylus" scoped>
</style>