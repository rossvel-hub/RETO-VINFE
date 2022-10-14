import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="img-contacto">
        <img src="5.png" className="d-block w-100 img-contacto" alt="..." />
      </div>
      <div>
        <p>
          ......nuestra historia
        </p>
      </div>
      <div className="container cards-personajes">
      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="per4.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>
      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="per3.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>

      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="per2.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>

      <div className="card mb-4" style={{ width: "18rem", margin:"10px" }}>
        <img src="per1.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          </p>
          <a href="#" className="btn btn-dark" style={{backgroundColor:"#171a4a"}}>
            Go somewhere
          </a>
        </div>
        <div class="card-footer" style={{backgroundColor:"#6dc83d", color: "white"}}>
          Footer
        </div>
      </div>


      </div>
    </div>
  );
};

export default About;
