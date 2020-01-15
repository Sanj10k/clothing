import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import SignInandSignUp from './components/SignIn-and-SignUp/SignIn-and-SignUp';
import {auth} from './Firebase/FirebaseUtils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null 
    }
  }

  unsubscribeFomAuth = null;

  componentDidMount(){
    this.unsubscribeFomAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFomAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
