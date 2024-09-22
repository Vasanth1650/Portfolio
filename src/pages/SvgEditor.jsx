import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Creation from './Creation';

function SvgEditor() {
    const svgRef = useRef(null);
    const [polyGon, setPolyGon] = useState([])
    const[polyLine,setPolyLine] = useState([])
    useEffect(() => {
        const svgv = svgRef.current;
        if (svgv) {
            // Select all polygon elements within the inline SVG
            const polygonElements = svgv.querySelectorAll('polygon');
            const polylineElements = svgv.querySelectorAll('polyline')
            

            // Store the polygons in state if needed
            const extractedPolygons = Array.from(polygonElements).map(polygon => {
                return {
                    points:""+ polygon.getAttribute('points'),
                    fill: polygon.getAttribute('fill')
                };
            });
            setPolyGon(extractedPolygons)

            const extractedPolyLines = Array.from(polylineElements).map(polylineing=>{
                return {
                    points:""+polylineing.getAttribute('points'),
                    fill:polylineing.getAttribute('fill')
                }
            })

            setPolyLine(extractedPolyLines)
           
        }
    }, []);
    
   
    return (
        <div>
        {polyGon.length==0 && 
            <svg ref={svgRef} version="1.0" x="1px" y="1px" xmlns="http://www.w3.org/2000/svg" width="1091px" height="651px" viewBox="0 0 571 651">
                <rect width="100%" height="100%" fill="#f0f0f0" />
                <g id="blender_frame_1" transform="rotate(270, 285.5, 325.5)">

                    <g id="blender_frame_1">
                        <g id="blender_object_GPencil">
                            <g id="Plane_Fills">
                            
                            <polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="525.998108,211.601257, 561.835876,211.421875 543.718323,455.468689 511.907532,456.437317" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="142.329102,213.521790 275.983032,212.852783 271.420715,463.759460 143.058167,467.667847" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="141.939880,77.844727 278.416626,79.015076 275.983032,212.852783 142.329102,213.521790" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="143.058167,467.667847 271.420715,463.759460 269.274353,581.801453 143.400879,587.139587" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="148.573486,66.443787 274.976929,67.672791 278.416626,79.015076 141.939880,77.844727" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="148.203308,593.880554 264.482178,588.868469 263.645386,636.953979 159.669800,641.942017" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="10.000000,214.184204 142.329102,213.521790 143.058167,467.667847 16.103455,471.533264" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="275.983032,212.852783 402.211792,212.220886 392.778442,460.064453 271.420715,463.759460" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="402.211792,212.220886 525.998108,211.601257 511.907532,456.437317 392.778442,460.064453" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="161.133667,10.000000 276.050293,11.769226 274.976929,67.672791 148.573486,66.443787" />
				<polygon fill="#D9D9D9" stroke="none" fill-opacity="1" points="143.400879,587.139587 269.274353,581.801453 264.482178,588.868469 148.203308,593.880554" />
                            </g>    
                            <g id="Plane_Lines">
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="16.253357,470.885315 10.167969,214.000183" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="560.998596,211.252869 525.222717,211.431274 401.653503,212.047607 275.652100,212.676025 142.245544,213.341431 10.167969,214.000183" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="560.998596,211.252869 542.944397,454.882385" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="542.944397,454.882385 511.186462,455.847351 392.258606,459.460876 271.111023,463.141785 142.976624,467.034973 16.253357,470.885315" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="161.011047,10.206116 275.708740,11.969543" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="275.708740,11.969543 274.640320,67.765076 278.074158,79.087341 275.652100,212.676025 271.111023,463.141785 268.974365,580.989014 264.190857,588.044189 263.357788,636.052856" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="263.357788,636.052856 159.561584,641.022644" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="278.074158,79.087341 141.855286,77.920471" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="268.974365,580.989014 143.320312,586.307373" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="161.011047,10.206116 148.476013,66.539673 141.855286,77.920471 142.245544,213.341431 142.976624,467.034973 143.320312,586.307373 148.114380,593.037720 159.561584,641.022644" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="401.653503,212.047607 392.258606,459.460876" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="525.222717,211.431274 511.186462,455.847351" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="274.640320,67.765076 148.476013,66.539673" />
                                <polyline stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="1" points="264.190857,588.044189 148.114380,593.037720" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>}
            {polyGon.length!==null && polyLine!==null &&
                <Creation arr={polyGon} polylining={polyLine}/>
            }

        </div>
    )
}

export default SvgEditor