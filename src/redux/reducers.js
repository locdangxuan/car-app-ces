import { combineReducers } from 'redux';
import authReducer from './reducers/Reducer.Auth';

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;
