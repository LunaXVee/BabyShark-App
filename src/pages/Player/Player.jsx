import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams(); {/*Links youtube trailors to the Players.jsx file */}
  const [loading, setLoading] = useState(true);  
  const navigate = useNavigate(); {/*Makes the back button useable */}

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTI2MTVmM2E3MGRkOGU3MzAxZDU4ZTJiODEwZmUxNCIsIm5iZiI6MTczNzQ0NTg3OS43NDg5OTk4LCJzdWIiOiI2NzhmNTFmNzQ2Mjg4NTVmMzlmMDdiNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cL-Wy49ZY8Iuggt6W_FPBTOzPAZLmr5YogS2WQu-OkY'
    }
  };
  useEffect(()=>{
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          
          const trailer = res.results.find(
            video => video.type === "Trailer" && video.official
          ) || res.results[0]; // Fallback to first video if no official trailer
          
          if (trailer) {
            setApiData(trailer);
          }
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
      }, [id]);

      
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      
      
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
