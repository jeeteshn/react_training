import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact'
import {Provider} from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contacts Manager v1.0"/>
          <div className="container">
            <AddContact></AddContact>
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
