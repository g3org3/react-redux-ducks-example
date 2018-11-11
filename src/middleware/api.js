export default store => next => action => {
  console.log(action, store);
  next(action);
};
