import { SET_STUDENT } from '../actions/types';

const initialState = {
    student: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_STUDENT:
            return {
                ...state,
                student: action.payload
            };
        default:
            return state;
    }
}