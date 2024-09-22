import React, { useEffect, useRef, useState } from 'react'
import WidthAlter from '../Library/WidthAlter';
import LengthAlter from '../Library/LengthAlter';

function FlatContainerManipulator({ arr, polylining, width, height, length }) {
    const [polyGon, setPolyGon] = useState([])
    const [polyLines, setPolyLines] = useState([])
    useEffect(() => {
        setPolyLines(polylining);
        setPolyGon(arr)
    }, [polylining]);

    return (
        <div >

            <svg className='ml-32 mt-20 pt-10' version="1.0" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" width="988px" height="567px" viewBox="-100 -20 800 900">
                <g id="blender_frame_80">
                    <g id="blender_object_GPencil">
                    <g id="Plane_Fills">
                                {polyGon && polyGon.map((poly,index)=>
                                    <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" key={index} points={poly.points} />
                                )}
                                
   
                            </g>

                        <g id="Plane_Lines">
                            <text id="dynamicText" x="328" y="260" fill="black" font-size="20">
                                {height}
                            </text>

                            <text id="dynamicText" x="400" y="400" fill="black" font-size="20">
                                {width}
                            </text>
                            <text id="dynamicText" x="318" y="443" fill="black" font-size="20">
                                {length}
                            </text>
                            {polyLines && polyLines.map((polyline, index) => (
                                <>



                                    <polyline

                                        key={index}
                                        stroke={polyline.stoke}
                                        strokeOpacity="1"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth="1"
                                        points={polyline.points}
                                    /></>
                            ))}
                        </g>
                    </g>
                </g>
            </svg>
        </div >
    )
}

export default FlatContainerManipulator