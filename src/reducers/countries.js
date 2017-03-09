import {
  LOAD_COUNTRIES_SUCCESS,
} from '../constants/Countries'

const initialState = {
  data: [],
  isFetching: false,
  error: null,
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      }


    default:
      return state
  }
}
