import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./Types";

export const fetchUsersLoading = (payload) => {
  return { type: FETCH_USERS_LOADING, payload };
};

export const fetchUsersSuccess = (payload) => {
  return { type: FETCH_USERS_SUCCESS, payload };
};

export const fetchUsersError = (payload) => {
  return { type: FETCH_USERS_ERROR, payload };
};
