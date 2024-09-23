import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import Cloud from "../assets/3d/candy_cartoon_scene.glb"
import { useFrame, useThree } from '@react-three/fiber'

function NightClouds({isRotating,setIsRotating,setCurrentStage,...props}) {
    const ref = useRef()
    const {scene,animations} = useGLTF(Cloud)
    const {actions} = useAnimations(animations,ref)
    const [scrolling,setScrolling] = useState(false)
    
    useEffect(()=>{
        actions["Main"].play()
    })


    const {gl,viewport} = useThree()
    const lastX = useRef(0)
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95

    const handlePointerDown = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(true);
        
        
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    
     
        lastX.current = clientX;
      };
    
    
      const handlePointerUp = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(false);
      };
    
      const handlePointerMove = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (isRotating) {
         
          const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    
          
          const delta = (clientX - lastX.current) / viewport.width;
    
          ref.current.rotation.y += delta * 0.01 * Math.PI;
    
          lastX.current = clientX;
    
          rotationSpeed.current = delta * 0.01 * Math.PI;
        }
        if(scrolling){

        }
      };
    
      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
          if (!isRotating) setIsRotating(true);
    
          ref.current.rotation.y += 0.005 * Math.PI;
          rotationSpeed.current = 0.007;
        } else if (event.key === "ArrowRight") {
          if (!isRotating) setIsRotating(true);
    
          ref.current.rotation.y -= 0.005 * Math.PI;
          rotationSpeed.current = -0.007;
        }
      };
    
      
      const handleKeyUp = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          setIsRotating(false);
        }
      };

      
      const handleScrollDown = (event)=>{
        setScrolling(true)
        if(scrolling){
            const clientX = window.scrollY;
    
          const delta = (clientX - lastX.current) / viewport.width;
    
          ref.current.rotation.y += delta * 0.01 * Math.PI;
    
          lastX.current = clientX;
    
          rotationSpeed.current = delta * 0.01 * Math.PI;
        }
      }
    
      useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("scroll",handleScrollDown)
    
        return () => {
          canvas.removeEventListener("pointerdown", handlePointerDown);
          canvas.removeEventListener("pointerup", handlePointerUp);
          canvas.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("keydown", handleKeyDown);
          window.removeEventListener("keyup", handleKeyUp);
          window.removeEventListener("scroll",handleScrollDown)
        };
      }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
    
      useFrame(() => {
        if (!isRotating) {
          rotationSpeed.current *= dampingFactor;
    
          if (Math.abs(rotationSpeed.current) < 0.001) {
            rotationSpeed.current = 0;
          }
    
          ref.current.rotation.y += rotationSpeed.current;
        } else {
          const rotation = ref.current.rotation.y;
    
          
          const normalizedRotation =
            ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    
          switch (true) {
            case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
              setCurrentStage(4);
              break;
            case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
              setCurrentStage(3);
              break;
            case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
              setCurrentStage(2);
              break;
            case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
              setCurrentStage(1);
              break;
            default:
              setCurrentStage(null);
          }
        }
      });


  return (
    <mesh position={[-5.2,-1,-4]}  ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default NightClouds