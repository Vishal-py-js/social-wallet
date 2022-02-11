import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
// import Button from './Shared/Button';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import React from 'react';
import Profile from './Pages/Profile';
import Transaction from './Pages/Transactions';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className='links'>
              <a href='signup'>Signup</a><br/>
              <a href='home'>Home</a><br/>
              <a href='profile'>Profile</a><br/>
            </div>
          </Route>
          
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/transactions' component={Transaction} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
