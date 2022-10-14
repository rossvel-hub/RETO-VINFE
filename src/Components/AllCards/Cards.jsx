import React from 'react'
import { CardsMorty } from './CardsMorty';



export const Cards = ({results}) => {

  return (
    <div className='container'>
       <ul className="cards">
        {results.map((p) => (
          <li
            className="card-item"
            style={{ listStyle: "none" }}
            key={p.name}
          >
            <CardsMorty url={p.url} />
          </li>
        ))}
      </ul> 
    </div> 
    
  )
}
