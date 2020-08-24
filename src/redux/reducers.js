import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';
import contentCar from './reducers/Reducer.ContentCar';

const rootReducer = combineReducers({
    authReducer,
    contentCar,
});

export default rootReducer;
