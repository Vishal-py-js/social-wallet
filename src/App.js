import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
// import Button from './Shared/Button';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className='links'>
              <a href='signup'>Signup</a><br/>
            </div>
          </Route>
          
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
