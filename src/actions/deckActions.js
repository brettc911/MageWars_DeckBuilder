import {
  FETCH_DECKS,
  CREATE_DECK,
  AUTO_SAVE
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

export const createDeck = (deck) => {
  let newDeck = JSON.stringify(deck);
  return (dispatch) => {
    fetch('https://secret-gorge-71512.herokuapp.com/api/deck', {
      method: 'POST',
      body: newDeck,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      return dispatch({
        type: CREATE_DECK,
        payload: data.results
      })
    })
  }
}



export const autoSave = (saveDeck, id) => {
  let deck = JSON.stringify(saveDeck)
  return (dispatch) => {
    fetch(`https://secret-gorge-71512.herokuapp.com/api/deck/${id}`, {
      method: 'POST',
      body: deck,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      return dispatch({
        type: CREATE_DECK,
        payload: data.results
      })
    })
  }
}
