import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import Castillo from "../assets/3d/castillo.glb"

function Brawl() {
    const ref = useRef()
    const {scene,animations} = useGLTF(Castillo)
    const {actions} = useAnimations(animations,ref)
    useEffect(()=>{
        actions["Animation"].play()
    },[])
  return (
    <mesh position={[2, -5.5, -44]} rotation={[0.4,4.7,0]} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Brawl