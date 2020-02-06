import { FETCH_BOOKS, UPDATE_PAGENATION , FETCH_BOOK} from "../actions/actionTypes";



export const booksReducer =  (state = [], action) => {

  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export const currentBookReducer =  (state = {}, action) => {

  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};




const initialState = {
  totalBooks: 0,
  firstBookIndex: 0,
  booksPerPage: 12,
  currentPage: 1,
  numberOfPages: 7
}


export const paginationReducer =  (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_PAGENATION:
      return Object.assign({}, state, {totalBooks: action.payload.totalBooks, firstBookIndex: action.payload.firstBookIndex, currentPage: (action.payload.firstBookIndex/ state.booksPerPage+1)});
    default:
      return state;
  }
};


