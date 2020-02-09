import { UPDATE_SEARCH } from "../actions/actionTypes";

export const searchReducer = (state = "popular", action) => {

  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
