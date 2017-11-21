import {
  FETCH_DECKS

} from './types'


export const fetchDecks = () => {
  return (dispatch) => {
    fetch('https://secret-gorge-71512.herokuapp.com/api/deck', {
      method: 'GET',
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      return dispatch({
        type: FETCH_DECKS,
        payload: data.results
      })
    })
  }
}
