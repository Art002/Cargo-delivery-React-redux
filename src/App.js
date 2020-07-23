import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Containers/Header/header';
import MainContent from './Containers/MainContent/mainContent';
import TransportPage from './Containers/TransportPage/transportPage';
import Cart from './Containers/Cart/cart';
import Filter from './Containers/Filter/filter';
import './App.css';

const App = () => {
  
  return (
    <div className="App">     
        <Route path='*' component={Header}/>
        <Route path='/:id' component={TransportPage}/>
        <Route path='/cart' component={Cart}/>
        <Route exact path='/' component={Filter}/>
        <Route exact path='/' component={MainContent}/>
    </div>
  )
}

export default App;
