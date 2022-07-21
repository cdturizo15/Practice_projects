import React from "react";

export default function Gif({title,url}){
    return(
        <div className='container-card'>
            <h4 className='title'>{title}</h4>
            <img alt={title} src={url} className="Gif-card"/>
        </div>
    )
}