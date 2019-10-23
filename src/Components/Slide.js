import React from 'react'

const Slide = ({ img, title, copy, scaleNumber, percentage, checkHeight, selected }) => {

  return <div ref={selected ? checkHeight : null} className={"slide-image"} style={{transform: `translateX(${percentage}%) scale(${1 - (scaleNumber * 0.3)})`}} >
          <img src={img}/>
          <h1>{title}</h1>
          <h3>{copy}</h3>
        </div>
}

export default Slide