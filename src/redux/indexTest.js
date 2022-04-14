import reducer from './reducer';
import { loginUserAction } from './action/loginUserAction';
import { createAdduser, createDeleteUser, createSetUser } from './action/userAction';
import { createStore, bindActionCreators } from 'redux';
import { v4 as uuid } from 'uuid';

const store = createStore(reducer);

console.log(store.getState());

const boundActions = bindActionCreators({loginUserAction, createSetUser, createDeleteUser, createAdduser}, store.dispatch);

boundActions.loginUserAction(true);

boundActions.createAdduser({
    id: uuid(),
    name: "用户3",
    age: 33
})

// store.dispatch(loginUserAction(true));

console.log(store.getState());