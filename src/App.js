import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './estilo.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="container-fluid p-0">
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={About} />
          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
