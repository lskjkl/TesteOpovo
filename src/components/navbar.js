import React from 'react';


const Navbar = props => {
  return (

    <nav className="navbar navbar-expand-md navbar-dark nav-color">

      <div className="navbar-header">
        <a className="navbar-brand" to="/"><img className="img-logo" src="../images/logo-opovo.png"></img></a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarMainToggler"
        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <section className="collapse navbar-collapse" id="navbarMainToggler">
        <div className="navbar-nav ml-auto">
        </div>
      </section>

    </nav>

  );
}

export default Navbar;