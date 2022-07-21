import React from "react";
import { useState } from 'react';
import { Link } from 'wouter'


export default function SearchBar(){
    const [input, setInput] = useState(''); 
    const link ='/gif/'+input
    return <div>
        <input value={input} onInput={e => setInput(e.target.value)} className='Search-gif' ></input>
        <Link to={link} className='Search-button'>Buscar</Link>
    </div>
    
}