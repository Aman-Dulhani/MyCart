import React from 'react';
import './App.css';
import { BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails'


const App = () => {
    return(
      <div className='box'>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/cart' component={ Cart } />
            <Route path='/details' component={ ProductDetails } />
          </Switch>
        </Router>
      </div>
    )
}

export default App;
