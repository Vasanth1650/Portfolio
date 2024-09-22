class OuterDimensionCreator{

    reader(svgRef){
        const svgv = svgRef.current;
        if (svgv) {
            const polylineElements = svgv.querySelectorAll('polyline')
            const extractedPolyLines = Array.from(polylineElements).map(polylineing=>{
                return {
                    points:""+polylineing.getAttribute('points'),
                    stoke:""+polylineing.getAttribute('stroke'),
                    fill:polylineing.getAttribute('fill'),
                    id:polylineing.getAttribute('id')
                }
            })
            return extractedPolyLines
        }
    }

    
    create(polyLine){

    }

}

export default new OuterDimensionCreator