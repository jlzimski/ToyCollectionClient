import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Home from './components/site/Home';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
