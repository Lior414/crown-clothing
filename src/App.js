import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path ='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;