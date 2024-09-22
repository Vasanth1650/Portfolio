class HeightAlter{

    lengthIncrease(polyLines,sign){
        const finalResult = polyLines.map((poly)=>{
            if(poly.id=="topthirdLine" || poly.id=="topfirstLine" || poly.id=="topsecondLine"){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value.map((domain,index)=>{
                    return domain.map((ee,i)=>{
                        if(i==1){
                            let [whole, decimal] = ee.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else{
                            return ee
                        }
                    }).join(",")
                }).join(" ")
                poly["points"] = finalResult
                return poly
            }else if(poly.id=="bottomfirstLine"){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value.map((domain,index)=>{
                    return domain.map((ee,i)=>{
                        if(i==1){
                            let [whole, decimal] = ee.toString().split('.');
                            whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else{
                            return ee
                        }
                    }).join(",")
                }).join(" ")
                poly["points"] = finalResult
                return poly
            }else if (poly.id == "leftLargeLine") {
                const value = poly.points.split(" ").map((e) => e.split(","));  
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i==0 && index==1) { 
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(i==value.length-1 && index==1){
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        } else {
                            
                            return domain; 
                            
                        }
                    }).join(","); 
                }).join(" "); 
                poly["points"] = result
                return poly 
            }else if(poly.id=="heightArrowTop"){
                const value = poly.points.split(" ").map((e) => e.split(","));  
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i==0 && index==1) { 
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else {
                            return domain;
                        }
                    }).join(","); 
                }).join(" "); 
                poly["points"] = result
                return poly 
            }else if(poly.id=="rightLargeLine"){
                const value = poly.points.split(" ").map((e) => e.split(","));  
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i==0 && index==1) { 
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(i==value.length-1 && index==1){
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        } else {
                            return domain; 
                        }
                    }).join(","); 
                }).join(" "); 
                poly["points"] = result
                return poly
            }else{
                return poly
            }
            
        })
        
        return finalResult
    }
}

export default new HeightAlter