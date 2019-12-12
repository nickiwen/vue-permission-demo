export default {
    get UserToken(){
        return localStorage.getItem('token');
    },
    set UserToken(value){
        localStorage.setItem('token',value)
    }
}