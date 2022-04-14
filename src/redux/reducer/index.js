import loginUserReducer from './loginuser';
import usersRuducer from './users';
import { combineReducers } from 'redux';

export default combineReducers({
    loginUser: loginUserReducer,
    users: usersRuducer
})
