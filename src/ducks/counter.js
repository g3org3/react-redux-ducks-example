// Constants
export const COUNTER_ADD = 'counter/add';
export const COUNTER_SUB = 'counter/sub';

// Initial State
const initialState = 0;

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      return state + action.payload;
    case COUNTER_SUB:
      return state - action.payload;
    default:
      return state;
  }
};

// Actions
export const addCounter = () => ({
  type: COUNTER_ADD,
  payload: 1,
  meta: {
    throttle: {
      wait: 500,
      trailing: false,
    },
  },
});

export const subCounter = () => ({
  type: COUNTER_SUB,
  payload: 1,
});
