import {
  LOAD_RATES_REQUEST,
  LOAD_RATES_SUCCESS,
  LOAD_RATES_FAILURE,
  ADD_RATE,
  RATES_FILTER,
} from '../constants/Rates'

const initialState = {
  data: [],
  isFetching: false,
  error: null,
  filter: {
    //country: 'RU/UK',
    country: null,
    rating: null,
  },
}

export default function reducer(state = initialState, action) {
  let newData

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

    case RATES_FILTER:
      newData = []

      state.data.forEach(item => {
        if (item[action.filterName] === action.filterValue) {
          newData.push(item)
        }
      })

      return {
        ...state,
        data: newData,
      }

    default:
      return state
  }
}
