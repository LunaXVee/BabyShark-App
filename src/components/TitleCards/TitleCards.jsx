import React, {useEffect, useRef} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data' //will allow us to access the info in cardsdata



const TitleCards = () => { //create an object named titlecards

  const cardsRef = useRef(); //imports from react package to control how the scrolling works
const handlewheel = (event)=>{
  event.preventDefault;
  cardsRef.current.scrollleft += event.deltaY;
}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handlewheel)
},[])


  return (
    <div className='title-cards'> 
    <h2>Popular on Netflix</h2>
    <div className="card-list" ref={cardsRef}>
      {cards_data.map((card, index)=>{ //creates an index list of all items under cardsdata
        return <div className="card" key={index}>
          <img src={card.image} alt="" />  
          <p>{card.name}</p>
        </div>
      })}
    </div>
      
    </div>
  )
}

export default TitleCards
