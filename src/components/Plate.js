import React from 'react'

export default function Plate(props){
    const propBoxes= props.PlateDivs.map(box=>{
        return(box);
    })
    console.log(props.PlateDivs)
    return(
        <div className="Plate">
         {propBoxes}
        </div>
    )
}