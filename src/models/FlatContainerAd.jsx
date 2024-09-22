import React from 'react'
import Image from "../assets/image/white.png"
import Image1 from "../assets/image/yellow.png"
import Image2 from "../assets/image/red.png"
import Image3 from "../assets/image/black.png"
import Image4 from "../assets/image/box.png"

function FlatContainerAd(color) {
    return (
        <div style={{ width: "250px" }} className="bg-gray-300 absolute bottom-10 right-8 w-70 bg-white-100 shadow-lg rounded-lg overflow-hidden">

            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div style={{backgroundColor:"transparent",position:"absolute"}} className='bg-transparent'>👀</div>
                {color.color=="white" && 
                <img src={Image}/>}
                {color.color=="yellow" && 
                    <img src={Image1}/>}
                    {color.color=="black" && 
                <img src={Image3}/>}
                {color.color=="red" && 
                    <img src={Image2}/>}
                    {color.color=="cardboard" && 
                <img src={Image4}/>}
               
                
            </div>

        </div>
    )
}

export default FlatContainerAd