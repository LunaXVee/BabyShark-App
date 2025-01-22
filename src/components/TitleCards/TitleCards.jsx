import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTI2MTVmM2E3MGRkOGU3MzAxZDU4ZTJiODEwZmUxNCIsIm5iZiI6MTczNzQ0NTg3OS43NDg5OTk4LCJzdWIiOiI2NzhmNTFmNzQ2Mjg4NTVmMzlmMDdiNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cL-Wy49ZY8Iuggt6W_FPBTOzPAZLmr5YogS2WQu-OkY'
    }
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    // Always use the discover endpoint with appropriate filters
    let apiUrl;
    
    switch(category) {
      case 'animation':
        apiUrl = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&sort_by=popularity.desc';
        break;
      case 'anime':
        apiUrl = 'https://api.themoviedb.org/3/discover/movie?with_genres=16&with_original_language=ja&sort_by=popularity.desc';
        break;
      case 'family_animation':
        apiUrl = 'https://api.themoviedb.org/3/discover/movie?with_genres=16,10751&sort_by=popularity.desc';
        break;
      case 'now_playing':
        apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';
        break;
      default:
        apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';
    }

    // Add common query parameters
    apiUrl += '&language=en-US&page=1&include_adult=false';

    fetch(apiUrl, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data.results) {
          setApiData(data.results);
        }
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setApiData([]); // Set empty array instead of leaving it undefined
      });

    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handlewheel);
    }

    // Cleanup
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handlewheel);
      }
    };
  }, [category]);

  return (
    <div className='title-cards'> 
      <h2>{title || "New Releases"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData && apiData.length > 0 ? (
          apiData.map((card, index) => (
            <div className="card" key={index}>
              <img 
                src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}` : 'placeholder-image-url'} 
                alt={card.original_title || 'Movie poster'} 
              />  
              <p>{card.original_title}</p>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default TitleCards