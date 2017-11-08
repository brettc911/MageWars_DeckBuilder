import { FETCH_GROUPS } from '../actions/types'


const INITIAL_STATE = {

  cards: []

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_GROUPS:
      return {...state, cards: action.payload}

    default:
      return state;
  }
}
