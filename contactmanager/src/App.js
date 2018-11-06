import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contacts Manager v1.0"/>
        <div className="container">
          <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555"/>
          <Contact name="Karen Smith" email="karen@gmail.com" phone="333-333-3333"/>
        </div>
      </div>
    );
  }
}

export default App;