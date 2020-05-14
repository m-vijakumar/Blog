import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects';
import Blogpage from './components/Blogpage';


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogpage" component={Blogpage} />
        
      </Router>
    </div>
  );
}

export default App;
