import React, { useState } from 'react'
// import { CardsMario } from './AllCards/CardsMario';
import UseFetch from './fetch/UseFetch'
import { Cards } from './AllCards/Cards';


const Container = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  // const [url, setUrl] = useState("https://supermario-api.herokuapp.com/games");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);

  return (
    <div className="container">
      <hr />
      {cargando ? <h1>Cargando...</h1> : <Cards results={data.results} />} 
     
    </div>
  );
}

export default Container