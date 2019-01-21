<template>
    <div class="wrap">
       <ul class="wrap-item">
           <li class="item">A</li>
           <li class="item">B</li>
           <li class="item">C</li>
           <li class="item">D</li>
       </ul> 
    </div>
</template>

<script>
export default {
    
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
