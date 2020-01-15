import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import SignInandSignUp from './components/SignIn-and-SignUp/SignIn-and-SignUp';

/* const HatsPage = () => {
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
} */
function App() {
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

export default App;
