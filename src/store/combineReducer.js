import {combineReducers} from 'redux'
import formReducer from './formReducer';
import counterReducer from "./reducer";

export default combineReducers({
    counter:counterReducer,
    form:formReducer,
})