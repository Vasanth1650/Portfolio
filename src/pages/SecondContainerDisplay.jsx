import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import FlatContainerAd from '../models/FlatContainerAd'
import SvgReader from '../Library/SvgReader'
import FlatContainerManipulator from '../svgdisplayer/FlatContainerManipulator'
import WidthAlter from '../Library/WidthAlter'
import LengthAlter from '../Library/LengthAlter'
import FlatContainer from '../models/FlatContainer'
import DimensionFinder from '../Library/DimensionFinder'
import HeightAlter from '../Library/HeightAlter'
import DynamicAlter from '../Library/DynamicAlter'
import InputController from '../controller/InputController'
import HeightAlterRef from '../refactors/HeightAlterRef'

function SecondContainerDisplay() {
    const [polyGon, setPolyGon] = useState([])
    const [polyLine, setPolyLine] = useState([])
    const [length, setLength] = useState(0)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const svgRef = useRef(null);
    const [lengthDuplicate, setLengthDuplicate] = useState(0)
    const [widthDuplicate, setWidthDuplicate] = useState(0)
    const [heightDuplicate, setHeightDuplicate] = useState(0)

    useEffect(() => {
        let value = SvgReader.reader(svgRef)
        setPolyLine(value)

    }, []);

    useEffect(() => {
        if (polyLine && polyLine.length > 0) {
            alters();
        }
    }, [polyLine]);

    function alters() {
        let value = DimensionFinder.calculate(polyLine);
        setLength(DimensionFinder.millimeter(value).toFixed(4));
        setLengthDuplicate(DimensionFinder.millimeter(value).toFixed(4))

        let result = DimensionFinder.calculateWidth(polyLine);
        setWidth(DimensionFinder.millimeter(result).toFixed(4));
        setWidthDuplicate(DimensionFinder.millimeter(result).toFixed(4))

        let resultHeight = DimensionFinder.calculateHeight(polyLine);
        setHeight(DimensionFinder.millimeter(resultHeight).toFixed(4))
        setHeightDuplicate(DimensionFinder.millimeter(resultHeight).toFixed(4))
    }

    const handleWidthIncrease = () => {
        const updatedPolyLine = WidthAlter.increaseWidth(polyLine, true);
        setPolyLine(updatedPolyLine);
    };

    const handleWidthDecrease = () => {
        const updatedPolyLine = WidthAlter.increaseWidth(polyLine, false);
        setPolyLine(updatedPolyLine);
    };

    const handleLengthIncrease = () => {
        const updatedPolyLine = LengthAlter.lengthIncrease(polyLine, true);
        setPolyLine(updatedPolyLine);
    };

    const handleLengthDecrease = () => {
        const updatedPolyLine = LengthAlter.lengthIncrease(polyLine, false);
        setPolyLine(updatedPolyLine);
    };

    const handleHeightIncrease = () => {
        const updatedPolyLine = HeightAlter.lengthIncrease(polyLine, true);
        setPolyLine(updatedPolyLine);
    };

    const handleHeightDecrease = () => {
        const updatedPolyLine = HeightAlter.lengthIncrease(polyLine, false);
        setPolyLine(updatedPolyLine);
    };


    const handleLengthController = () => {
        let resultLength = InputController.caller(length, lengthDuplicate, 68, 128)
        let resultAlter = DynamicAlter.calculate(length, lengthDuplicate)
        for (let i = 1; i < resultAlter; i++) {
            if (resultLength == "increase") {
                handleLengthIncrease()
                setLength(lengthDuplicate)
            } else if (resultLength == "decrease") {
                handleLengthDecrease()
                setLength(lengthDuplicate)
            } else {
                setLengthDuplicate(length)
            }
        }

        let resultWidth = InputController.caller(width, widthDuplicate, 28, 80)
        let resultWidthAlter = DynamicAlter.calculate(width, widthDuplicate)
        for (let i = 1; i < resultWidthAlter; i++) {
            if (resultWidth == "increase") {
                handleWidthIncrease()
                setWidth(widthDuplicate)
            } else if (resultWidth == "decrease") {
                handleWidthDecrease()
                setWidth(widthDuplicate)
            } else {
                setWidthDuplicate(width)
            }
        }

        let resultHeight = InputController.caller(height, heightDuplicate, 35, 56)
        let resultHeightAlter = DynamicAlter.calculate(height, heightDuplicate)
        for (let i = 1; i < resultHeightAlter; i++) {
            if (resultHeight == "increase") {
                handleHeightIncrease()
                setHeight(heightDuplicate)
            } else if (resultHeight == "decrease") {
                handleHeightDecrease()
                setHeight(heightDuplicate)
            } else {
                setHeightDuplicate(height)
            }
        }

    };


    return (
        <div className='w-full h-screen flex bg-gray-100 overflow-y-hidden'>
            <Navbar />
            <div className='flex'>

                <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>

                <aside id="cta-button-sidebar" style={{ marginTop: "88px", marginLeft: "15px" }} class="fixed left-0 z-40 w-80 h-4/5 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div style={{ borderRadius: "30px" }} class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <div style={{ cursor: "pointer" }} class="flex items-center p-1 text-gray-900 rounded-lg dark:text-white group">

                            <span class="ms-1 font-bold">Custom Size 𝓲</span>
                            <div class="flex bg-gray-200 rounded-full p-1 w-24 ml-16">
                                <div id="mm" class="w-1/2 text-center py-0 rounded-full bg-purple-100 text-black font-semibold cursor-pointer">
                                    mm
                                </div>
                                <div id="in" class="w-1/2 text-center py-0 rounded-full text-gray-500 cursor-pointer">
                                    in
                                </div>
                            </div>
                        </div>
                        {/* <div className='mt-5'>
                            <div className='flex'>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xs font-light text-gray-900 dark:text-white">Length</label>
                                    <input onChange={(e) => setLengthDuplicate(e.target.value)} value={lengthDuplicate} type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div className='pl-2'>
                                    <label for="first_name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Width</label>
                                    <input onChange={(e) => setWidthDuplicate(e.target.value)} value={widthDuplicate} type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>

                            </div>
                            <div className='flex'>
                                <div className='w-36 mt-2'>
                                    <label for="first_name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Height</label>
                                    <input onChange={(e) => setHeightDuplicate(e.target.value)} value={heightDuplicate} type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <button class="ml-5 bg-transparent hover:bg-gray-100 text-black-700 font-semibold hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded mt-10" onClick={handleLengthController}>Load</button>
                            </div>



                        </div> */}

                        <div class="ms-1 font-bold mt-5 p-1">Manual Loader ᥫ᭡</div>
                        <div className='flex mt-5 text-xs'>
                            {/* <div>
                                <button onClick={() => handleLengthIncrease()} class=" bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded">🔺 Length</button>
                                <button onClick={() => handleLengthDecrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 mt-2 border border-black-500 hover:border-transparent rounded">🔻 Length</button>
                            </div> */}
                            <div>
                                <button onClick={() => handleWidthIncrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded">🔺 Width</button>
                                <button onClick={() => handleWidthDecrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 mt-2 border border-black-500 hover:border-transparent rounded">🔻 Width</button>
                            </div>
                            {/* <div>
                                <button onClick={() => handleHeightIncrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded">🔺 Height</button>
                                <button onClick={() => handleHeightDecrease()} class="bg-transparent hhover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 mt-2 border border-black-500 hover:border-transparent rounded">🔻 Height</button>
                            </div> */}
                        </div>



                    </div>
                </aside>
                <div className='ml-96 mt-24 absolute text-xs flex'>
                    <div><span style={{ color: "red" }}>────</span> Crease</div>
                    <div className='ml-5'><span style={{ color: "blue" }}>────</span> Bleed</div>
                    <div className='ml-5'>──── Trim</div>
                </div>
                <div className='ml-96 mt-32 absolute text-xs font-thin'>
                    <div className='font-thin'>Manufacture Dimensions</div>
                    <div>{length} x {width} x {height}</div>
                </div>

                {polyLine.length == 0 &&


                <svg ref={svgRef} className='ml-36 mt-28' version="1.0" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" width="908px" height="437px" viewBox="0 0 716 1000">
                    <g id="blender_frame_1">
                        <g id="blender_object_GPencil">

                            <g id="Plane_Lines">

                                <polyline id="leftLargeLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,10.000000 190.519714,16.239014 190.519714,96.827454 190.519714,100.835022 190.519714,244.726135 190.519714,248.311157 190.519714,329.005310 190.519714,333.152283 190.519714,337.672974 190.519714,470.243225 190.519714,477.119995 190.519653,551.390442 190.519653,565.033752" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="10.000000,244.726135 190.519714,244.726135 393.611084,244.726135 575.274902,244.726135" />
                                <polyline id="rightLargeLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="393.606995,565.024780 393.609009,551.385925 393.611084,477.119995 393.611084,470.243225 393.611084,337.672974 393.611084,333.152283 393.611084,329.005310 393.611084,248.311218 393.611084,244.726135 393.611084,100.835083 393.611084,96.827454 393.611084,16.239014 393.611084,10.000000" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="393.611084,10.000000 190.519714,10.000000" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="10.000000,100.835022 10.000000,244.726135" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="393.611084,16.239014 190.519714,16.239014 138.627502,16.238953" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="393.611084,96.827454 398.897766,96.827454 447.436829,96.827454" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="138.627502,96.827454 190.519714,96.827454" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="138.627502,16.238953 138.627502,96.827454" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="447.436829,96.827454 447.436829,16.239014" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="393.611084,16.239014 398.897766,16.239014 447.436829,16.239014" />
                                <polyline id="bottomfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="133.863342,477.119995 136.181335,551.390442 151.686340,565.033752 190.519653,565.033752 393.606995,565.024780 433.293274,564.943848 450.587036,551.384277 450.754272,477.119995" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="575.274902,244.726135 575.274902,100.835083" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,100.835022 393.611084,100.835083 575.274902,100.835083" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,100.835022 10.000000,100.835022" />

                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="137.377502,248.311157 137.377502,329.005310" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,329.005310 190.519714,329.005310 137.377502,329.005310" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,329.005310 393.611084,329.005310 446.836731,329.005310" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="446.836731,329.005310 446.836731,248.311218" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,248.311157 393.611084,248.311218 446.836731,248.311218" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,248.311157 190.519714,248.311157 137.377502,248.311157" />
                                <polyline id="bottomfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="450.754272,477.119995 393.611084,477.119995" />
                                <polyline id="rightWingFirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="432.945679,470.243225 432.945679,337.672974" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,337.672974 393.611084,337.672974 432.945679,337.672974" />
                                <polyline id="topfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,337.672974 150.520142,337.672974" />
                                <polyline id="leftWingFirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="150.520142,337.672974 150.520142,470.243225" />
                                <polyline id="bottomfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,470.243225 150.520142,470.243225" />
                                <polyline id="bottomfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,470.243225 393.611084,470.243225 432.945679,470.243225" />
                                <polyline id="bottomfirstLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="190.519714,477.119995 133.863342,477.119995" />

                            </g>
                        </g>
                    </g>
                </svg>}




                {polyLine !== null &&
                    <FlatContainerManipulator arr={polyGon} polylining={polyLine} width={widthDuplicate} height={heightDuplicate} length={lengthDuplicate} />}
                <FlatContainer />
                <FlatContainerAd />
            </div>
        </div>

    )
}
//height<=length
export default SecondContainerDisplay