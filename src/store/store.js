import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk  from 'redux-thunk';
import combineReducer from './combineReducer'

const initialState={}

const middleware=[thunk];

const store=createStore(
    combineReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;