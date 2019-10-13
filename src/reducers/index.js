import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    student: studentReducer,
    modal: modalReducer,
});