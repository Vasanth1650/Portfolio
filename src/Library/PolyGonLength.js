class PolyGonLength {
    increaseWidth(polyGon, sign) {
        const finalResult = polyGon.map((poly) => {
            if (poly.id === "wingTopLine") {
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value
                    .map((domain, index) => {
                        return domain
                            .map((coordinate, i) => {
                                if (index === value.length - 1 && i === 0) {
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) - 1 : parseInt(whole) + 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if((index === 1 && i === 0)){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) + 1 : parseInt(whole) - 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if(index==0 && i==0){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) - 1 : parseInt(whole) + 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if(index==2 && i==0){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) + 1 : parseInt(whole) - 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }
                                else {
                                    return coordinate;
                                }
                            })
                            .join(",");
                    })
                    .join(" ");
                poly.points = finalResult;
                return poly;
            }else if(poly.id=="wingBottomLine"){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value
                    .map((domain, index) => {
                        return domain
                            .map((coordinate, i) => {
                                if (index === value.length - 1 && i === 0) {
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) + 1 : parseInt(whole) - 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if((index === 1 && i === 0)){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) - 1 : parseInt(whole) + 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if(index==0 && i==0){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) + 1 : parseInt(whole) - 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if(index==2 && i==0){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) - 1 : parseInt(whole) + 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }
                                else {
                                    return coordinate;
                                }
                            })
                            .join(",");
                    })
                    .join(" ");
                poly.points = finalResult;
                return poly;
            }else if(!sign && poly.id=="wingRightLine"){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value
                    .map((domain, index) => {
                        return domain
                            .map((coordinate, i) => {
                                if((index === 1 && i === 0)){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) - 1 : parseInt(whole) - 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if(index==0 && i==0){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) + 1 : parseInt(whole) - 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }
                                else {
                                    return coordinate;
                                }
                            })
                            .join(",");
                    })
                    .join(" ");
                poly.points = finalResult;
                return poly;
            }else if(!sign && poly.id=="wingLeftLine"){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value
                    .map((domain, index) => {
                        return domain
                            .map((coordinate, i) => {
                                 if((index === 1 && i === 0)){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) - 1 : parseInt(whole) + 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }else if(index==0 && i==0){
                                    let [whole, decimal] = coordinate.split(".");
                                    whole = sign ? parseInt(whole) + 1 : parseInt(whole) + 1;
                                    return decimal ? `${whole}.${decimal}` : `${whole}`;
                                }
                                else {
                                    return coordinate;
                                }
                            })
                            .join(",");
                    })
                    .join(" ");
                poly.points = finalResult;
                return poly;
            }else {
                return poly;
            }
        });
        return finalResult;
    }
}

export default new PolyGonLength();
