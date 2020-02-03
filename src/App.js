import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import SignInandSignUp from './components/SignIn-and-SignUp/SignIn-and-SignUp';
import {auth, createUserProfileDocument} from './Firebase/FirebaseUtils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/User/UserActions';

class App extends React.Component{
 

  unsubscribeFomAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFomAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
            })
            });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFomAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
