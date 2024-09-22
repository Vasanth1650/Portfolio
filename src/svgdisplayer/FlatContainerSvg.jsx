import React, { useEffect, useRef, useState } from 'react'
import FlatContainerManipulator from './FlatContainerManipulator';
import SvgReader from '../Library/SvgReader';

function FlatContainerSvg() {
    const svgRef = useRef(null);
    const[polyLine,setPolyLine] = useState([])
    const [polyGon,setPolyGon] = useState([])

    function helper(){
        if(polyLine){
            return polyLine
        }
    }

    useEffect(() => {
        setPolyLine(SvgReader.reader(svgRef))
    }, []);

    return (
        <div className='w-screen h-screen bg-gray-100'>
            <div className='flex'>
                
                {polyLine.length==0 && 
                <svg ref={svgRef} className='ml-32 mt-28' version="1.0" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" width="908px" height="437px" viewBox="100 100 716 1000">
                    <g id="blender_frame_80">
                        <g id="blender_object_GPencil">
                            {/* <g id="Plane_Fills">
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,467.185303 498.030029,467.185303 498.030029,327.845154 218.754028,327.845154" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,327.845154 498.030029,327.845154 498.030029,187.984253 218.754028,187.984253" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,187.984253 498.030029,187.984253 498.030029,48.635376 218.754028,48.635376" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,48.635376 498.030029,48.635376 498.030029,10.000000 218.754028,10.000000" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="498.030029,467.185303 218.754028,467.185303 218.754028,607.682068 498.030029,607.682068" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="498.030029,327.845154 498.030029,467.185303 637.675415,467.185303 637.675415,327.845154" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="644.572937,331.577698 644.572937,463.880188 706.106018,449.440063 706.106018,330.995422" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,467.185303 218.754028,327.845154 78.532806,327.845154 78.532806,467.185303" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="78.532806,467.185303 78.532806,327.845154 78.532806,327.845154 78.532806,467.185303" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="71.197601,463.005737 71.197601,331.627411 10.000000,331.343475 10.000000,449.229553" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="78.532806,467.185303 78.532806,327.845154 71.197601,331.627411 71.197601,463.005737" />
                                <polygon fill="#FFFFFF" stroke="none" fill-opacity="1" points="637.675415,327.845154 637.675415,467.185303 644.572937,463.880188 644.572937,331.577698" />
                            </g> */}
                            <g id="Plane_Lines">
                                <polyline id="leftLargeLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="218.754028,10.000000 218.754028,48.635376 218.754028,187.984253 218.754028,327.845154 218.754028,467.185303 218.754028,607.682068" />//left larger line
                                <polyline id="wingBottomLine" stroke="#0000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="10.000000,449.229553 71.197601,463.005737 78.532806,467.185303 78.532806,467.185303 218.754028,467.185303 498.030029,467.185303 637.675415,467.185303 644.572937,463.880188 706.106018,449.440063" />//wing bottom long line
                                <polyline id="rightLargeLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="498.030029,607.682068 498.030029,467.185303 498.030029,327.845154 498.030029,187.984253 498.030029,48.635376 498.030029,10.000000" />//right larger line
                                <polyline id="wingTopLine" stroke="#0000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="706.106018,330.995422 644.572937,331.577698 637.675415,327.845154 498.030029,327.845154 218.754028,327.845154 78.532806,327.845154 78.532806,327.845154 71.197601,331.627411 10.000000,331.343475" />//winf top long line
                                <polyline id="topthirdLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="498.030029,187.984253 218.754028,187.984253" />//Top 3rd line
                                <polyline id="topsecondLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="498.030029,48.635376 218.754028,48.635376" />//Top Second Line
                                <polyline id="topfirstLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="498.030029,10.000000 218.754028,10.000000" />//Top first Line
                                <polyline id="bottomfirstLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="218.754028,607.682068 498.030029,607.682068" />//Bottom First Line
                                <polyline id="rightWingThirdLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="637.675415,467.185303 637.675415,327.845154" />//rightwingthirdline
                                <polyline id="rightWingFirstLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="706.106018,449.440063 706.106018,330.995422" />
                                <polyline id="leftWingThirdLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="78.532806,327.845154 78.532806,467.185303" />
                                <polyline id="leftWingFirstLine" stroke="#FF0000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="10.000000,331.343475 10.000000,449.229553" />
                                <polyline id="leftWingSecondLine" stroke="#0000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="71.197601,331.627411 71.197601,463.005737" />
                                <polyline id="rightWingSecondLine" stroke="#0000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="644.572937,463.880188 644.572937,331.577698" />
                            </g>
                        </g>
                    </g>
                </svg>}


            </div>
            {polyLine!==null &&
            <FlatContainerManipulator arr={polyGon} polylining={polyLine}/>}
        </div>
    )
}

export default FlatContainerSvg