import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import deckReducer from './deckReducer';

const rootReducer = combineReducers({
  cards: cardReducer,
  decks: deckReducer,
});

export default rootReducer;
