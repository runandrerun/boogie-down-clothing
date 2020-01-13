import React from 'react';
import Homepage from './pages/homepage/Homepage.component';
import HatsPage from './pages/hats-page/HatsPage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/hats/:hatsId' />
        <Route exact path ='/sneakers' />
        <Route exact path ='/sneakers/:sneakersId' />
      </Switch>
    </div>
  );
}

export default App;
