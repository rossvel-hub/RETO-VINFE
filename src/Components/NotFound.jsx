import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="img-contacto">        
  <div className="card" style={{ width: "21rem",  height: "33rem", margin: "30px"  }}>
    <div className="card-head">
      {/* <img src={data.image} class="card-img-top" alt="imagen" /> */}
      <span className="back-text">
              R&M
            </span>
    </div>
    <div className="card-body">
      <div className="product-desc">
        <span className="product-title">
        <span className="badge">
                  ID
                {/* <h5 className="card-title">{data.id} </h5> */}
                </span>
              Personaje
                {/* <p className="card-text">Nombre:{data.name}</p> */}
                
        </span>
        <span className="product-caption">
               Especie 
               {/* <p className="card-text">Especie:{data.species}</p> */}
              </span>
      </div>
      <div className="product-properties">
        <span className="product-size">
                <h4>Popularidad</h4>
                <ul className="ul-size">
                  <li><a href="#">7</a></li>
                  <li><a href="#">8</a></li>
                  <li><a href="#">9</a></li>
                  <li><a href="#" className="active">10</a></li>
                  <li><a href="#">11</a></li>
                </ul>
              </span>
        <span className="product-color">
                <h4>STATUS</h4>
                <ul class="ul-color">
                  <li><a href="#" className="orange active"></a></li>
                  <li><a href="#" className="green"></a></li>
                  <li><a href="#" className="yellow"></a></li>
                </ul>
              </span>        
              <span className="product-price">
              <b>status{/* <p className="card-text">Status:{data.status}</p> */}</b>
        </span>
      </div>
    </div>
  </div>
      </div>        
      </div>
  );
};

export default NotFound;

