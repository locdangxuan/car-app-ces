import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';
import contentCarReducer from './reducers/Reducer.ContentCar';
import postReducer from './reducers/Reducer.Post';
import userReducer from './reducers/Reducer.User';

const rootReducer = combineReducers({
    authReducer,
    contentCarReducer,
    postReducer,
    userReducer,
});

export default rootReducer;
