import React from 'react';
import "./Entourage.css";

function Entourage({ imgSrc, name, title }) {
    return (
        <div className="entourage">
            <img src={imgSrc} className="img_thumbnail" />
            <h4 className="name">{name}</h4>
            <h5 className="title">{title}</h5>
        </div>
    )
}

export default Entourage
