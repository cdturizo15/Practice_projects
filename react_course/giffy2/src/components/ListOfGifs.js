import Gif from './Gif';
import getGifs from '../services/getGifs';
import React, {useState, useEffect} from 'react';


export default function ListOfGifs({params}) {
    const [gifs, updateGifs] = useState([])
    const {keyword} = params
    useEffect(()=>{
        getGifs({key:keyword}).then(gifs=>{
        updateGifs(gifs)}) 
    },[keyword])

    return <div className='App-content'>
        {
            gifs.map(({title, url, id}) => <Gif key={id} title={title.charAt(0).toUpperCase()+title.slice(1).toLowerCase()} url={url}> </Gif>)
        }
    </div>  
  } 