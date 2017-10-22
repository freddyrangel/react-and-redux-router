import * as AT from '../../../constants';

export default function votingReducer(state = { url: null }, { type, payload }) {
  switch (type) {
    case AT.FETCH_CAT_DATA_SUCCESS:
      return payload;
    default:
      return state;
  }
}
