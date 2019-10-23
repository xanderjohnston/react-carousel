import React, { useState, useEffect, useCallback } from 'react'
import Slide from '../Components/Slide'
import ArrowButton from '../Components/ArrowButton'

const Carousel = ({slides}) => {
    const [currentSlide, setCurrent] = useState(0)
    const [canRight, setRight] = useState(true)
    const [canLeft, setLeft] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
      if (node) {
        setHeight(node.scrollHeight);
      }
    }, []);

    const handleRightClick = () => {
        if (canRight) {setCurrent(currentSlide + 1)}
        setPercentage(percentage - 100)
    }

    const handleLeftClick = () => {
        if (canLeft) {setCurrent(currentSlide - 1)}
        setPercentage(percentage + 100)
    }

    const findScale = (index) => {
      return Math.abs(currentSlide - index)
    }

    useEffect(() => {
        if (currentSlide > 0) {
            setLeft(true)
        } else if (currentSlide === 0) {
            setLeft(false)
        }
        if (currentSlide >= (slides.length - 1)) {
            setRight(false)
        } else {
            setRight(true)
        }
    }, [currentSlide])
        
    return  <div className={"carousel"} >
              {canLeft && <ArrowButton direction={"left"} handleClick={handleLeftClick} />}
                <div className={"slides"} style={{minHeight: `${height}px`}}>
                  {slides.map((slide, i) => {
                    return  <Slide  {...slide} 
                                    selected={currentSlide === i}
                                    checkHeight={measuredRef}
                                    scaleNumber={findScale(i)}
                                    percentage={(percentage + (i*100))}
                            />
                    })}
                </div>
              {canRight && <ArrowButton direction={"right"} handleClick={handleRightClick} />}
            </div>
    
}

export default Carousel