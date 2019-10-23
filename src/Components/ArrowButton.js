import React from 'react'

const ArrowButton = ({ direction, handleClick }) => {

  return <div className={`slide-arrow ${direction}`} onClick={() => handleClick()}>
            <i className={`fas fa-chevron-circle-${direction} fa-2x`} />
        </div>
}

export default ArrowButton