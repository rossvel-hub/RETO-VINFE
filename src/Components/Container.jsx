import * as React from 'react';
import { useContext } from 'react';
import { FevinContext } from '../Context/FevinContext';
import { Cards } from './AllCards/Cards';

const Container = () => {
  const { resultados } = useContext(FevinContext);

  return (
    <div className="container">
      <hr />
      {resultados.cargando ? <h1>Cargando...</h1> : <Cards results={resultados.data} />}
    </div>
  );
}

export default Container