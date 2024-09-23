import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import IslandView from "../assets/3d/game_pirate_adventure_map.glb"
import { a } from "@react-spring/three"
import { useFrame, useThree } from "@react-three/fiber";

function Island({isMoving,setIsMoving,zPosition,setZPosition,...props}) {
    const group = useRef();
    const {gl,viewport} = useThree()
    const [right,setRight] = useState(false)
    const [left,setLeft] = useState(false)
    const [jump,setJump] = useState(false)
    const [count,setCount] = useState(0)

    const { nodes, materials, animations } = useGLTF(
        IslandView
    );
    // const { actions } = useAnimations(animations, group);
    const islandRef = useRef()
    const lastZ = useRef(0)
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95

    const handlePointerUp = (event) =>{
        
        isMoving = false;
        setRight(false)
        setLeft(false)
        setIsMoving(false)
        setJump(false)
    }

    const handlePointerDown = (event)=>{
        
        if(event.key==="ArrowUp"){
            isMoving = true;
            
        }
        if(event.key==="ArrowRight"){
            setRight(true)
        }
        if(event.key==="ArrowLeft"){
            setLeft(true)
        }
        if(event.key==" "){
            setJump(true)
        }
    }

    const jumpSense = () =>{
        if(jump){
            var value = count
            setCount(value++)
            islandRef.current.position.z += 2.20
            islandRef.current.position.y -= 1.02
            islandRef.current.position.x -=0.10

            setTimeout(()=>{
                islandRef.current.position.y +=1
            },500)
        }
    }

    const handlePointerMove = (event) =>{
        if(isMoving){
            islandRef.current.position.z += 1.10
             islandRef.current.position.y -= 0.01
             islandRef.current.position.x -=0.05
        }
        //0.01,3.1,0.0

        if(right){
            islandRef.current.position.x -=0.5
            
            
        }
        if(left){
            islandRef.current.position.x +=0.5

        }
    }
    


    useEffect(()=>{
        window.addEventListener("keydown", handlePointerDown);
        window.addEventListener("keyup", handlePointerUp);
        window.addEventListener("keydown", handlePointerMove);
        window.addEventListener("keydown",jumpSense)

  return () => {
    window.removeEventListener("keydown", handlePointerDown);
    window.removeEventListener("keyup", handlePointerUp);
    window.removeEventListener("kwydown", handlePointerMove);
    window.removeEventListener("keydown",jumpSense)
  };
    },[gl,handlePointerMove,handlePointerUp,handlePointerDown])

    
    
    return (
        <a.group ref={islandRef} {...props}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="11FBX" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="hw_zhidao210_daolu_01">
                                    <group name="Object_5" rotation={[-Math.PI / 2, 0, 0]}>
                                        <mesh
                                            name="hw_zhidao210_daolu_01_hw_dixing_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_daolu_01_hw_dixing_0.geometry
                                            }
                                            material={materials.hw_dixing}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_peijing_04" position={[0, 0, 21000]}>
                                    <group
                                        name="Object_8"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_peijing_04_hw_peijing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_peijing_04_hw_peijing_02_0.geometry
                                            }
                                            material={materials.hw_peijing_02}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_peijing_06" position={[0, 0, 42000]}>
                                    <group
                                        name="Object_11"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_peijing_06_hw_peijing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_peijing_06_hw_peijing_02_0.geometry
                                            }
                                            material={materials.hw_peijing_02_0}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_peijing_01">
                                    <group
                                        name="Object_14"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_peijing_01_hw_peijing_01_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_peijing_01_hw_peijing_01_0.geometry
                                            }
                                            material={materials.hw_peijing_01}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_peijing_02">
                                    <group
                                        name="Object_17"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_peijing_02_hw_peijing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_peijing_02_hw_peijing_02_0.geometry
                                            }
                                            material={materials.hw_peijing_02_1}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_peijing_03" position={[0, 0, 21000]}>
                                    <group
                                        name="Object_20"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_peijing_03_hw_peijing_01_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_peijing_03_hw_peijing_01_0.geometry
                                            }
                                            material={materials.hw_peijing_01_0}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_peijing_05" position={[0, 0, 42000]}>
                                    <group
                                        name="Object_23"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_peijing_05_hw_peijing_01_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_peijing_05_hw_peijing_01_0.geometry
                                            }
                                            material={materials.hw_peijing_01_1}
                                        />
                                    </group>
                                </group>
                                <group name="hw_wandaoyou_peijing_01" position={[0, 0, 63000]}>
                                    <group
                                        name="Object_26"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_wandaoyou_peijing_01_hw_peijing_01_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_wandaoyou_peijing_01_hw_peijing_01_0.geometry
                                            }
                                            material={materials.hw_peijing_01_2}
                                        />
                                    </group>
                                </group>
                                <group name="hw_wandaoyou_peijing_02" position={[0, 0, 63000]}>
                                    <group
                                        name="Object_29"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_wandaoyou_peijing_02_hw_peijing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_wandaoyou_peijing_02_hw_peijing_02_0.geometry
                                            }
                                            material={materials.hw_peijing_02_2}
                                        />
                                    </group>
                                </group>
                                <group name="hw_wandaoyou_daolu_01" position={[0, 0, 63000]}>
                                    <group
                                        name="Object_32"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_wandaoyou_daolu_01_hw_dixing_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_wandaoyou_daolu_01_hw_dixing_0.geometry
                                            }
                                            material={materials.hw_dixing_0}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_daolu_02" position={[0, 0, 21000]}>
                                    <group
                                        name="Object_35"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_daolu_02_hw_dixing_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_daolu_02_hw_dixing_0.geometry
                                            }
                                            material={materials.hw_dixing_1}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_daolu_03" position={[0, 0, 42000]}>
                                    <group
                                        name="Object_38"
                                        position={[0, 0, -0.001]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_daolu_03_hw_dixing_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_daolu_03_hw_dixing_0.geometry
                                            }
                                            material={materials.hw_dixing_2}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_dimian_01">
                                    <group name="Object_41" rotation={[-Math.PI / 2, 0, 0]}>
                                        <mesh
                                            name="hw_zhidao210_dimian_01_hw_dixing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_dimian_01_hw_dixing_02_0.geometry
                                            }
                                            material={materials.hw_dixing_02}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Line216"
                                    position={[-2935.383, 523.344, 13799.258]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                                <group
                                    name="Camera001"
                                    position={[17.694, 523.344, 928.164]}
                                    rotation={[0.178, -1.526, -0.262]}
                                >
                                    <group name="Object_45" />
                                </group>
                                <group
                                    name="hw_wandaoyou_dimian_01"
                                    position={[0, 0, 63000.031]}
                                >
                                    <group
                                        name="Object_47"
                                        position={[0, -0.01, -63000.031]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_wandaoyou_dimian_01_hw_dixing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_wandaoyou_dimian_01_hw_dixing_02_0.geometry
                                            }
                                            material={materials.hw_dixing_02_0}
                                        />
                                    </group>
                                </group>
                                <group name="hw_zhidao210_dimian_03" position={[0, 0, 42000]}>
                                    <group
                                        name="Object_50"
                                        position={[0, -0.007, -41999.871]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_dimian_03_hw_dixing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_dimian_03_hw_dixing_02_0.geometry
                                            }
                                            material={materials.hw_dixing_02_1}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="hw_zhidao210_dimian_02"
                                    position={[0, 0, 20999.982]}
                                >
                                    <group
                                        name="Object_53"
                                        position={[0, -0.003, -20999.982]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                    >
                                        <mesh
                                            name="hw_zhidao210_dimian_02_hw_dixing_02_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes.hw_zhidao210_dimian_02_hw_dixing_02_0.geometry
                                            }
                                            material={materials.hw_dixing_02_2}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </a.group>
    );
}


export default Island