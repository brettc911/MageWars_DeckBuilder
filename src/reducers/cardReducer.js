import { FETCH_CARDS } from '../actions/types'


const INITIAL_STATE = {

  cardList: []

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_CARDS:
      return {...state, cardList: action.payload}

    default:
      return state;
  }
}
