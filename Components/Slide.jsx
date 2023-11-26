import React from 'react'
import { SliderBox } from "react-native-image-slider-box";


export default function Slide({images}) {

    return (
        <SliderBox
            images={images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            disableOnPress={true}
            autoplay={true}
            circleLoop
            resizeMode={'contain'}
            resizeMethod={'resize'}
            ImageComponentStyle={{borderRadius: 15, width: '97%', margin: 20}}
        />
    )
}
