import React from 'react'
import { CardsMario } from './CardsMario';


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
            <CardsMario url={p.url} />
          </li>
        ))}
      </ul> 
    </div> 
    
  )
}
