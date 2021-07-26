import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  
  render() {
    return (
     
      <BrowserRouter>
        <div>
            <Main/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;