import React, { useState} from 'react';
import './Gallery.css';
import img1 from '../Images/img_1.jpg';
import img2 from '../Images/img_2.jpg';
import img3 from '../Images/img_3.jpg';
import img4 from '../Images/img_4.jpg';
import img5 from '../Images/img_5.jpg';
import img6 from '../Images/img_6.jpg';

export default function Gallery() {

    let data = [
        {
            id: 1,
            imgSrc: img2,
        },
        {
            id: 2,
            imgSrc: img4,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img1,
        },
        {
            id: 5,
            imgSrc: img6,
        },
        {
            id: 6,
            imgSrc: img5,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImage = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className="gallery-container">
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc}/>
                <i className="fa fa-times" onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">
                { data.map((item, index)=>{
                    return (
                        <div className="pics" key={index} onClick={() => getImage(item.imgSrc)}>
                            <img src={item.imgSrc} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
