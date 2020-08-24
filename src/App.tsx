import React, { Suspense, FC } from 'react';
import { Route } from 'react-router-dom';
import Header from './Containers/Header/header';
import MainContent from './Containers/MainContent/mainContent';
import Filter from './Containers/Filter/filter';
import Loading from './Components/Loading/loading';
import './App.css';

const TransportPage = React.lazy(() => import('./Containers/TransportPage/transportPage'));
const Cart = React.lazy(() => import('./Containers/Cart/cart'))

const App: FC = () => {
  return (
    <div className="App">     
        <Route path='*' render={() => Header}/>
        <Suspense fallback={<Loading />}>
          <Route path='/:id' render={() => TransportPage}/>
          <Route path='/cart' render={() => Cart}/>
        </Suspense>
        <Route exact path='/' render={() => Filter}/>
        <Route exact path='/' render={() => MainContent}/>
    </div>
  )
}

export default App;
