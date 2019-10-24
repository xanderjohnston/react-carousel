import React from 'react'

const Text = ({selected, percentage, title, copy, checkHeight}) => {

  const transformStyle = {
    transform: `translateX(${percentage}%) scale(${!selected ? 0.7 : 1})`
  }

  return  <div className={"slide-text"} style={transformStyle} ref={selected ? checkHeight : null} >
            <h3 >{title}</h3>
            <p >{copy}</p>
          </div>
}

export default Text