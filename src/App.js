import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component.jsx'
import './App.css';


function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route path ='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;