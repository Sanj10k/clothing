import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => {
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
