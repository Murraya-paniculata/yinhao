import { createStore, bindActionCreators } from "redux";
import * as actionTypes from './action/actiontype';
import * as numberActions from './action'

function reducer(state, action) {
    if(action.type === actionTypes.INCREASE) {
        return state + 1;
    } else if (action.type === actionTypes.DECREASE) {
        return state - 1; 
    } else if (action.type === actionTypes.SETVALUE) {
        return action.payload
    }
    return state;
}

// 传入reducer和state
const store = createStore(reducer, 100);

const boundActions = bindActionCreators(numberActions, store.dispatch);

console.log(store);
console.log(store.getState());
// store.dispatch(actionIncrease);
// store.dispatch(numberActions.getIncreaseAction());
boundActions.getDecreaseAction();
console.log(store.getState());
boundActions.getIncreaseAction();
console.log(store.getState());
