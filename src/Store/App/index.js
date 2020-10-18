import {
  FETCH_USERS_ERROR,
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
} from "./Types";

const initialState = {
  fetchUsersLoading: false,
  usersData: null,
  fetchUsersError: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return {
        ...state,
        fetchUsersLoading: action.payload,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        fetchUsersLoading: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
