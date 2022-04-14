import * as actionTypes from "./actiontype";

export function getIncreaseAction() {
    return {
        type: actionTypes.INCREASE
    }
}

export function getDecreaseAction() {
    return {
        type: actionTypes.DECREASE
    }
}

export function setValueAction(newNumber: number) {
    return {
        type: actionTypes.SETVALUE,
        payload: newNumber
    }
}