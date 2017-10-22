export default ({ getState }) => next => action => {
  next(action);
  console.group();
  console.log('Current Action:', action);
  console.log('New State', getState());
  console.groupEnd();
}
