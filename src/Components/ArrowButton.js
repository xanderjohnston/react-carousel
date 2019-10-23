import React from 'react'

const ArrowButton = ({ left, right, handleClick }) => {

  return <div onClick={() => handleClick()}>
            {right ? <i className="fas fa-chevron-circle-right" /> : <i className="fas fa-chevron-circle-left" />}
        </div>
}

export default ArrowButton