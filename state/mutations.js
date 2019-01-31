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
    saveDetailData (state , url , imgName){
        console.log('s')
        state.imgUrl = url,
        state.imgLength = url.length,
        state.imgName = imgName,
        state.firstImg = url[0]
    },
    con(state){
        console.log(state.imgUrl)
    }
}