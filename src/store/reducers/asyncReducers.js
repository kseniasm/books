import {ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR} from '../actions/actionTypes';


export const asyncReducer= (state=false, action ) => {

    switch (action.type){
        case ASYNC_ACTION_START:
            return true;
        case ASYNC_ACTION_FINISH:
            return false;
        case ASYNC_ACTION_ERROR:
            return false;
        default: 
            return state;
    }
}