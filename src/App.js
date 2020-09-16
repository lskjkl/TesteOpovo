import React, { Component } from 'react';

import './estilo.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';


class App extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
          <Navbar />
          <Home/>
          <Footer/>
        </div>
    );
  }
}

export default App;
