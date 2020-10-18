import { fetchUsersSuccess } from "./ActionTypes";
import response from "./response";

export const fetchUsersAction = () => async (dispatch) => {
  dispatch(fetchUsersSuccess(response));
};
