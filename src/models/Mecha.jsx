import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import MechaAn from "../assets/3d/mechaBrawler.glb"


function Mecha() {
    const ref = useRef()
    const {scene,animations} = useGLTF(MechaAn)
    const {actions} = useAnimations(animations,ref)
    useEffect(()=>{
        actions["mortis_mecha_lose"].play()
    },[])

  return (
    <mesh scale={[5,5,5]} position={[-1,-2,-1]} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Mecha