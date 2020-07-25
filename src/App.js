import React,{useState,useEffect} from 'react';
import './App.css';
import Reviews from './Reviews';

export default function App() {
  const APP_KEY=""

  const [reviews, setReviews]=useState([])
  const [search, setSearch]=useState(" ");
  const [searchButton, setButton] = useState(" ");
  useEffect( ()=>{
    getReviews()
  },[searchButton]);
  const getReviews= async () =>{
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=${APP_KEY}`
    );
    const data= await response.json();
    setReviews(data.results);
    console.log(data.results);
  }

  const updateSearch=(e)=>{
    setSearch(e.target.value);
  };

  const getSearch=(e)=>{
    e.preventDefault();
    setButton(search)
  }

  return (
    <div className="App" style={{marginTop:'10px'}}>
      <h1 style={{color:'white'}}>Movie review app</h1>
      <form onSubmit={getSearch} className="search-form">
        <input  style={{height:'30px',borderRadius:'2em'}} className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button style={{height:'30px'}} className="search-button" type="submit">Search</button>
      </form>
      <div style={{backgroundColor:'white'}}>
      {reviews.map(review=>(
        review.multimedia==null ? <Reviews key={review.link.url} title={review.link.url} movies={review.display_title} short={review.summary_short} pub={review.publication_date} /> :
        <Reviews key={review.link.url} title={review.link.url} movies={review.display_title} short={review.summary_short} pub={review.publication_date} imm={review.multimedia.src}/> 
      ))}

      </div>
    </div>
  );
}