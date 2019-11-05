import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlide = (props) => {
    
    console.log("props are: ", props)
    
    return (
        <div>
            <Carousel>
                {props.images.map( img =>(
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img.url}
                        alt="First slide"
                        />
                    </Carousel.Item>
                ))}
                
            </Carousel>
        </div>
    )
}

export default ImageSlide
