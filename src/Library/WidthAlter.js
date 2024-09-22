class WidthAlter{

    increaseWidth(polyLines,sign){
        const finalResult = polyLines.map((poly)=>{
            if(poly.id=="wingTopLine" ||poly.id=="topthirdLine") {
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
            }else if(poly.id=="topfirstLine" || poly.id=="topsecondLine"){
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
            }else if(poly.id=="wingBottomLine"){
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
            }else if(poly.id=="rightWingThirdLine"||poly.id=="rightWingFirstLine" ||
                poly.id=="rightWingSecondLine" 
            ){
                const value = poly.points.split(" ").map((e) => e.split(",")); 
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i == 0) { 
                            if(index==1){
                                let [whole, decimal] = domain.toString().split('.');
                                whole =sign==true ? parseInt(whole) +1 : parseInt(whole)-1; 
                                return decimal ? `${whole}.${decimal}` : `${whole}`; 
                            }else{
                                return domain
                            }
                            
                        }else if(i==1){
                            if(index==1){
                                let [whole, decimal] = domain.toString().split('.');
                                whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1; 
                                return decimal ? `${whole}.${decimal}` : `${whole}`; 
                            }else{
                                return domain
                            }
                        } else {
                            return domain
                            
                        }
                    }).join(","); 
                }).join(" "); 
                poly["points"] = result
                return poly
            }else if( poly.id=="leftWingThirdLine" || poly.id=="leftWingFirstLine" || poly.id=="leftWingSecondLine" ){
                const value = poly.points.split(" ").map((e) => e.split(",")); 
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i == 0) { 
                            if(index==1){
                                let [whole, decimal] = domain.toString().split('.');
                                whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1; 
                                return decimal ? `${whole}.${decimal}` : `${whole}`; 
                            }else{
                                return domain
                            }
                            
                        }else if(i==1){
                            if(index==1){
                                let [whole, decimal] = domain.toString().split('.');
                                whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1; 
                                return decimal ? `${whole}.${decimal}` : `${whole}`; 
                            }else{
                                return domain
                            }
                        } else {
                            return domain
                            
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
                        }else if(index==e.length-1){
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
            }else if(poly.id=="heightArrowTBottom"){
                const value = poly.points.split(" ").map((e) => e.split(","));  
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i==0 && index==1) { 
                            let [whole, decimal] = domain.toString().split('.');
                            whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1;
                            return decimal ? `${whole}.${decimal}` : `${whole}`;
                        }else if(index==e.length-1){
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
            }else if(poly.id=="widthArrowTop"){
                const value = poly.points.split(" ").map((e) => e.split(",")); 
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                        if (i == 0) { 
                            if(index==1){
                                let [whole, decimal] = domain.toString().split('.');
                                whole = sign==true ? parseInt(whole) -1 : parseInt(whole)+1; 
                                return decimal ? `${whole}.${decimal}` : `${whole}`; 
                            }else{
                                return domain
                            }
                            
                        } else {
                            return domain
                            
                        }
                    }).join(","); 
                }).join(" "); 
                poly["points"] = result
                return poly
            }else if(poly.id=="widthArrowBottom"){
                const value = poly.points.split(" ").map((e) => e.split(",")); 
            
                const result = value.map((e,i) => {
                    return e.map((domain, index) => {
                         if(i==1){
                            if(index==1){
                                let [whole, decimal] = domain.toString().split('.');
                                whole = sign==true ? parseInt(whole) +1 : parseInt(whole)-1; 
                                return decimal ? `${whole}.${decimal}` : `${whole}`; 
                            }else{
                                return domain
                            }
                        } else {
                            return domain
                            
                        }
                    }).join(","); 
                }).join(" "); 
                poly["points"] = result
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

export default new WidthAlter