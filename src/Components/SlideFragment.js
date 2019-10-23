import React from 'react'

const SlideFragment = ({img, side}) => {

  return <img src={img} class={`slide-fragment-${side}`}/>
}

export default SlideFragment