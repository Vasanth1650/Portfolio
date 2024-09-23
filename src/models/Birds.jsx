import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import Phoenix from "../assets/3d/phoenix_bird.glb"

function Birds() {
    const ref = useRef()
    const {scene,animations} = useGLTF(Phoenix)
    const { actions } = useAnimations(animations,ref)
    useEffect(()=>{
        actions["Take 001"].play()
    },[])
  return (
    <mesh scale={[0.001,0.001,0.001]} position={[-2,0,2]} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Birds