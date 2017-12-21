import { FETCH_PRICES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRICES:
      return action.payload.data;
    default:
      return state;
  }
};