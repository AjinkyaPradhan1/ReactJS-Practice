import React from 'react';
import { useState } from 'react';


const ImageCarousel = () =>{

    const [pic,setPic] = useState('images/vk.jpeg')

    const nextPic = () => {
        if(pic === 'images/vk.jpeg'){
            setPic('images/sg.jpeg')
        }
        if(pic === 'images/sg.jpeg'){
            setPic('images/jb.jpeg')
        }
        if(pic === 'images/jb.jpeg'){
            setPic('images/rgs.jpeg')
        }
    }

    const prevPic = () => {
        if(pic === 'images/sg.jpeg'){
            setPic('images/vk.jpeg')
        }
        if(pic === 'images/jb.jpeg'){
            setPic('images/sg.jpeg')
        }
        if(pic === 'images/rgs.jpeg'){
            setPic('images/jb.jpeg')
        }
    }

    return(
        <div className="ig">
            <button className='btn btn-primary' onClick={prevPic}>Back</button>
            &nbsp;&nbsp;&nbsp;&nbsp;<img src={pic} />&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-primary' onClick={nextPic}>Next</button>
            
        </div>
    )
}

export default ImageCarousel;