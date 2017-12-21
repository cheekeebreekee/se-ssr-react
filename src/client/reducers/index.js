import { combineReducers } from 'redux';
import  pricesReducers from './pricesReducer';

export default combineReducers({
  prices: pricesReducers
})

