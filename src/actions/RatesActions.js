export const LOAD_RATES_REQUEST = 'LOAD_RATES_REQUEST'
export const LOAD_RATES_SUCCESS = 'LOAD_RATES_SUCCESS'

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


    // homework
    /*$.ajax
    succes(data) {
      dispatch({
        type: LOAD_RATES_SUCCESS,
        data,
      })
    }*/

  }
}

