import React from 'react'

const Carousel = () => {
  return (
         <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="6000">
              <img src="/mar.jpeg" className="d-block w-100" alt="chica1" />
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <img src="/mar3.jpeg" className="d-block w-100" alt="poke2" />
            </div>

            <div className="carousel-item" data-bs-interval="6000">
              <img src="/mar4jpeg" className="d-block w-100" alt="poke4" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
   
  )
}

export default Carousel