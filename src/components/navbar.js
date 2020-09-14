import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (

    <nav className="navbar navbar-expand-md navbar-dark bg-dark">

      <div className="navbar-header">
        <Link className="navbar-brand" to="/">TesteOpovo</Link>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarMainToggler"
        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <section className="collapse navbar-collapse" id="navbarMainToggler">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" to="/">Inicio</Link>
          <Link className="nav-item nav-link" to="/sobre">Sobre</Link>
        </div>
      </section>

    </nav>

  );
}

export default Navbar;