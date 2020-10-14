import React from 'react';
import './App.css';
import { BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return(
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/cart' component={ Cart } />
          </Switch>
        </Router>
      </div>
    )
}

export default App;
