// Constants
export const USER_GET_PROFILE = 'user/get_profile';
export const USER_GET_PROFILE_IN_PROGESS = 'user/get_profile_in_progress';
export const USER_GET_PROFILE_SUCCESS = 'user/get_profile_success';
export const USER_GET_PROFILE_ERROR = 'user/get_profile_error';
export const USER_GET_PROFILE_RESET = 'user/get_profile_reset';

// Initial State
const initialState = {
  profile: null,
  loaded: false,
  loading: false,
  users: [],
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET_PROFILE_IN_PROGESS: {
      return { ...state, loading: true };
    }
    case USER_GET_PROFILE_SUCCESS: {
      const { users } = action.payload;
      return { ...state, users, loaded: true, loading: false };
    }
    case USER_GET_PROFILE_ERROR: {
      return { ...state, loading: false };
    }
    case USER_GET_PROFILE_RESET: {
      return { ...state, users: [] };
    }
    default:
      return state;
  }
};

// Actions
export const getProfiles = dispatch => () => {
  dispatch({
    type: USER_GET_PROFILE_IN_PROGESS,
  });
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: USER_GET_PROFILE_SUCCESS,
        payload: { users },
      });
    })
    .catch(err => {
      dispatch({
        type: USER_GET_PROFILE_ERROR,
        payload: err.message,
        error: true,
        meta: {
          error: err,
        },
      });
    });
};

export const resetProfiles = () => ({
  type: USER_GET_PROFILE_RESET,
});
