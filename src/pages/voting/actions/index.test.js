import * as AT      from '../../../constants';
import * as actions from './index.js';

describe('Actions', () => {
  describe('Thunks', () => {
    describe('fetchCatImage()', () => {

      const thunk = actions.fetchCatImage();

      it('should return a thunk', () => {
        expect(typeof thunk).toEqual('function');
      });

      it('should dispatch pending action', (done) => {
        const mockDispatch = jest.fn();
        const mockGetState = jest.fn();
        const mockFetch = () => {
          return new Promise(resolve => resolve({ url: 'my-url' }));
        };

        thunk(mockDispatch, mockGetState, { isomorphicFetch: mockFetch })
          .then(() => {
            const pendingDispatchArg = mockDispatch.mock.calls[0][0];
            expect(pendingDispatchArg.type).toEqual(AT.FETCH_CAT_DATA_PENDING);
            done();
          })
      });

      it('if successful, should dispatch success action', (done) => {
        const mockDispatch = jest.fn();
        const mockGetState = jest.fn();
        const mockFetch = () => new Promise(resolve => resolve({ url: 'my-url' }));
        thunk(mockDispatch, mockGetState, { isomorphicFetch: mockFetch })
          .then(() => {
            const successDispatchArg = mockDispatch.mock.calls[1][0];
            expect(successDispatchArg.type).toEqual(AT.FETCH_CAT_DATA_SUCCESS);
            expect(successDispatchArg.payload.url).toEqual('my-url');
            done();
          })
      });

      it('if unsuccessful, should dispatch error action', async () => {
        const mockDispatch = jest.fn();
        const mockGetState = jest.fn();
        const mockFetch = () => new Promise((resolve, reject) => reject('my error'));
        const result = await thunk(mockDispatch, mockGetState, { isomorphicFetch: mockFetch });
        const errorDispatch = mockDispatch.mock.calls[1][0];
        expect(errorDispatch.payload).toEqual('my error');
      });
    });
  });
});
