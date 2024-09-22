class DimensionFinder{

    calculate(polyLine){
        let arr = []
        let valueResult = polyLine.map((e)=>{
            let value = e.points.split(" ").map((ee)=>ee.split(","))

            if(e.id=="leftLargeLine" || e.id=="rightLargeLine"){
                value.map((domain)=>{
                    arr.push(domain[0])
                })
            }
            let current = 0
            for(let i=0;i<arr.length && i+1<arr.length;i++){
                current+= Math.abs(arr[i]-arr[i+1])
            }
            return current
        })
        return arr[arr.length-1]-arr[0]
    }

    calculateWing(polyLine){
        let valueResult = polyLine.map((e)=>{
            let value = e.points.split(" ").map((ee)=>ee.split(","))
            let arr = []

            if(e.id=="wingBottomLine"){
                value.map((domain)=>{
                    arr.push(domain[0])
                })
            }
            let current = 0
            for(let i=0;i<arr.length && i+1<arr.length;i++){
                current+= Math.abs(arr[i]-arr[i+1])
            }
            return current
        })
        return valueResult[1]
    }

    calculateWidth(polyLine){
        let arr = []
        let valueResult = polyLine.map((e)=>{
            let value = e.points.split(" ").map((ee)=>ee.split(","))
            

            if(e.id=="wingTopLine" || e.id=="wingBottomLine"){
                value.map((domain)=>{
                    arr.push(domain[1])
                })
            }
            return arr
        })
        return arr[0]-arr[arr.length-1]
    }

    calculateHeight(polyLine){
        let arr = []
        let valueResult = polyLine.map((e)=>{
            let value = e.points.split(" ").map((ee)=>ee.split(","))
            if(e.id=="wingTopLine" || e.id=="topthirdLine"){
                arr.push(value[0][1])
            }
            return arr
        })
        let value = valueResult[0]
        return value[0]-value[1]
    }

    inches(value){
        return (value/72)
    }

    millimeter(value){
        return (value/72)*25.4
    }

}
//1 inch == 25.4 millimmmeter//72 DPI
export default new DimensionFinder