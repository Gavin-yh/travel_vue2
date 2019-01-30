<template>
    <div>
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from "axios"

import detailHeader from "./components/detail-header.vue"
export default {
    name: "Detail",
    components: {
       detailHeader 
    },
    computed: {
       ...mapState ({
           viewName: state => state.viewName
       }) 
    },
    created (){
        axios.get('/api/gallary.json')
            .then(res => {
            })
    }
}
</script>

<style lang="stylus" scoped>

</style>
