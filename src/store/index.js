import { createStore, applyMiddleware } from 'redux';
import logger                           from './middleware/logger.js';
import rootReducer                      from './reducers';

const middleware = applyMiddleware(logger);

const store = createStore(rootReducer, middleware);

export default store;
