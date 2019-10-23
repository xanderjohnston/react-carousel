import React from 'react'

const Slide = ({ img, title, copy, scaleDown, percentage, checkHeight, selected }) => {

  const transformStyle = {
    transform: `translateX(${percentage}%) scale(${scaleDown ? 0.7 : 1})`
  }

  return  <div ref={selected ? checkHeight : null} 
            className={"slide-image"} 
            style={transformStyle} >
            <img src={img} style={{width: "100%"}}/>
              <div className={"slide-text"} style={transformStyle} >
                <h3 >{title}</h3>
                <p >{copy}</p>
              </div>
          </div>
}

export default Slide