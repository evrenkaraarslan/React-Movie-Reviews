import React from 'react'
import {Button} from 'react-bootstrap';
import './Reviews.css';
export default function Reviews({title,movies,pic,short,pub,imm}) {
    return (
        <>
        <div className="flexbox-container">
            <div className="flexbox-item" style={{backgroundColor:'wheat'}}>
                <h3 style={{color:'red'}}>{movies}</h3>
                <h4>{short}</h4>
                <p>Publication Date {pub}</p>
                <Button href={title} style={{paddingBottom:'10px'}} >Go to Review of {movies}</Button>
                {(imm) ?
                <img src={imm} alt=" " style={{borderRadius:'2em'}}/> : <p> </p>}
            </div> 
        </div>
         </>
    )
}
