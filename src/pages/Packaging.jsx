import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "../styles/Packaging.scss"
import BigAd from '../models/BigAd'

function Packaging() {
    const [polyGon,setPolyGon] = useState(0)
    const [polLine,setPolyLine] = useState(0)
    const [measure,setMeasure] = useState(0)
    const [transpilers,setTranspilers] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setPolyGon(2)
            setTranspilers(1)
        },3000)
        setTimeout(()=>{
            setPolyLine(1)
            setMeasure(1)
        },2000)
        setTimeout(()=>{
            setPolyLine(3)
        },5000)
        setTimeout(()=>{
            setPolyGon(3)
            setMeasure(2)
        },6000)
    },[])
    const handleScroll = (e) => {
        console.log(e)
      };
    return (
        <div onScroll={(e)=>handleScroll(e)} className='pb-96'>
            <Navbar />
            <div className='mt-28 ml-16 text-2xl font-bold'>Steps Followed <span className='text-blue-700'>During The Cycle</span></div>
            <div class="main-container ml-24 mt-5">
                <div class="steps-container">
                    <div class="step completed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                        <div class="label completed">
                            Blender
                        </div>
                        <div class="icon completed">
                            <i class="far fa-map"></i>
                        </div>
                    </div>
                    <div class="line completed"></div>
                    <div class="step completed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                        <div class="label completed">
                            Javascript Transpilers
                        </div>
                        <div class="icon completed">
                            <i class="far fa-map"></i>
                        </div>
                    </div>
                    <div class="line completed"></div>
                    <div class="step completed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                        <div class="label completed">
                            Rigging
                        </div>
                        <div class="icon completed">
                            <i class="far fa-map"></i>
                        </div>
                    </div>
                    <div class="line completed"></div>
                    <div class="step completed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                        <div class="label completed">
                            ThreeJs
                        </div>
                        <div class="icon completed">
                            <i class="far fa-map"></i>
                        </div>
                    </div>
                    <div class="line next-step-in-progress">
                    </div>
                    <div class="step in-progress">
                        <div class="preloader"></div>
                        <div class="label loading">
                            Refactor
                        </div>
                        <div class="icon in-progress">
                            <i class="far fa-money-bill-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 ml-16 ' id="PlanningDisplay">
                <div className='text-2xl font-bold'>Things Considered During Every Step Of The Process</div>
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css' />


                <ul class="timeline">

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Svg Creation</span>
                            </div>
                            <div class="desc">Based on the PD document, the primary focus is on creating SVG dielines with precise cuts. Multiple SVG tests were conducted in <span className='text-blue-700'>Blender</span> to perfect the dielines, which were subsequently converted to Grease Pencil for SVG formatting.</div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Creation Of Transpilers.</span>
                            </div>
                            <div class="desc">Following the creation of the SVG, several adjustments were made, such as fine-tuning the strokes to meet the required specifications. 
                            When developing transpilers, it is essential to consider various scenarios. 
                            Typically, dielines comprise polygons and polylines, which must be accurately read and processed. While reading these properties, it is crucial to assign an ID before interpreting 
                            the polylines and polygons to ensure correct handling and identification during the transpilation process.</div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Origin Of Transpilers</span>
                            </div>
                            <div class="desc">I have utilized React JS as the base framework for the application. By leveraging Ref Hooks, I can access and manipulate the properties of the code effectively. This approach allows me to navigate through each line of the two key properties: polylines and polygons.
Regarding polylines, they consist of two key points along the x and y axes, which include multiple cuts and their corresponding start and end points. For polygons, there are four points—0, 1, 2, and 3—that define their shape. These points can be individually separated and modified, enabling precise adjustments and alterations as needed.</div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Custom Libraries.</span>
                            </div>
                            <div class="desc">With the creation of transpilers, manipulating these properties becomes streamlined, allowing us to use custom reusable functions to increment or decrement the points of the properties as required. The transpiler separates the point properties within each tag, and based on the previous loads, adjustments are made by increasing or decreasing the property values accordingly. These value adjustments are facilitated through the ID tags assigned during the earlier step, ensuring precise control and dynamic alteration of each property.</div>
                        </div>
                    </li>

                </ul>

            </div>

            <div className='mt-10 ml-16 ' id="availableLibs">
                <div className='text-2xl font-bold'>Available Libraries</div>
                <div className='flex space-x-56 text-2xl font-bold mt-10 text-blue-700'>
                    <div>PolyGon</div>
                    <div>PolyLine</div>
                    <div>Measuring</div>
                    <div>Transpilers</div>
                </div>
                <div className='flex space-x-84 text-3xl font-bold mt-5 text-black-700'>
                    <div className='ml-5 absolute'>{polyGon}</div>
                    <div className='ml-10'>{polLine}</div>
                    <div>{measure}</div>
                    <div>{transpilers}</div>
                </div>
            </div>


            <div className='mt-10 ml-16 pb-52 ' id="screen">
                <div className='text-2xl font-bold'>React ThreeJs Engine</div>
                <div>
                    <BigAd color="white"/>
                    <div style={{marginLeft:"750px"}} className='absolute mt-10 text-2xl font-bold'>Animations</div>
                    <div style={{marginLeft:"760px"}} className='absolute mt-24 text-sm font-thin pr-28'>We have rigged the svg dielines. So It made easy for us to control each frames and embedding those frames to the slider. The Animation files are loaded as .glb files and we have provided mouse controls over the dimensions</div>
                </div>
            </div>
        </div>
    )
}

export default Packaging