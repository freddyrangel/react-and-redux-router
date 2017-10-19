import rootReducer from './index';
import * as actions from '../../actions';

describe('Root Reducer', () => {
  it('should not raise errors', () => {
    expect(rootReducer).toBeDefined()
  });
});
