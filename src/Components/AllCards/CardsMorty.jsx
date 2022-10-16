import UseFetch from "../fetch/UseFetch";
import * as React from "react";

export const CardsMorty = ({ url }) => {
  const apiRespuesta = UseFetch(url);
  const { cargando, data } = apiRespuesta;

  return (
    <div>
      {cargando ? (
        <h6>Cargando</h6>
      ) : (
        <div className="div-card">
          <div className="card mb-4" style={{ width: "18rem", margin: "10px" }}>
            <img src={data.image} className="card-img-top" alt="imagen" />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <hr />
              <p className="card-text" style={{ color: "#171a4a" }}>
                Specie: {data.species}
              </p>
              <p className="card-text" style={{ color: "#171a4a" }}>
                Gender: {data.gender}
              </p>
            </div>
            <div
              className="card-footer"
              style={{ backgroundColor: "#6dc83d", color: "#171a4a" }}
            >
              {" "}
              {data.status}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
