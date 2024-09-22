class LengthAlter{

    lengthIncrease(polyLines,sign){
        const finalResult = polyLines.map((poly)=>{
            if(poly.id=="topthirdLine" ){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value.map((domain,index)=>{
                    return domain.map((ee,i)=>{
                        if(index==0 && i==0){
                            let [whole, decimal] = ee.toString().split('.');
                            whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(index==value.length-1 && i==0){
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
            }else if(poly.id=="topfirstLine" || poly.id=="topsecondLine" ){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value.map((domain,index)=>{
                    return domain.map((ee,i)=>{
                        if(index==0 && i==0){
                            let [whole, decimal] = ee.toString().split('.');
                            whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1;
                           
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(index==value.length-1 && i==0){
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
            }else if(poly.id=="bottomfirstLine" ){
                const value = poly.points.split(" ").map((e) => e.split(","));
                const finalResult = value.map((domain,index)=>{
                    return domain.map((ee,i)=>{
                        if(index==0 && i==0){
                            let [whole, decimal] = ee.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                           
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(index==value.length-1 && i==0){
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
            }else if (poly.id == "leftLargeLine" ) {
                const value = poly.points.split(" ").map((e) => e.split(","));  
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (index==0) { 
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if( index==0){
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
            }else if(poly.id=="rightLargeLine" ){
                const value = poly.points.split(" ").map((e) => e.split(","));  
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (index==0) { 
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(index==0){
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
            }else if(poly.id=="wingBottomArrowRight" ){
                const value = poly.points.split(" ").map((e) => e.split(","));  
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i==1 && index==0) { 
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
            }else if(poly.id=="wingBottomArrowLeft" ){
                const value = poly.points.split(" ").map((e) => e.split(","));  
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i==1 && index==0) { 
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

export default new LengthAlter