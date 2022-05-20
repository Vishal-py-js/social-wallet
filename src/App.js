import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
// import Button from './Shared/Button';
import styled from "styled-components";
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import React from 'react';
import Profile from './Pages/Profile';
import Transaction from './Pages/Transactions';
import Sidebar from './Shared/Sidebar';
import Chat from './Shared/Chat';
import { useSelector } from 'react-redux';
import HashModal from './Shared/HashModal';
import Searchbar from './Shared/SearchBar';
import Wallet from './Pages/Wallet';
import UserProfile from './Pages/UserProfile';
import FollowerProfile from './Pages/FollowerProfile';
import EditProfile from './Pages/EditProfile';
import LandingPage from './Pages/Landing';

const Container = styled.div`
  width: ${
    props=>props.chatDisplay&&props.fullScreen?"65.9vw":"100vw"
  };
  width: ${
    props=>props.chatDisplay&&props.fullScreen?"0":
            props.chatDisplay==true&&props.fullScreen==false?"65.9vw":
            "100vw"
  };
  //width: 65vw;
  transition: width 0.8s;
  position: absolute;
  overflow-x: hidden;
`

function App() {

  const chatDisplay = useSelector(state=>state.chat)
  const hashDisplay = useSelector(state=>state.hash)
  const searchDisplay = useSelector(state=>state.search)
  const fullScreen = useSelector(state=>state.fullScreenChat)
  console.log(searchDisplay);

  return (
    <div className="App">
      <Container fullScreen={fullScreen} chatDisplay={chatDisplay}>
        {
          searchDisplay?<Searchbar />:""
        }
          
        {
          hashDisplay?<HashModal />:""
        }
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <div className='links'>
                <a href='signup'>Signup</a><br/>
                <a href='home'>Home</a><br/>
                <a href='editprofile'>Profile</a><br/>
                <a href='wallet'>Wallet</a><br/>
                <a href='user'>User Profile</a><br/>
                <a href='follower'>Follower Profile</a><br/>
              </div>
              {/* <LandingPage /> */}
            </Route>
            
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/home' component={Home} />
            {/* <Route exact path='/profile' component={Profile} /> */}
            <Route exact path='/editprofile' component={EditProfile} />
            <Route exact path='/transactions' component={Transaction} />
            <Route exact path='/wallet' component={Wallet} />
            <Route exact path='/user' component={UserProfile} />
            <Route exact path='/follower' component={FollowerProfile} />
          </Switch>
        </Router>
      </Container>
      {/* {
        chatDisplay?
        <div className='chat' id="idOne">
          <Chat />
        </div>
        :""
      } */}
        {/* <div className='chat' id="idOne"> */}
          <Chat />
        {/* </div> */}

    </div>
  );
}

export default App;
