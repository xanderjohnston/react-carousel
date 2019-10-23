import React from 'react'

const Slide = ({ img, title, copy, scaleDown, percentage, checkHeight, selected }) => {

  return  <div ref={selected ? checkHeight : null} 
            className={"slide-image"} 
            style={{transform: `translateX(${percentage}%) scale(${scaleDown ? 0.7 : 1})`}} >
            <img src={img} style={{width: "100%"}}/>
              <div className={"slide-text"} style={{transform: `translateX(${percentage}%) scale(${scaleDown ? 0.7 : 1})`}} >
                <h3 >{title}</h3>
                <p >{copy}</p>
              </div>
          </div>
}

export default Slide