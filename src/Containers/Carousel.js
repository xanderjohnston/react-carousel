import React, { useState, useEffect, useCallback } from 'react'
import Image from '../Components/Image'
import Text from '../Components/Text'
import ArrowButton from '../Components/ArrowButton'

const Carousel = ({slides}) => {
    const [currentSlide, setCurrent] = useState(0)
    const [canRight, setRight] = useState(true)
    const [canLeft, setLeft] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [imageHeight, setImageHeight] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const [textHeight, setTextHeight] = useState(0);
    
    const imageRef = useCallback(node => {
      if (node) {
        setImageHeight(node.scrollHeight);
        setImageWidth(node.clientWidth)
      }
    }, []);

    const textRef = useCallback(node => {
      if (node) {
        setTextHeight(node.scrollHeight);
      }
    }, []);

    const handleClick = (direction) => {
      if (direction === "right") {
         setCurrent(currentSlide + 1)
         setPercentage(percentage - 100)
      } else {
        setCurrent(currentSlide - 1)
        setPercentage(percentage + 100)
      }
    }

    useEffect(() => {
        if (currentSlide === 0) {
          setLeft(false)
        } else if (currentSlide >= (slides.length - 1)) {
          setRight(false)
        } else {
          setLeft(true)
          setRight(true)
        }
      }, [currentSlide])

        
    return  <div className={"carousel"} >
                <div className={"slides"} >
                  <div className={"image-wrap"} style={{height: `${imageHeight}px`}} >
                    {slides.map((slide, i) => {
                    return  <Image  {...slide} 
                              selected={currentSlide === i}
                              checkHeight={imageRef}
                              percentage={(percentage + (i*100))}
                            />
                            })}
                      <div className={"arrows-container"} style={{minWidth: `${imageWidth + 15}px`}}>
                        {canLeft && <ArrowButton direction={"left"} handleClick={handleClick} />}
                        {canRight && <ArrowButton direction={"right"} handleClick={handleClick} />}
                      </div>
                  </div>
                  <div className={"text-wrap"} style={{height: `${textHeight}px`}}>
                  {slides.map((slide, i) => {
                    return  <Text  {...slide} 
                              selected={currentSlide === i}
                              checkHeight={textRef}
                              percentage={(percentage + (i*100))}
                            />
                    })}
                  </div>
                </div>
            </div>
    
}

export default Carousel