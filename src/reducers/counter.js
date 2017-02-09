import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

export default function counter(state = initialState, action) {
    //later
    switch (action.type) {
        case types.INCREMENT:
            return { number: state.number + 1 };
        case types.DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}