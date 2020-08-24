import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';
import modalReducer from './reducers/Reducer.Modal';
import contentCar from './reducers/Reducer.ContentCar';

const rootReducer = combineReducers({
    authReducer,
    modalReducer,
    contentCar,
});

export default rootReducer;
