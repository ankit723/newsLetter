import React from "react";

export function LeftImageRightText(props){
    return(
        <div className="d-flex">
            <img src={props.leftImage} alt="FooterDemoImage" style={{width:`${props.imgSize}`, maxWidth:"100%", height:"auto"}}/>
            <h6 className="mx-3" style={{fontSize:`${props.textSize}`, overflow:"hidden"}}>{props.rightText}<h6>{`${props.author} - ${props.date}`}</h6></h6>
        </div>
    )
}

export default LeftImageRightText;