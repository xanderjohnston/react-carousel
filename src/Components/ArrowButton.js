import React from 'react'

const ArrowButton = ({ direction, handleClick }) => {

  return <div className={`slide-arrow ${direction} fade-in`} onClick={() => handleClick()}>
            <i className={`fas fa-chevron-circle-${direction}`} />
        </div>
}

export default ArrowButton