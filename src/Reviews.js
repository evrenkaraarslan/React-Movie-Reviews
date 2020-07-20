import React from 'react'
import {Button} from 'react-bootstrap';
import './Reviews.css';
export default function Reviews({title,movies,pic,short,pub}) {
    return (
        <div className="flexbox-container">
            <div className="flexbox-item">
                <h3 style={{color:'red'}}>{movies}</h3>
                <h4>{short}</h4>
                <p>Publication Date {pub}</p>
                <Button href={title} >Go to Review of {movies}</Button>
            </div> 
        </div>
    )
}
