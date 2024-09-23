import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "../styles/Packaging.scss"
import BigAd from '../models/BigAd'
import Image from "../assets/image/Dimension.png"
import Black from "../assets/image/black.png"

function Packaging() {
    const [polyGon, setPolyGon] = useState(0)
    const [polLine, setPolyLine] = useState(0)
    const [measure, setMeasure] = useState(0)
    const [transpilers, setTranspilers] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setPolyGon(2)
            setTranspilers(1)
        }, 3000)
        setTimeout(() => {
            setPolyLine(1)
            setMeasure(1)
        }, 2000)
        setTimeout(() => {
            setPolyLine(3)
        }, 5000)
        setTimeout(() => {
            setPolyGon(3)
            setMeasure(2)
        }, 6000)
    }, [])
    const handleScroll = (e) => {
        console.log(e)
    };
    return (
        <div onScroll={(e) => handleScroll(e)} className=''>
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

            <div className='mt-20 ml-16 ' id="availableLibs">
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


            <div className='mt-20 ml-16 pb-52 ' id="screen">
                <div className='text-2xl font-bold'>React ThreeJs Engine</div>
                <div>
                    <BigAd color="white" />
                    <div style={{ marginLeft: "750px" }} className='absolute mt-10 text-2xl font-bold'>Animations</div>
                    <div style={{ marginLeft: "760px" }} className='absolute mt-24 text-sm font-thin pr-20'>We have successfully rigged the SVG dielines, enabling precise control over each frame and seamless integration with the slider, allowing for a dynamic and interactive user experience. The animation files are loaded as .glb formats, which not only enhances the visual quality but also provides advanced interactivity with mouse controls for dimensional adjustments. This setup streamlines the manipulation of frames and ensures smooth transitions, making the animations more engaging and user-friendly.</div>
                </div>
            </div>

            <div className='mt-60 ml-16 pb-52 ' id="screen">
                <div className='text-2xl font-bold'>Dimension Calculations And Algorithms</div>
                <div style={{ paddingRight: "710px", paddingLeft: "20px" }} className='absolute mt-24 text-sm font-thin pr-96'>One of the most challenging tasks is determining the precise dimensions that accurately represent the design. To achieve this, I have undergone extensive learning to master dimension calculations, particularly using the DPI (Dots Per Inch) method. The core formula involves converting inches to millimeters, where 1 inch equals 25.4 millimeters. To calculate the exact dimensions on screen, we leverage the DPI value, with 72 DPI being the standard for most displays. Therefore, to find the measurement in inches, we can directly divide the pixel dimensions by the screen’s DPI.</div>

                <img style={{ width: "630px", marginTop: "22px", marginLeft: "520px" }} src={Image} />
            </div>

            <div className='ml-16 pb-52 ' id="screen">
                <div className='text-2xl font-bold'>Coverage</div>
                <table class="comparison-table mt-10 ml-24">
                    <tr>
                        <th class="empty-cell"></th>
                        <th>Port</th>
                    </tr>
                    <tr class="comparison-table-section-header">
                        <td colspan="2">Details</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>SVG Dieline
                            <p class="comparison-table-desc">Multiple Dieline tests done and created with exact trace dimensions</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>SVG Dynamic Alter
                            <p class="comparison-table-desc">Created Transpilers with React Js</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>Rigging <p class="comparison-table-desc">Rigged the Svg for Animation frames</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>Integrate Into React ThreeJs <p class="comparison-table-desc">Integrated to React Three Js and enabled mouse moments</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>Slider Animation
                            <p class="comparison-table-desc">Animations can be controlled by slider</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>Documentation
                            <p class="comparison-table-desc">Documentation created on the site</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>SVG To Three Js Exact Dimension
                            <p class="comparison-table-desc">Not enabled bone modifer to the exact dimension changes like on svg</p></td>
                        <td>❌</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>Ad Preview for Each Material
                            <p class="comparison-table-desc">Added multiple ad preview and materials for previews</p></td>
                        <td>✅</td>
                    </tr>
                    <tr class="comparison-table-row">
                        <td>Refactor
                            <p class="comparison-table-desc">Needs Refactor for reusable code</p></td>
                        <td>❌</td>
                    </tr>

                </table>

            </div>

            

        </div>
    )
}

export default Packaging