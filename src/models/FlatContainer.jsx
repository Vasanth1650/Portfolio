import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cardboard from '../ColorModels/Cardboard';
import Yellow from '../ColorModels/Yellow';
import White from '../ColorModels/White';
import Red from '../ColorModels/Red';
import Black from '../ColorModels/Black';


function FlatContainer(color) {
  const [position, setPosition] = useState([0, -0.2, 2.6]);
  const [scale, setScale] = useState(0.9);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [animationProgress, setAnimationProgress] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isAnimating) return;

    const deltaX = e.clientX - lastMousePosition.x;
    const deltaY = e.clientY - lastMousePosition.y;

    setRotation((prevRotation) => [
      prevRotation[0] + deltaY * 0.01,
      prevRotation[1] + deltaX * 0.01,
      prevRotation[2],
    ]);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    setScale((prevScale) => Math.min(Math.max(prevScale + delta, 0.5), 2));
  };

  const handleAnimationChange = (e) => {
    setAnimationProgress(parseFloat(e.target.value));
  };

  const handleAnimationToggle = () => {
    setIsAnimating((prev) => !prev);
  };

  

  return (
    <div
      className="absolute mt-16 top-4 right-4 bg-gray-100 p-4"

    >
      <div
        style={{ width: "250px", userSelect: "none", height: "250px" }}
        className="modelBack absolute top-4 right-4 w-70 bg-white-100 shadow-lg rounded-lg overflow-hidden"
      >
        <div style={{ zIndex: "1" }} className=" absolute  mt-44 ml-10 p-4 bg-transparent h-2">
          <div className="flex">
            <label className="block text-xs font-medium text-gray-700">Open</label>
            <label className="block absolute top-13 text-gray-700 font-medium text-xs right-5">Close</label>
            <svg style={{width:"50px",position:"absolute",marginTop:"-180px",marginLeft:"130px"}} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 70 70" viewBox="0 0 70 70" id="360-degree-rotate">
              <path d="M25.5111141 62.5714417l1.59375-.1933594c.0507812.40625.1875.7167969.4101562.9316406s.4921875.3222656.8085938.3222656c.3398438 0 .6259766-.1289062.8583984-.3867188s.3486328-.6054688.3486328-1.0429688c0-.4140625-.1113281-.7421875-.3339844-.984375s-.4941406-.3632812-.8144531-.3632812c-.2109375 0-.4628906.0410156-.7558594.1230469l.1816406-1.3417969c.4453125.0117188.7851562-.0849609 1.0195312-.2900391s.3515625-.4775391.3515625-.8173828c0-.2890625-.0859375-.5195312-.2578125-.6914062s-.4003906-.2578125-.6855469-.2578125c-.28125 0-.5214844.0976562-.7207031.2929688s-.3203125.4804688-.3632812.8554688l-1.5175781-.2578125c.1054688-.5195312.2646484-.9345703.4775391-1.2451172s.5097656-.5546875.890625-.7324219.8076172-.2666016 1.2802734-.2666016c.8085938 0 1.4570312.2578125 1.9453125.7734375.4023438.421875.6035156.8984375.6035156 1.4296875 0 .7539062-.4121094 1.3554688-1.2363281 1.8046875.4921875.1054688.8857422.3417969 1.1806641.7089844s.4423828.8105469.4423828 1.3300781c0 .7539062-.2753906 1.3964844-.8261719 1.9277344s-1.2363281.796875-2.0566406.796875c-.7773438 0-1.421875-.2236328-1.9335938-.6708984S25.5931454 63.2940979 25.5111141 62.5714417zM37.8216591 58.3644104l-1.59375.1757812c-.0390625-.328125-.140625-.5703125-.3046875-.7265625s-.3769531-.234375-.6386719-.234375c-.3476562 0-.6416016.15625-.8818359.46875s-.3916016.9628906-.4541016 1.9511719c.4101562-.484375.9199219-.7265625 1.5292969-.7265625.6875 0 1.2763672.2617188 1.7666016.7851562s.7353516 1.1992188.7353516 2.0273438c0 .8789062-.2578125 1.5839844-.7734375 2.1152344s-1.1777344.796875-1.9863281.796875c-.8671875 0-1.5800781-.3369141-2.1386719-1.0107422s-.8378906-1.7783203-.8378906-3.3134766c0-1.5742188.2910156-2.7089844.8730469-3.4042969s1.3378906-1.0429688 2.2675781-1.0429688c.6523438 0 1.1923828.1826172 1.6201172.5478516S37.7044716 57.6690979 37.8216591 58.3644104zM34.0892372 61.9562073c0 .5351562.1230469.9482422.3691406 1.2392578s.5273438.4365234.84375.4365234c.3046875 0 .5585938-.1191406.7617188-.3574219s.3046875-.6289062.3046875-1.171875c0-.5585938-.109375-.9677734-.328125-1.2275391s-.4921875-.3896484-.8203125-.3896484c-.3164062 0-.5839844.1240234-.8027344.3720703S34.0892372 61.4718323 34.0892372 61.9562073zM41.7005653 56.2257385c.8320312 0 1.4824219.296875 1.9511719.890625.5585938.703125.8378906 1.8691406.8378906 3.4980469 0 1.625-.28125 2.7929688-.84375 3.5039062-.4648438.5859375-1.1132812.8789062-1.9453125.8789062-.8359375 0-1.5097656-.3212891-2.0214844-.9638672s-.7675781-1.7880859-.7675781-3.4365234c0-1.6171875.28125-2.78125.84375-3.4921875C40.2200966 56.5187073 40.8685341 56.2257385 41.7005653 56.2257385zM41.7005653 57.5909729c-.1992188 0-.3769531.0634766-.5332031.1904297s-.2773438.3544922-.3632812.6826172c-.1132812.4257812-.1699219 1.1425781-.1699219 2.1503906s.0507812 1.7001953.1523438 2.0771484.2294922.6279297.3837891.7529297.3310547.1875.5302734.1875.3769531-.0634766.5332031-.1904297.2773438-.3544922.3632812-.6826172c.1132812-.421875.1699219-1.1367188.1699219-2.1445312s-.0507812-1.7001953-.1523438-2.0771484-.2294922-.6289062-.3837891-.7558594S41.8997841 57.5909729 41.7005653 57.5909729z"></path>
              <g>
                <path d="M44.4853516,53.8348083c-0.2597656,0-0.5097656-0.109375-0.7001953-0.2998047
				c-0.0996094-0.0898438-0.1699219-0.2001953-0.2197266-0.3203125c-0.0498047-0.1191406-0.0800781-0.25-0.0800781-0.3798828
				c0-0.1396484,0.0302734-0.2695312,0.0800781-0.3896484s0.1201172-0.2304688,0.2197266-0.3203125
				c0.3701172-0.3798828,1.0400391-0.3701172,1.4101562,0c0.1904297,0.1806641,0.2900391,0.4404297,0.2900391,0.7099609
				c0,0.1298828-0.0195312,0.2607422-0.0703125,0.3798828c-0.0498047,0.1201172-0.1298828,0.2304688-0.2197266,0.3203125
				S44.9951172,53.7049255,44.875,53.7547302C44.7451172,53.8055115,44.625,53.8348083,44.4853516,53.8348083z"></path>
              </g>
              <g>
                <path d="M33.0400391,40.0027771c-9.6494141,0-17.5-7.8505859-17.5-17.5000019s7.8505859-17.5,17.5-17.5s17.5,7.8505855,17.5,17.5
				S42.6894531,40.0027771,33.0400391,40.0027771z M33.0400391,7.0027757c-8.546875,0-15.5,6.9531245-15.5,15.5
				s6.953125,15.5000019,15.5,15.5000019s15.5-6.9531269,15.5-15.5000019S41.5869141,7.0027757,33.0400391,7.0027757z"></path>
                <path d="M33.0390625,35.0027771c-6.8925781,0-12.5-5.6074238-12.5-12.5009785c0-6.8916016,5.6074219-12.4990234,12.5-12.4990234
				s12.5,5.6074219,12.5,12.4990234C45.5390625,29.3953533,39.9316406,35.0027771,33.0390625,35.0027771z M33.0390625,12.0027752
				c-5.7900391,0-10.5,4.7099609-10.5,10.4990234c0,5.7900391,4.7099609,10.5009785,10.5,10.5009785s10.5-4.7109394,10.5-10.5009785
				C43.5390625,16.7127361,38.8291016,12.0027752,33.0390625,12.0027752z"></path>
                <path d="M35.0107422 47.8904724C16.5 47.8904724 2 41.4549255 2 33.2400818c0-4.9531269 5.1982422-9.3554707 14.2626953-12.0781269.5380859-.1582031 1.0869141.1416016 1.2460938.6699219.1582031.5292969-.1416016 1.0869141-.6699219 1.2460938C8.7998047 25.492033 4 29.2908611 4 33.2400818c0 6.8574219 14.2011719 12.6503906 31.0107422 12.6503906 2.2265625 0 3.6992188-.0673828 5.8369141-.2666016.5419922-.0507812 1.0371094.3525391 1.0888672.9033203.0507812.5498047-.3535156 1.0371094-.9033203 1.0888672C38.8261719 47.8211365 37.3066406 47.8904724 35.0107422 47.8904724zM49.3193359 46.4500427c-.4619141 0-.8769531-.3212891-.9765625-.7910156-.1162109-.5400391.2285156-1.0712891.7685547-1.1865234C59.3710938 42.2791443 66 37.8699646 66 33.2400818c0-4.5966816-6.5703125-8.9824238-16.7402344-11.1718769-.5390625-.1162109-.8828125-.6484375-.7666016-1.1884766.1152344-.5390625.6445312-.8876953 1.1884766-.7666016C60.9804688 22.5457439 68 27.5760174 68 33.2400818c0 5.6992188-7.0771484 10.7529297-18.4707031 13.1875C49.4589844 46.4432068 49.3886719 46.4500427 49.3193359 46.4500427z"></path>
                <path d="M36.2021484 51.5906677c-.2861328 0-.5703125-.1220703-.7675781-.3583984-.3544922-.4228516-.2988281-1.0537109.125-1.4082031l3.8222656-3.2011719-3.8222656-3.2011719c-.4238281-.3544922-.4794922-.9853516-.125-1.4082031.3525391-.4228516.984375-.4814453 1.4082031-.125l4.7382812 3.9677734c.2275391.1894531.3583984.4707031.3583984.7666016s-.1308594.5771484-.3583984.7666016l-4.7382812 3.9677734C36.65625 51.5144958 36.4277344 51.5906677 36.2021484 51.5906677zM33.0390625 30.0027752c-.5527344 0-1-.4472656-1-1s.4472656-1 1-1c3.0322266 0 5.5-2.4677734 5.5-5.5009766 0-.5527344.4472656-1 1-1s1 .4472656 1 1C40.5390625 26.6375408 37.1748047 30.0027752 33.0390625 30.0027752zM26.5390625 23.5017986c-.5527344 0-1-.4472656-1-1 0-4.1347656 3.3642578-7.4990234 7.5-7.4990234.5527344 0 1 .4472656 1 1s-.4472656 1-1 1c-3.0322266 0-5.5 2.4667969-5.5 5.4990234C27.5390625 23.054533 27.0917969 23.5017986 26.5390625 23.5017986z"></path>
              </g>
            </svg>
          </div>

          <input
            type="range"
            min={0}
            max={2}
            step={0.01}
            value={animationProgress}
            onChange={handleAnimationChange}
            className="w-full h-2 bg-white-200 p-2 rounded-lg appearance-none cursor-pointer"
          />
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Position Z</label>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.1}
              value={position[2]}
              onChange={(e) => setPosition([position[0], position[1], parseFloat(e.target.value)])}
              className="w-full h-2 bg-white-200 p-2 rounded-lg appearance-none cursor-pointer"
            />
          </div> */}
        </div>



        <div onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel} className="w-full h-full flex justify-center items-center">
          <Canvas className="w-3/4 h-3/4">
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[5, 10, 15]}
              intensity={2}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <hemisphereLight
              skyColor={'#ffffff'}
              groundColor={'#444444'}
              intensity={1.9}
              position={[0, 10, 0]}
            />
            {color.color=="white" && 
            <White
              position={position}
              scale={scale} // Zoom controlled by scale
              rotation={rotation} // Passing updated rotation from state
              animationProgress={animationProgress}
              isAnimating={isAnimating} // Pass animation state
            />}

{color.color=="red" && 
            <Red
              position={position}
              scale={scale} // Zoom controlled by scale
              rotation={rotation} // Passing updated rotation from state
              animationProgress={animationProgress}
              isAnimating={isAnimating} // Pass animation state
            />}

{color.color=="yellow" && 
            <Yellow
              position={position}
              scale={scale} // Zoom controlled by scale
              rotation={rotation} // Passing updated rotation from state
              animationProgress={animationProgress}
              isAnimating={isAnimating} // Pass animation state
            />}

{color.color=="black" && 
            <Black
              position={position}
              scale={scale} // Zoom controlled by scale
              rotation={rotation} // Passing updated rotation from state
              animationProgress={animationProgress}
              isAnimating={isAnimating} // Pass animation state
            />}

{color.color=="cardboard" && 
            <Cardboard
              position={position}
              scale={scale} // Zoom controlled by scale
              rotation={rotation} // Passing updated rotation from state
              animationProgress={animationProgress}
              isAnimating={isAnimating} // Pass animation state
            />}
            
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default FlatContainer;
