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
    }
    // ,测试用的 查看imgUrl有没有被存入
    // con(state){
    //     console.log(state.imgUrl)
    // }
}