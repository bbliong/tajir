import React from 'react';

import "./index.scss"

const index = (props) => {
    
    const innerClass = [props.innerClass];
    
    if(props.isSelected){
        innerClass.push("selected")
    }

    return (
        <div className={props.outerClassName} style={props.outerStyle}>
            <input  id={`radio-${props.value}`} className="form-check-input" style={{ display: "none" }} type="radio" onChange={props.changed} value={props.value} name={props.name} checked={props.isSelected} />
            <label htmlFor={`radio-${props.value}`} className={`radio d-flex justify-content-center align-items-center ${ innerClass.join(" ")} `} style={props.innerStyle}>{props.children}</label>
        </div>
    );
}

export default index;
