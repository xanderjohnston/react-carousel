import React, { useState, useEffect } from 'react'
import Slide from '../Components/Slide'
import SlideFragment from '../Components/SlideFragment'
import ArrowButton from '../Components/ArrowButton'

const Carousel = ({slides}) => {
    const [currentSlide, setCurrent] = useState(0)
    const [canRight, setRight] = useState(true)
    const [canLeft, setLeft] = useState(false)

    const handleRightClick = () => {
        if (canRight) {setCurrent(currentSlide + 1)}
    }

    const handleLeftClick = () => {
        if (canLeft) {setCurrent(currentSlide - 1)}
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

    const leftFragment = slides[currentSlide - 1]
    const rightFragment = slides[currentSlide + 1]
    const current = slides[currentSlide]
        
    return  <div className={"carousel"}>
            {leftFragment && <SlideFragment img={leftFragment.img} side={"left"} />}
            {canLeft && <ArrowButton direction={"left"} handleClick={handleLeftClick} />}
            {slides.length && <Slide img={current.img} 
            title={current.title} 
            copy={current.copy} />}
            {canRight && <ArrowButton direction={"right"} handleClick={handleRightClick} />}
            {rightFragment && <SlideFragment img={rightFragment.img} side={"right"}/>}
            </div>
    
}

export default Carousel