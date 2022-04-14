import * as loginUserActions from '../action/loginUserAction';

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case loginUserActions.LOGINUSER:
            return payload
        default:
            return state;
    }
}
