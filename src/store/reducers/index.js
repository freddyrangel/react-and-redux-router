import { combineReducers } from 'redux';
import countReducer        from './count-reducer';
import votingReducer       from './voting-reducer';

export default combineReducers({
  catCount : countReducer,
  catData  : votingReducer
});
