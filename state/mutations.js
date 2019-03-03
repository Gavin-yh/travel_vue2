export default {
    changeState(state,city){
        state.city = city
        try{
            localStorage.city = city
        }catch (e){}
    },
    changeViewName (state,name){
        try{
            localStorage.viewName = name
        }catch(e){}
        state.viewName = name
    },
    saveDetailData (state , params){
        console.log(params)
        state.imgUrl = params.url,
        state.imgLength = params.url.length,
        state.imgName = params.name,
        state.firstImg = params.url[0]

        state.recom = params.recom
    },
    // ,测试用的 查看imgUrl有没有被存入
    // con(state){
    //     console.log(state.imgUrl)
    // }


    //改变路由，对路由进行缓存 (用router.go()  来进行回退。更方便,但是介于 很多地方 :to = ""绑定的路由 go 实现不了)
    chagefromRouteState (state,params){
        console.log("chagefromRouteState")
        state.detailRouteState = params
        try{
            localStorage.detailRouteState = params
        }catch{}
        console.log(state.detailRouteState)
    }
}