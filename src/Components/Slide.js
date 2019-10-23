import React from 'react'

const Slide = ({ img, title, copy, scaleDown, percentage, checkHeight, selected }) => {

  return <div ref={selected ? checkHeight : null} className={"slide-image"} style={{transform: `translateX(${percentage}%) scale(${scaleDown ? 0.7 : 1})`}} >
          <img src={img} style={{width: "100%"}}/>
          <h1>{title}</h1>
          <h3>{copy}</h3>
        </div>
}

export default Slide