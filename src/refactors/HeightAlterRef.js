class HeightAlterRef {

    configure() {
        let topHorizontalLine = ["topthirdLine", "topfirstLine", "topsecondLine"]
        let bottomHorizontalLine = ["bottomfirstLine"]
        let leftAxisLargeVerticalLine = ["leftLargeLine"]
        let heightArrowTopFace = ["heightArrowTop"]
        let rightAxisLargeVerticalLine = ["rightLargeLine"]
        return [topHorizontalLine, bottomHorizontalLine, leftAxisLargeVerticalLine, heightArrowTopFace, rightAxisLargeVerticalLine]
    }


    configureSignIncrease() {
        let topHorizontalLine = "minus"
        let bottomHorizontalLine = "plus"
        let leftAxisLargeVerticalLine = "minus + plus"
        let heightArrowTopFace = "minus"
        let rightAxisLargeVerticalLine = "plus + minus"
        return [topHorizontalLine, bottomHorizontalLine, leftAxisLargeVerticalLine, heightArrowTopFace, rightAxisLargeVerticalLine]
    }

    indexTarget() {
        let tophorizontalLineTarget = { "InnerIndex": 1 }
        let bottomHorizontalLineTarget = { "InnerIndex": 1 }
        let leftAxisLargeVerticalLineTarget = [{ "OuterIndex": 0, "InnerIndex": 1 }, { "OuterIndex": "last", "InnerIndex": 1 }]
        let heightArrowTopFaceTarget = { "OuterIndex": 0, "InnerIndex": 1 }
        let rightAxisLargeVerticalLine = [{ "OuterIndex": 0, "InnerIndex": 1 }, { "OuterIndex": "last", "InnerIndex": 1 }]
        return [tophorizontalLineTarget, bottomHorizontalLineTarget, leftAxisLargeVerticalLineTarget, heightArrowTopFaceTarget, rightAxisLargeVerticalLine]
    }


    horizontalIncrease(polyLines, sign) {
        

    }

    

    finder(polyId,config){
        let collection = []
        console.log(config)
        config.map((e,id)=>{
            if(e.includes(polyId)){
                collection.push(id)
            }
        })
        return collection.unshift()
    }

}


export default new HeightAlterRef