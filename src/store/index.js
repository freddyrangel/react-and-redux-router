import { createStore, applyMiddleware } from 'redux';
import isomorphicFetch                  from 'isomorphic-fetch'
import logger                           from './middleware/logger.js';
import thunk                            from './middleware/thunk.js';
import rootReducer                      from './reducers';

const middleware = applyMiddleware(thunk({ isomorphicFetch }), logger);

const store = createStore(rootReducer, middleware);

export default store;
