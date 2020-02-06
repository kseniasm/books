import {combineReducers} from 'redux';
import {booksReducer, paginationReducer, currentBookReducer} from './booksReducer';
import {asyncReducer} from './asyncReducers';

export default combineReducers({
    books : booksReducer,
    pagination: paginationReducer,
    currentBook: currentBookReducer,
    loading: asyncReducer
});