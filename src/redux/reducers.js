import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';
import modalReducer from './reducers/Reducer.Modal';

const rootReducer = combineReducers({
    authReducer,
    modalReducer,
});

export default rootReducer;
