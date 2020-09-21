import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';
import contentCarReducer from './reducers/Reducer.ContentCar';
import postReducer from './reducers/Reducer.Post';

const rootReducer = combineReducers({
    authReducer,
    contentCarReducer,
    postReducer,
});

export default rootReducer;
