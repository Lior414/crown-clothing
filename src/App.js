import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Buy a fucking hat</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route path ='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;