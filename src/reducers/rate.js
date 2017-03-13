import {
  LOAD_RATE_BY_ID_REQUEST,
  LOAD_RATE_BY_ID_SUCCESS,
} from '../constants/Rate'

const initialState = {
  isFetching: false,
  data: {},
}

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case LOAD_RATE_BY_ID_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case LOAD_RATE_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      }

    default:
      return state
  }
}
