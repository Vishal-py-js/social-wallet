import './App.css';
import {Switch,Route,Link} from 'react-router-dom'
import Button from './Shared/Button';
import Signup from './Pages/Signup';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/signup'>
            <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
