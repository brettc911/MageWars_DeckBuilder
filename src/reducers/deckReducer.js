import { FETCH_DECKS } from '../actions/types'


const INITIAL_STATE = {

  deckList: []

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_DECKS:
      return {...state, deckList: action.payload}

    default:
      return state;
  }
}
