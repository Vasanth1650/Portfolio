import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from 'react';
import Image4 from "../assets/3d/cardboard.glb";
import { useFrame } from "@react-three/fiber";


function Cardboard({ position, scale, rotation, animationProgress, isAnimating }) {
    const ref = useRef();
    let { scene, animations } = useGLTF(Image4);
    const { actions } = useAnimations(animations, ref);
  
   
    useEffect(() => {
      let action = actions["ArmatureAction"];
  
      if (action) {
        action.play();
        action.paused = !isAnimating;
        action.time = animationProgress;
  
        return () => {
          action.stop();
        };
      }
    }, [actions, animationProgress, isAnimating]);
  
    function modifyPlanesAndBones() {
      scene.traverse((child) => {
        if (child.isSkinnedMesh && child.name === 'Plane') {
          child.scale.set(1.5, 1.5, 1.5);
          if (child.skeleton) {
            child.skeleton.bones.forEach((bone) => {
  
            });
          }
        }
      });
    }
  
    useFrame(() => {  
      modifyPlanesAndBones();
      const action = actions["ArmatureAction"];
      if (action) {
        action.time = animationProgress;
      }
      if (!isAnimating) {
        ref.current.rotation.x = rotation[0];
        ref.current.rotation.y = rotation[1];
        ref.current.rotation.z = rotation[2];
      }
    });
  
    return (
      <mesh ref={ref} position={position} scale={[scale, scale, scale]}>
        <primitive object={scene} />
      </mesh>
    );
  }

  export default Cardboard