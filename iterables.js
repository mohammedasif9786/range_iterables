let iterate={

startNum : 1,
endNum :10,
    
[Symbol.iterator](){
         let scope =this
        let countNum = this.startNum
    
    return{
    next:function (){
        if(countNum <= scope.endNum){
            return {done:false , value: countNum++}
        }
        else{
            return {done: true}
        }
    }
    
    
    
    }
    }
}

    for(i of iterate){
        console.log(i)
    }
    



