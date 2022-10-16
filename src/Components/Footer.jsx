import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4" style={{ backgroundColor: "#171a4a" }}>
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example21">
                    Email address
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              <div>
              <img
                src="/morty-logo.png"
                alt="Logo"
                width="150"
                height="70"
                className="d-inline-block align-text-top img-header"
              />
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
          Sé que esta situación puede ser intimidante. Miras a tu alrededor y todo da miedo y es diferente, pero ¿sabes qué? ... hay que encarar esas situaciones, avanzar contra ellas como un toro - es así que crecemos como personas.
          "Rick Sanchez"
          </p>
        </section>

        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Data</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://rickandmortyapi.com/api/character" className="text-white" target="_blank">
                    Ver mas...
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Documentacion</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://rickandmortyapi.com/documentation/#character-schema" className="text-white" target="_blank">
                  Ver mas...
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">repositorio</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://github.com/rossvel-hub/RETO-VINFE" className="text-white" target="_blank">
                  Ver mas...
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">historia R&M</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://es.wikipedia.org/wiki/Rick_y_Morty#:~:text=La%20serie%20sigue%20las%20desventuras,viajes%20espaciales%2C%20temporales%20e%20intergal%C3%A1cticos." className="text-white" target="_blank">
                  Ver mas...
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "#171a4a" }}>
        © 2020 Copyright:
        <a
          className="text-white"
          href="https://github.com/rossvel-hub?tab=repositories"
        >
          [ AV ] Alma Velazquez
        </a>
      </div>
    </footer>
  );
};

export default Footer;
