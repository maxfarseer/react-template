import {
  LOAD_RATES_REQUEST,
  LOAD_RATES_SUCCESS,
  LOAD_RATES_FAILURE,
  ADD_RATE,
} from '../constants/Rates'

const initialState = {
  data: [],
  isFetching: false,
  error: null,
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

    case LOAD_RATES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.text,
      }

    case ADD_RATE:
      return {
        ...state,
        data: state.data.concat(action.item),
      }

    default:
      return state
  }
}
