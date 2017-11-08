import {
  FETCH_DECKS

} from './types'


export const fetchCards = () => {
  return (dispatch) => {
    fetch('https://secret-gorge-71512.herokuapp.com/api/card', {
      method: 'GET',
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return dispatch({
        type: FETCH_CARDS,
        payload: data
      })
    })
  }
}
