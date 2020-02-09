import { combineReducers } from "redux";
import { booksReducer, currentBookReducer } from "./booksReducer";
import { asyncReducer } from "./asyncReducers";
import { paginationReducer } from "./paginationReducer";
import { searchReducer } from "./searchReducer";

export default combineReducers({
  books: booksReducer,
  pagination: paginationReducer,
  currentBook: currentBookReducer,
  loading: asyncReducer,
  searchTerm: searchReducer
});
