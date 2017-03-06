import {
  LOAD_RATES_REQUEST, // eslint-disable-line no-unused-vars
  LOAD_RATES_SUCCESS,
} from '../actions/RatesActions'

const initialState = {
  data: [],
  isFetching: false,
}

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case LOAD_RATES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case LOAD_RATES_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      }
    default:
      return state
  }
  // isFetching -> true
  // data пришла -> [...]
}
