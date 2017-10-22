import { combineReducers } from 'redux';
import countReducer        from '../../pages/counter/reducer';
import votingReducer       from '../../pages/voting/reducer';

export default combineReducers({
  catCount : countReducer,
  catData  : votingReducer
});
