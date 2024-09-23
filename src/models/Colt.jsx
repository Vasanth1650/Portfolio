import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import ColtAn from "../assets/3d/colt_win_animation.glb"


function Colt() {
    const ref = useRef()
    const {scene,animations} = useGLTF(ColtAn)
    const {actions} = useAnimations(animations,ref)
    useEffect(()=>{
        actions["Colt Win"].play()
    },[])
  return (
    <mesh scale={[0.4,0.4,0.4]} position={[-1,-2,-6]} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Colt