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
import PolyGonWidth from '../Library/PolyGonWidth'
import PolyGonHeight from '../Library/PolyGonHeight'
import PolyGonLength from '../Library/PolyGonLength'

function FlatContainerDisplay() {
  const [polyGon, setPolyGon] = useState([])
  const [polyLine, setPolyLine] = useState([])
  const [length, setLength] = useState(0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const svgRef = useRef(null);
  const [lengthDuplicate, setLengthDuplicate] = useState(0)
  const [widthDuplicate, setWidthDuplicate] = useState(0)
  const [heightDuplicate, setHeightDuplicate] = useState(0)
  const [option, setOption] = useState("mm")
  const [color,setColor] = useState("white")

  useEffect(() => {
    let value = SvgReader.reader(svgRef)
    setPolyLine(value)
    let result = SvgReader.polygonReader(svgRef)
    setPolyGon(result)

  }, []);

  useEffect(() => {
    if (polyLine && polyLine.length > 0) {
      alters();
    }
  }, [polyLine, option]);

  function alters() {
    let value = DimensionFinder.calculate(polyLine);
    if (option == "mm") {

      setLength(DimensionFinder.millimeter(value).toFixed(4));
      setLengthDuplicate(DimensionFinder.millimeter(value).toFixed(4))
    } else {
      setLength(DimensionFinder.inches(value).toFixed(4));
      setLengthDuplicate(DimensionFinder.inches(value).toFixed(4))
    }



    let result = DimensionFinder.calculateWidth(polyLine);
    if (option == "mm") {

      setWidth(DimensionFinder.millimeter(result).toFixed(4));
      setWidthDuplicate(DimensionFinder.millimeter(result).toFixed(4))
    } else {

      setWidth(DimensionFinder.inches(result).toFixed(4));
      setWidthDuplicate(DimensionFinder.inches(result).toFixed(4))
    }

    let resultHeight = DimensionFinder.calculateHeight(polyLine);
    if (option == "mm") {

      setHeight(DimensionFinder.millimeter(resultHeight).toFixed(4))
      setHeightDuplicate(DimensionFinder.millimeter(resultHeight).toFixed(4))
    } else {

      setHeight(DimensionFinder.inches(resultHeight).toFixed(4))
      setHeightDuplicate(DimensionFinder.inches(resultHeight).toFixed(4))
    }
  }

  const handleWidthIncrease = () => {
    const updatedPolyLine = WidthAlter.increaseWidth(polyLine, true);
    const updatePolyGone = PolyGonWidth.increaseWidth(polyGon, true)
    setPolyGon(updatePolyGone)
    setPolyLine(updatedPolyLine);
  };

  const handleWidthDecrease = () => {
    const updatedPolyLine = WidthAlter.increaseWidth(polyLine, false);
    setPolyLine(updatedPolyLine);
    const updatePolyGone = PolyGonWidth.increaseWidth(polyGon, false)
    setPolyGon(updatePolyGone)
  };

  const handleLengthIncrease = () => {
    const updatedPolyLine = LengthAlter.lengthIncrease(polyLine, true);
    setPolyLine(updatedPolyLine);
    const updatePolyGone = PolyGonLength.increaseWidth(polyGon, true)
    setPolyGon(updatePolyGone)
  };

  const handleLengthDecrease = () => {
    const updatedPolyLine = LengthAlter.lengthIncrease(polyLine, false);
    setPolyLine(updatedPolyLine);
    const updatePolyGone = PolyGonLength.increaseWidth(polyGon, false)
    setPolyGon(updatePolyGone)
  };

  const handleHeightIncrease = () => {
    const updatedPolyLine = HeightAlter.lengthIncrease(polyLine, true);
    setPolyLine(updatedPolyLine);
    const updatePolyGone = PolyGonHeight.increaseWidth(polyGon, true)
    setPolyGon(updatePolyGone)
  };

  const handleHeightDecrease = () => {
    const updatedPolyLine = HeightAlter.lengthIncrease(polyLine, false);
    setPolyLine(updatedPolyLine);
    const updatePolyGone = PolyGonHeight.increaseWidth(polyGon, false)
    setPolyGon(updatePolyGone)
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
                <div onClick={() => setOption("mm")} id="mm" className={`w-1/2 text-center py-0 rounded-full cursor-pointer font-semibold ${option === 'mm'
                  ? 'bg-purple-100 text-black'
                  : 'bg-transparent text-gray-500'
                  }`}>
                  mm
                </div>
                <div onClick={() => setOption("in")} id="in" className={`w-1/2 text-center py-0 rounded-full cursor-pointer font-semibold ${option === 'in'
                  ? 'bg-purple-100 text-black' // Highlight styles when selected
                  : 'bg-transparent text-gray-500' // Default styles
                  }`}>
                  in
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='flex'>
                <div>
                  <label class="block mb-2 text-xs font-light text-gray-900 dark:text-white absolute mt-9 ml-16">{option}</label>
                  <label for="first_name" class="block mb-2 text-xs font-light text-gray-900 dark:text-white">Length</label>
                  <input onChange={(e) => setLengthDuplicate(e.target.value)} value={lengthDuplicate} type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <div className='pl-2'>
                  <label class="block mb-2 text-xs font-light text-gray-900 dark:text-white absolute mt-9 ml-16">{option}</label>
                  <label for="first_name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Width</label>
                  <input onChange={(e) => setWidthDuplicate(e.target.value)} value={widthDuplicate} type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>

              </div>
              <div className='flex'>
                <div className='w-36 mt-2'>
                  <label class="block mb-2 text-xs font-light text-gray-900 dark:text-white absolute mt-9 ml-16">{option}</label>
                  <label for="first_name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Height</label>
                  <input onChange={(e) => setHeightDuplicate(e.target.value)} value={heightDuplicate} type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>
                <button class="ml-5 bg-transparent hover:bg-gray-100 text-black-700 font-semibold hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded mt-10" onClick={handleLengthController}>Load</button>
              </div>



            </div>

            <div class="ms-1 font-bold mt-5 p-1">Manual Loader ᥫ᭡</div>
            <div className='flex mt-5 text-xs'>
              <div>
                <button onClick={() => handleLengthIncrease()} class=" bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded">🔺 Length</button>
                <button onClick={() => handleLengthDecrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 mt-2 border border-black-500 hover:border-transparent rounded">🔻 Length</button>
              </div>
              <div>
                <button onClick={() => handleWidthIncrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded">🔺 Width</button>
                <button onClick={() => handleWidthDecrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 mt-2 border border-black-500 hover:border-transparent rounded">🔻 Width</button>
              </div>
              <div>
                <button onClick={() => handleHeightIncrease()} class="bg-transparent hover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 border border-black-500 hover:border-transparent rounded">🔺 Height</button>
                <button onClick={() => handleHeightDecrease()} class="bg-transparent hhover:bg-gray-100 text-black-700 font-normal hover:text-black py-1 px-2 mt-2 border border-black-500 hover:border-transparent rounded">🔻 Height</button>
              </div>
            </div>


            <div className='mt-5'>
              <span class="ms-1  font-bold">Available Textures 𝓲</span>
              <div className='flex'>
                <span onClick={()=>setColor("white")} style={{backgroundColor: "white",border: "1px solid black"}} class="dot ml-5 mt-2"></span>
                <span onClick={()=>setColor("red")} style={{backgroundColor: "red",border: "1px solid black"}} class="dot ml-5 mt-2"></span>
                <span onClick={()=>setColor("black")} style={{backgroundColor: "black",border: "1px solid black"}} class="dot ml-5 mt-2"></span>
                <span onClick={()=>setColor("yellow")} style={{backgroundColor: "yellow",border: "1px solid black"}} class="dot ml-5 mt-2"></span>
                <span onClick={()=>setColor("cardboard")} style={{backgroundColor: "#C19A6B",border: "1px solid black"}} class="dot ml-5 mt-2"></span>
              </div>
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
            <g id="blender_frame_80">
              <g id="blender_object_GPencil">
                <g id="Plane_Fills">
                  <polygon id="wingTopLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,467.185303 498.030029,467.185303 498.030029,327.845154 218.754028,327.845154" />
                  <polygon id="wingTopLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,327.845154 498.030029,327.845154 498.030029,187.984253 218.754028,187.984253" />
                  <polygon id="wingTopLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,187.984253 498.030029,187.984253 498.030029,48.635376 218.754028,48.635376" />
                  <polygon id="wingTopLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,48.635376 498.030029,48.635376 498.030029,10.000000 218.754028,10.000000" />
                  <polygon id="wingBottomLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="498.030029,467.185303 218.754028,467.185303 218.754028,607.682068 498.030029,607.682068" />
                  <polygon id="wingRightLine" stroke="none" fill-opacity="1" points="498.030029,327.845154 498.030029,467.185303 637.675415,467.185303 637.675415,327.845154" />
                  <polygon id="wingRightLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="644.572937,331.577698 644.572937,463.880188 706.106018,449.440063 706.106018,330.995422" />
                  <polygon id="wingLeftLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="218.754028,467.185303 218.754028,327.845154 78.532806,327.845154 78.532806,467.185303" />
                  <polygon id="wingLeftLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="78.532806,467.185303 78.532806,327.845154 78.532806,327.845154 78.532806,467.185303" />
                  <polygon id="wingLeftLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="71.197601,463.005737 71.197601,331.627411 10.000000,331.343475 10.000000,449.229553" />
                  <polygon id="wingLeftLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="78.532806,467.185303 78.532806,327.845154 71.197601,331.627411 71.197601,463.005737" />
                  <polygon id="wingRightLine" fill="#FFFFFF" stroke="none" fill-opacity="1" points="637.675415,327.845154 637.675415,467.185303 644.572937,463.880188 644.572937,331.577698" />
                </g>
                <g id="Plane_Lines">
                  <polyline id="heightArrowTop" stroke="#F000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="5" points='358.754028,190.185303 358.754028,237.682068' />
                  <text id="dynamicText" x="328" y="260" fill="black" font-size="20">
                    {heightDuplicate}
                  </text>
                  <polyline id="heightArrowTBottom" stroke="#F000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="5" points='358.754028,270.185303 358.754028,327.682068' />
                  <polyline id="widthArrowTop" stroke="#F000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="5" points='428.754028,327.185303 428.754028,367.682068' />
                  <text id="dynamicText" x="400" y="400" fill="black" font-size="20">
                    {widthDuplicate}
                  </text>
                  <polyline id="widthArrowBottom" stroke="#F000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="5" points='428.754028,417.185303 428.754028,467.682068' />
                  <polyline id="leftLargeLine" stroke="#000000" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="2" points="218.754028,10.000000 218.754028,48.635376 218.754028,187.984253 218.754028,327.845154 218.754028,467.185303 218.754028,607.682068" />//left larger line
                  <polyline id="wingBottomArrowLeft" stroke="#F000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="5" points=" 218.754028,437.185303 310.030029,437.185303" />
                  <text id="dynamicText" x="318" y="443" fill="black" font-size="20">
                    {heightDuplicate}
                  </text>
                  <polyline id="wingBottomArrowRight" stroke="#F000FF" stroke-opacity="1" fill="none" stroke-linecap="round" stroke-width="5" points=" 500.754028,437.185303 398.030029,437.185303" />
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

        {polyLine !== null &&
          <FlatContainerManipulator arr={polyGon} polylining={polyLine} width={widthDuplicate} height={heightDuplicate} length={lengthDuplicate} />}
        <FlatContainer color={color}/>
        
        <FlatContainerAd color={color}/>
      </div>
    </div>

  )
}
//height<=length
export default FlatContainerDisplay