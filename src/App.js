import React, { Component } from 'react';
import './App.css';
import Background from './images/food-bg.jpg';
import MainLogic from './components/AuthLayout';
import classes from './css/Global.module.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route path="/login" component={SignIn} />>
        </Switch>
      </div>
    );
  }
}

export default App;
