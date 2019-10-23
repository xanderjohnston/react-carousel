import React, { useState, useEffect } from 'react'
import Slide from '../Components/Slide'
import SlideFragment from '../Components/SlideFragment'
import ArrowButton from '../Components/ArrowButton'

const Carousel = (slides) => {
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
        if (currentSlide >= slides.length) {
            setRight(false)
        } else if (currentSlide < slides.length) {
            setRight(true)
        }
    }, [currentSlide])

    const leftFragment = slides[currentSlide - 1]
    const rightFragment = slides[currentSlide + 1]
        
    return  <>
            {leftFragment && <SlideFragment img={leftFragment.img} left/>}
            {canLeft && <ArrowButton left handleClick={handleLeftClick} />}
            {slides.length && <Slide img={currentSlide.img} 
            title={currentSlide.title} 
            copy={currentSlide.copy} />}
            {canRight && <ArrowButton right handleClick={handleRightClick} />}
            {rightFragment && <SlideFragment img={rightFragment.img} right/>}
            </>
    
}

export default Carousel