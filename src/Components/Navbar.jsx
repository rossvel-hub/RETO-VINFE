import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

import UseFetch from './fetch/UseFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  console.log(data);
  // const [resultado, setResultado] = useState({ cargando: true, data: null });  
  const [elemBusqueda, setElemBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange = e =>{
   
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

    const filtrar = (terminoBusqueda) => {
      console.log("object");
      let resultadosBusqueda = data.results.filter((elemento) => {
        if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) 
          return elemento; 
      });
      setElemBusqueda(resultadosBusqueda);
    };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#68D13B", borderRadius: "7px" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                value={busqueda}
                type="search"
                placeholder="Buscar por titulo"
                onChange={handleChange}
              />
              <button className="btn btn-success" style={{backgroundColor:"#171a4a"}} type="submit">
               <FontAwesomeIcon icon={faSearch} /> 
              </button>
              <button className="btn btn-dark" style={{backgroundColor:"#171a4a"}} type="submit">
                <FontAwesomeIcon icon={faEraser} /> 
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar