import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Meter = (props) => {
    const {score} = props;
    const calcColor =(percent,start,end)=>{
        let a= percent/100,
        b=(end-start)*a,
        c=b+start;

        return "hsl("+ c + ",100%,50%)";

    }

  return (
    <CircularProgressbar
    value={score}
    text={`${value}%`}
    circleRatio={0.7}
    style={{trail:{
         strokeLinecap:"butt",
         transform:"rotate(-126deg)",
         transformOrgin:"center center"
    },
    path:{
        strokeLinecap:"butt",
        transform:"rotate(-126deg)",
        transformOrgin:"center center",
        stroke:calcColor(value,0,12)

    },
    text:{
        fill:"#add"
    }
}}
strokeWidth={10}
    />
  )
}

export default Meter