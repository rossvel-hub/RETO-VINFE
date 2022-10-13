import React, { useState } from 'react'
import { CardsMario } from './AllCards/CardsMario';
import UseFetch from './fetch/UseFetch'


const Container = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);

  return (
    <div className="container">
      <hr />
      {cargando ? <h1>Cargando...</h1> : <CardsMario results={data.results} />} 
     
    </div>
  );
}

export default Container