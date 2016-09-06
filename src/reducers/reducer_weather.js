// we exported variable FETCH_WEATHER in our action. That way there's less risk of a spelling error screwing up the entire folow
//

import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  // because of redux-promise, this payload will be resolved request
  // it won't be the promise. it will wait till promise resolves and then sends that to reducer
  // gets the resolved promise as payload

  switch (action.type) {
    case 'FETCH_WEATHER':
      return [ action.payload.data, ...state ];

  }
  return state;
}


// return state.concat([ action.payload.data ]) same as above return
