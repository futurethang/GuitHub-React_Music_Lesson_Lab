import * as types from './actionTypes';
import { loadVideo } from '../videoFunctions';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    loadVideo()
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}