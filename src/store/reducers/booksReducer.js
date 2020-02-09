import {
  FETCH_BOOKS,
  FETCH_BOOK,
} from "../actions/actionTypes";

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export const currentBookReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};
