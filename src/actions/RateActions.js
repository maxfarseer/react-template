import {
  LOAD_RATE_BY_ID_REQUEST,
  LOAD_RATE_BY_ID_SUCCESS,
} from '../constants/Rate'

export function getRateById(id) {
  return (dispatch) => {

    dispatch({
      type: LOAD_RATE_BY_ID_REQUEST,
    })

    setTimeout(() => {
      dispatch({
        type: LOAD_RATE_BY_ID_SUCCESS,
        data: {
          name: 'Name ' + id,
        },
      })
    }, 2000)

  }
}
