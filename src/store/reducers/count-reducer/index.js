import * as AT from '../../../constants';

export default function countReducer(state = 1, { type }) {
  switch (type) {
    case AT.INCREMENT_COUNT:
      return state + 1;
    case AT.DECREMENT_COUNT:
      return state > 0 ? state - 1 : state
    default:
      return state;
  }
}
