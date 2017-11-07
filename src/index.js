import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import Navigation from './containers/Navigation';
import Home from './containers/Home';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Navigation>
          <Route path ="/" component={Home} />
        </Navigation>
      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
