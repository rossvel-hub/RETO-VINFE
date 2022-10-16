import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import { FevinContext } from '../Context/FevinContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [busqueda, setBusqueda] = useState("");
  const { filtrarResultados } = useContext(FevinContext);
  
  const handleChange = e => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrarResultados(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    filtrarResultados(busqueda)
  }

  const limpiarBusqueda = e => {
    e.preventDefault();
    setBusqueda('');
    filtrarResultados('')
  }

  return (
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#263C64", borderRadius: "3px",  }}>
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
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                value={busqueda}
                type="search"
                placeholder="Buscar por nombre"
                onChange={handleChange}
              />
              <button className="btn btn-dark" style={{backgroundColor:"#171a4a"}} type="button" onClick={limpiarBusqueda}>
                <FontAwesomeIcon icon={faEraser} /> 
              </button>
            </form>
          </div>
        </div>
      </nav>
    
  )
}

export default Navbar