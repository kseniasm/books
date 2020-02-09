import { FETCH_BOOKS, UPDATE_PAGENATION, FETCH_BOOK, UPDATE_SEARCH } from "./actionTypes";
import googleBooks from "../../api/googleBooks";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "./asyncActions";

export const fetchBook = id => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const response = await googleBooks.get(`/volumes/${id}`);

    dispatch({ type: FETCH_BOOK, payload: response.data });

    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());
    return error;
  }
};

export const fetchBooks = (title, firstBookIndex) => async (
  dispatch,
  getState
) => {
  const { booksPerPage, totalBooks } = getState().pagination;

  try {
    dispatch(asyncActionStart());
    const response = await googleBooks.get(
      `/volumes?q=${title}&maxResults=${booksPerPage}&startIndex=${firstBookIndex}`
    );

    if (!response.data.items) {
      throw new Error("Couldn't find more books");
    }
     dispatch({ type: FETCH_BOOKS, payload: response.data.items });

    let numOfBooks = totalBooks || response.data.totalItems;
     dispatch({
      type: UPDATE_PAGENATION,
      payload: { totalBooks: numOfBooks, firstBookIndex: firstBookIndex }
    });

     dispatch({type: UPDATE_SEARCH, payload: title})

    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());
    return error;
  }
};

export const fetchNextBooks = (title, firstBookIndex) => {
  return fetchBooks(title, firstBookIndex);
};

export const findBooks = title => {
  return  fetchBooks(title, 0);
};
