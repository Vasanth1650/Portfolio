import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import NightClouds from '../Models/NightClouds'
import Birds from '../models/Birds'
import Brawl from '../models/Brawl'
import Colt from '../models/Colt'
import Mecha from '../models/Mecha'
import ProfileNavBar from '../components/ProfileNavBar'
import Navbar from '../components/Navbar'

function Dashboard() {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)
    const adjustIslandForScreenSizze = () => {
        let screenScale = null;
        let screenPosition = [0, -17.5, -43]
        let rotation = [0.1, 4.7, 0]
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenScale, screenPosition, rotation]
    }

    const adjustPlanForScreenSizze = () => {
        let screenScale = null;
        let screenPosition = null;
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
    }

    const [islandScale, islandPosition, rotation] = adjustIslandForScreenSizze()
    const [planeScale, planePosition] = adjustPlanForScreenSizze()
  
    return (
        <section className='w-full h-screen relative'>
            <Navbar/>
            <div style={{textAlign:'justify',marginLeft:"30px",marginTop:'185px',position:"absolute",paddingLeft:"720px",paddingRight:"200px"}}>
                        <div to="/">
                            <p className='text-blue-600 font-extrabold text-xs'>Hi Guys :)</p>
                        </div>
                        <p className='pt-1 text-xs leading-relaxed'>
                            Greetings! I'm Vasanth S, a passionate and innovative software developer with a love for 3D design. With a strong foundation in coding and a keen eye for aesthetics, I bring a unique blend of technical expertise and creative flair to my projects.
                        </p>
                    </div>
            <Canvas className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }}>
                

                <Suspense fallback={null}>
                
                    <directionalLight position={[10, 0, 0]} intensity={2} />
                    <ambientLight intensity={0.2} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
                    
                    <Birds />
                    
                    <NightClouds
                     position={islandPosition}
                     scale={islandScale}
                     rotation={rotation}
                     isRotating={isRotating}
                     setCurrentStage={setCurrentStage}
                     setIsRotating={setIsRotating}
                     />
                 
                    



                </Suspense>

            </Canvas>
            
            <div style={{textAlign:'justify',marginLeft:"30px",marginTop:'45px',position:"absolute",paddingLeft:"70px",paddingRight:"200px"}}>
            
                        <div to="/">
                            <p className='text-blue-600 font-extrabold text-9xl'>What Am I :)</p>
                        </div>
                        <p className='pt-1 mt-5 text-xs leading-relaxed'>
                        DSA Freak, but I'm not a huge problem solver. The way the problem is solved encourages me to code more, but it also makes me sad:( If you don't understand the principles, please buy me a Coke!🥤
                        </p>
                    </div>
            <Canvas className='mt-5'>
                <Suspense>
                    <directionalLight position={[10, 2, 0]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight/>
                    <Brawl />
                    <Colt/>
                    <Mecha/>
                </Suspense>
            </Canvas>
            <div style={{textAlign:'justify',marginLeft:"30px",marginTop:'45px',position:"absolute",paddingLeft:"70px",paddingRight:"200px"}}>
            
                        <div to="/">
                            <p className='text-blue-600 font-extrabold text-9xl'>Currently Working On :)</p>
                        </div>
                        <p className='pt-1 mt-5 text-xs leading-relaxed'>
                            Libraries, Usecase, algorithms, threejs, tailwind, animations and much more.
                        </p>
                    </div>
            <Canvas className='mt-5'>
            <Suspense>
                    <directionalLight position={[10, 2, 0]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight/>
                    <Mecha/>
                </Suspense>
            </Canvas>           
        </section>
    )
}

export default Dashboard