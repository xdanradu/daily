function storage(){

    this.set=function(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    this.get=function(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
    
}
