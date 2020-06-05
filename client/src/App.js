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

import {Helmet} from 'react-helmet'

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>

    <Helmet>
      
    <meta name="description" content="Munikoti Vijaykumar" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="hostname" content="munikotivijaykumar.xyz" />
    <meta name="expected-hostname" content="github.com" />
    <meta property="og:site_name" content="munikotivijaykumar" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="munikotivijaykumar" />
    <meta name="theme-color" content="#ffffff" />   
    <meta property="og:url" content="http://munikotivijaykumar.xyz" />
    <meta name="twitter:title" content="munikotivijaykumar - Overview" />
    <meta name="twitter:description" content="munikotivijaykumar" />
    <meta property="og:description" content="munikoti vijaykumar " />
    <meta property="profile" content="munikotivijaykumar" />

    <title>Munikoti Vijaykumar</title>

    <link rel="apple-touch-icon" sizes="57x57" href="./images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="./images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="./images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="./images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="./images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="./images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="./images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="152x152" href="./images/android-chrome-512x512.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="./images/android-chrome-192x192.png" />
    
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
    <link rel="icon" type="image/png"  sizes="16x16" href="./images/favicon-16x16.png" />
    </Helmet>

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
