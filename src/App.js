import React from 'react';
import Header from './components/header/Header.component';
import Homepage from './pages/homepage/Homepage.component';
import HatsPage from './pages/hats-page/HatsPage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
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
