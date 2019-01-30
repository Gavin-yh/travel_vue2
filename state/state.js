
let Default = "上海"

try{
    if(localStorage.city){
        Default = localStorage.city
    }
}catch (e){}

export default  {
    city: Default,
    viewName:""
}