import countReducer from './index';
import * as actions from '../actions';

describe('Count Reducer', () => {
  it('should increment count', () => {
    const result = countReducer(1, actions.incrementCatCount())
    expect(result).toEqual(2);
  });

  it('should decrement count', () => {
    const result = countReducer(1, actions.decrementCatCount())
    expect(result).toEqual(0)
  });
});
