export default (dependencies) => ({ getState, dispatch }) => next => action => {
  typeof action === 'function' ? action(dispatch, getState, dependencies) : next(action);
}
