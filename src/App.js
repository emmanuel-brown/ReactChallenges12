import React from 'react';
// import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';

//pages
import Index from './pages/index';
import Products from './pages/Product';
import React2 from './pages/React2';
import Game from './pages/Game'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/React2" component={React2} />
          <Route exact path="/React2/Game" component={Game} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
