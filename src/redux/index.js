import { createStore } from "redux";

const actionIncrease = {
    type: "increase"
}

const actionDecrease = {
    type: "decrease"
}

function reducer(state, action) {
    if(action.type === "increase") {
        return state + 1;
    } else if (action.type === "decrease") {
        return state - 1; 
    }
    return state;
}

// 传入reducer和state
const store = createStore(reducer, 100);

console.log(store);
console.log(store.getState());
// store.dispatch(actionIncrease);
store.dispatch(actionDecrease);
console.log(store.getState());

