import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import { Post } from './containers/Post';

function App() {
  return (
    <Router>
    <div className="App">
      {/* Hello from App! */}
      <Header/>
      <Hero />
      <Route path="/" exact component={Home} />
      <Route path="/contact-us" component={ContactUs} />
      <br />
      <Route path="/post/:slug" component={Post} />
    </div>
    </Router>
  );
}

export default App;
