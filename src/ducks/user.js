// Constants
export const USER_GET_PROFILE = 'user/get_profile';

// Initial State
const initialState = {
  profile: null,
  loaded: false,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Actions
export const getUserProfile = () => ({
  type: USER_GET_PROFILE,
});
