import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import SignIn from "./SignIn"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="hackernews">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />                          
      </Switch>
    </Router>
  );
}

export default App;
