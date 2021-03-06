import React from 'react'
import {Button} from 'react-bootstrap';
import './Reviews.css';
export default function Reviews({title,movies,pic,short,pub,imm,headline}) {
    return (
    <>
        <div className="flexbox-container">
            <div className="flexbox-item" style={{backgroundColor:'rgba(0, 0, 0, 0.226)'}}>
                <h3 style={{color:'black'}}>{movies}</h3>
                <h4 style={{color:'white'}}>{short}</h4>
                <Button href={title} style={{paddingBottom:'10px',color:'yellow',fontSize:'1.3em'}} >Go to Review of {movies}</Button>

                <p style={{color:'white'}}>Publication Date {pub}</p>
               <div class="flip-card">
                 <div class="flip-card-inner">
                  <div class="flip-card-front">
                    {(imm) ?  <img src={imm} alt=" " style={{borderRadius:'2em'}}/> : <p> </p>}
                  </div>
                  <div class="flip-card-back">
                    <h1>{movies}</h1>
                    <p>{headline}</p>
                  </div>
                 </div>
               </div>
          </div> 
      </div>
    </>
    )
}
