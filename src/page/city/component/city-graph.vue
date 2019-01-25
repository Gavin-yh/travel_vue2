<template>
    <div class="wrap">
       <ul class="wrap-item">
           <li 
            @click = "getGp" 
            :ref = "key" 
            class="item" 
            v-for = "(val , key) of cities" 
            :key = "key"
            @touchstart = "touchstart"
            @touchmove = "touchmove"
            @touchend = "touchend"
           >
             {{key}}
           </li>
       </ul> 
    </div>
</template>

<script>
export default {
   name: "city-graph",
   props: {
       cities : Object,
   },
   data (){
       return {
           touchStatus : false,
           Aposition : "",
           graphList: [],
           num : 0
       }
   },
   methods:{
       getGp (e){
           this.$emit("export",e.target.innerText)
       },
       touchstart (){
           this.touchStatus = true
           this.Aposition = this.$refs["A"][0].offsetTop
           for(let i in this.cities){
               this.graphList.push(i)
           }
       },
       touchmove (e){
           if(this.Aposition && this.touchStatus){
               const movePosition = e.touches[0].clientY
               this.num = Math.floor((movePosition - 83 - this.Aposition) / 22)
               if(this.num >= 0 || this.num < this.graphList.length){
                    this.$emit("export",this.graphList[this.num])
               }
           }
       },
       touchend (){
           this.touchStatus = false
       }
   },

}
</script>

<style lang="stylus" scoped>
    .wrap-item
        display flex
        flex-direction column 
        justify-content center
        position absolute 
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item 
            text-align center
            line-height .44rem


</style>
