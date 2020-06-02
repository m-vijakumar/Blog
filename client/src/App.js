import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects';
import Admin from './components/Admin';
import Blogpage from './components/Blogpage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';
import Error from './components/Error';
import Feedbacks from './components/Feedbacks';


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      <Router>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog/:postId/:postname" component={Blogpage} />

        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={Register} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/feedbacks" component={Feedbacks} />
        <Route exact path="/admin/post/create" component={Create} />
        <Route exact path="/admin/post/update/:postId/:postname" component={Update} />

        
        <Route  path="*" component={Error} />
        </Switch>
        
        
      </Router>
    </div>
  );
}

export default App;
