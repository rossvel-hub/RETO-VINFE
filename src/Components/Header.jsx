import React from 'react'

const Header = () => {
  return (
    <div className="container div-header">
    <a className="navbar-brand" href="#">
       <img
         src="/logo-mario.png"
         alt="Logo"
         width="150"
         height="70"
         className="d-inline-block align-text-top img-header"
       />
     </a>
   
     <section className="mb-4 ">
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
 </div>
  )
}

export default Header