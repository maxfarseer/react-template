import {
  LOAD_RATES_REQUEST,
  LOAD_RATES_SUCCESS,
  LOAD_RATES_FAILURE,
  RATES_FILTER,
  ADD_RATE,
} from '../constants/Rates'

/*
  dispatch({
    type,
    ...
  })
*/

export function loadRates() {

  return (dispatch) => {

    dispatch({
      type: LOAD_RATES_REQUEST,
    })

    $.ajax({ //eslint-disable-line no-undef
      url: 'http://localhost:3000/static/json/fakeData.json',
      cache: false,
      success: function(data) {
        dispatch({
          type: LOAD_RATES_SUCCESS,
          data,
        })
      },
      error: function(err) {
        dispatch({
          type: LOAD_RATES_FAILURE,
          text: err.statusText,
        })
      },
    })

  }
}

export function addRate(params) {
  return {
    type: ADD_RATE,
    item: params,
  }
}

export function countryFilter(filterName, filterValue) {
  return {
    type: RATES_FILTER,
    filterName,
    filterValue,
  }
}
