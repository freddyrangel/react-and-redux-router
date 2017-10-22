import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'react-router-redux'
import createHistory                    from 'history/createBrowserHistory'
import isomorphicFetch                  from 'isomorphic-fetch'
import logger                           from './middleware/logger.js';
import thunk                            from './middleware/thunk.js';
import rootReducer                      from './reducers';

const history = createHistory();

const middleware = applyMiddleware(routerMiddleware(history), thunk({ isomorphicFetch }), logger);

const store = createStore(rootReducer, middleware);

export { history, store };
