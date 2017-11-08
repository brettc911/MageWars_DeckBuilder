import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import Navigation from './containers/Navigation';
import Home from './containers/Home';
import DeckBuilder from './containers/DeckBuilder';
import Cards from './containers/Cards';
import Decks from './containers/Decks';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Navigation>
            <Route path ="/builder" component={DeckBuilder} />
            <Route path ="/cards" component={Cards} />
            <Route path ="/decks" component={Decks} />
            <Route exact path ="/" component={Home} />
          </Navigation>
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
