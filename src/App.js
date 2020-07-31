import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Header from './Containers/Header/header';
import MainContent from './Containers/MainContent/mainContent';
import Filter from './Containers/Filter/filter';
import Loading from './Components/Loading/loading';
import './App.css';

const TransportPage = React.lazy(() => import('./Containers/TransportPage/transportPage'));
const Cart = React.lazy(() => import('./Containers/Cart/cart'));

const App = () => {
  return (
    <div className="App">     
        <Route path='*' component={Header}/>
        <Suspense fallback={<Loading />}>
          <Route path='/:id' component={TransportPage}/>
          <Route path='/cart' component={Cart}/>
        </Suspense>
        <Route exact path='/' component={Filter}/>
        <Route exact path='/' component={MainContent}/>
    </div>
  )
}

export default App;
