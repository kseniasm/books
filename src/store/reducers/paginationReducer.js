import { UPDATE_PAGENATION } from "../actions/actionTypes";

const initialState = {
  totalBooks: 0,
  firstBookIndex: 0,
  booksPerPage: 24,
  currentPage: 1,
  numberOfPages: 7
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAGENATION:
      return Object.assign({}, state, {
        totalBooks: action.payload.totalBooks,
        firstBookIndex: action.payload.firstBookIndex,
        currentPage: action.payload.firstBookIndex / state.booksPerPage + 1
      });
    default:
      return state;
  }
};
