class DynamicAlter{
    calculate(prev,current){
        let find = Math.abs(current-prev)
        let eachStep = 0.7056
        let start = 1
        let end = 1000
        while(start<=end){
            let mid = Math.floor((start+end)/2)
            let result = mid*eachStep
            if(result<find){
                start = mid+1
            }else{
                end= mid-1
            }
        }
        let result = prev+(start*0.7056)
        return start
    }
    
}

export default new DynamicAlter