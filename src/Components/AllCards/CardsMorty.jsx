import UseFetch from "../fetch/UseFetch";
import * as React from 'react';


export const CardsMorty = ({ url }) => {
  const apiRespuesta = UseFetch(url);
  const { cargando, data } = apiRespuesta;
  return (
    <div className="container">
      {cargando ? (
        <h6>Cargando</h6>
      ) : (
        <div className="img-contacto">
          <div className="card" style={{ width: "21rem", height: "39rem" }}>
            <div className="card-head">
              <img src={data.image} className="card-img-top" alt="imagen" />
              <span className="back-text">R&M</span>
            </div>
            <div className="card-body">
              <div className="product-desc">
                <span className="product-title">
                  <span className="badge">
                    ID
                    <h5 className="card-title">{data.id} </h5>
                  </span>
                  <p className="card-text">Nombre: {data.name}</p>
                </span>
                <span className="product-caption">
                  <p className="card-text">Especie: {data.species}</p>
                </span>
              </div>
              <div className="product-properties">
                <span className="product-color">
                  <h1>STATUS</h1>
                  <ul className="ul-color">
                    <li>
                      <a href="#" className="orange"></a>
                    </li>
                    <li>
                      <a href="#" className="green"></a>
                    </li>
                    <li>
                      <a href="#" className="yellow"></a>
                    </li>
                  </ul>
                </span>
                <span className="product-price">
                  <b>
                    <p className="card-text">{data.status}</p>
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
