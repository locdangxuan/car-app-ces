import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';
import contentCar from './reducers/Reducer.ContentCar';
import postReducer from './reducers/Reducer.Post';

const rootReducer = combineReducers({
    authReducer,
    contentCar,
    postReducer,
});

export default rootReducer;
