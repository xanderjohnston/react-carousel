import React from 'react'

const Image = ({selected, checkHeight, percentage, img}) => {

  const transformStyle = {
    transform: `translateX(${percentage}%) scale(${!selected ? 0.7 : 1})`
  }

  return  <div ref={selected ? checkHeight : null} 
              className={"slide-image"} 
              style={transformStyle} >
                <img src={img} className={"image"}/>
          </div>
}

export default Image