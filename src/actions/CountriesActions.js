import {
  LOAD_COUNTRIES_SUCCESS,
} from '../constants/Countries'

export function loadCountries() {
  return (dispatch) => {
    dispatch({
      type: LOAD_COUNTRIES_SUCCESS,
      data: [
        {
          code: 'RU',
          name: 'Russia',
        },
        {
          code: 'UK',
          name: 'England',
        },
      ],
    })
  }
}
