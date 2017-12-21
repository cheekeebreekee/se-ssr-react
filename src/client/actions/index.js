import axios from 'axios';

export const FETCH_PRICES = 'fetch_prices';
export const fetchPrice = () => async dispatch => {
  const res = await axios.get('http://www-int1.schneider-electric.com/ru/ru/tests/se-example-pages/work/symexjson.jsp');
  dispatch({
    type: FETCH_PRICES,
    payload: res
    });
};