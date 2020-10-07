import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { verifyToken } from 'redux/middlewares/Middlewares.Authorization';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, verifyToken));

export default store;
