import UseFetch from '../fetch/UseFetch'
import Button from "react-bootstrap/Button";
import ModalCard from "./ModalCard";
import React from 'react';
import { useState } from 'react';


export const CardsMario = ({url}) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container'>
       {cargando ? (
        <h6>Cargando</h6>
      ) : (
        <div className="card border-secondary mb-3" style={{ width: "21rem" }} >
          <div className="card-body text-bg-dark p-3 card-style">
            {/* <img src={data.image} class="card-img-top" alt="imagen" /> */}
            <img src="mario6.jpeg" class="card-img-top" alt="..."></img>
          </div>

          <div className="card-header">
            <h5 className="card-title">{data.id} </h5>
          </div>

          <div className="card-footer p-3 card" style={{ backgroundColor: "#34E807" }}>
            <p className="card-text">Nombre:{data.name}</p>
            <p className="card-text">Status:{data.status}</p>
            <p className="card-text">Especie:{data.species}</p>
            <Button variant="dark" onClick={handleShow}>
        Ver mas...
      </Button>
          </div>
         </div>
      )}
       <ModalCard show={show} handleClose={handleClose} />
    </div>
  )
}
