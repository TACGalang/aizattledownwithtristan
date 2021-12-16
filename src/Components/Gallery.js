import React, { useState} from 'react';
import './Gallery.css';
import img1 from '../Images/img_1.jpg';
import img2 from '../Images/img_2.jpg';
import img3 from '../Images/img_3.jpg';
import img4 from '../Images/img_4.jpg';
import img5 from '../Images/img_5.jpg';
import img6 from '../Images/img_6.jpg';
import img7 from '../Images/img_7.jpg';
import img8 from '../Images/img_8.jpg';
import img9 from '../Images/img_9.jpg';
import img10 from '../Images/img_10.jpg';
import img11 from '../Images/img_11.jpg';
import img12 from '../Images/img_12.jpg';
import img13 from '../Images/img_13.jpg';
import img14 from '../Images/img_14.jpg';
import img15 from '../Images/img_15.jpg';
import img16 from '../Images/img_16.jpg';
import img17 from '../Images/img_17.jpg';
import img18 from '../Images/img_18.jpg';
import img19 from '../Images/img_19.jpg';
import img20 from '../Images/img_20.jpg';
import img21 from '../Images/img_21.jpg';
import img22 from '../Images/img_22.jpg';
import img23 from '../Images/img_23.jpg';
import img24 from '../Images/img_24.jpg';
import img25 from '../Images/img_25.jpg';
import img26 from '../Images/img_26.jpg';
import img27 from '../Images/img_27.jpg';
import img28 from '../Images/img_28.jpg';
import img29 from '../Images/img_29.jpg';
import img30 from '../Images/img_30.jpg';

export default function Gallery({ reference }) {

    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 28,
            imgSrc: img28,
        },
        {
            id: 29,
            imgSrc: img29,
        },
        {
            id: 30,
            imgSrc: img30,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 21,
            imgSrc: img21,
        },
        {
            id: 22,
            imgSrc: img22,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 24,
            imgSrc: img24,
        },
        {
            id: 25,
            imgSrc: img25,
        },
        {
            id: 26,
            imgSrc: img26,
        },
        {
            id: 27,
            imgSrc: img27,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImage = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className="gallery-container" ref={reference}>
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
