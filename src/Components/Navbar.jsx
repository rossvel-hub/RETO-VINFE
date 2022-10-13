import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

  const [resultado, setResultado] = useState({ cargando: true, data: null });  
  // datos dinamicos
  // const [elemBusqueda, setElemBusqueda]= useState([]);
  // const [busqueda, setBusqueda]=useState("");

  const handleChange=e=>{
    //setBusqueda(e.target.value);
    //filtrar(e.target.value);
  }

  //  const filtrar=(terminoBusqueda)=>{
  //   let resultadosBusqueda=resultado.filter((elemento)=>{
  //   if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
  //      return elemento;
  //   }
  //   });
  //   setElemBusqueda(resultadosBusqueda);
  //  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
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
                // value={busqueda}
                type="search"
                placeholder="Buscar por titulo"
                onChange={handleChange}
                aria-label="Search"
              />
              <button className="btn btn-success" style={{backgroundColor:"#171a4a"}} type="submit">
                Search
              </button>
              <button className="btn btn-dark" style={{backgroundColor:"#171a4a"}} type="submit">
                Clean up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar