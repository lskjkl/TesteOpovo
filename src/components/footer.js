import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer className=" footer page-footer bg-info font-small pt-4 text-light ">
      <div className="container-fluid text-center text-md-left ">
        <div className="row ">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5><Link className="navbar-brand text-light" to="/">TesteOpovo</Link></h5>
            <p>Página web feita para teste de aprediz front end.</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 bg-dark">© 2020 Copyright
      </div>
    </footer>
  );
}

export default Footer;