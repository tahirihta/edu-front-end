import { SET_MODAL } from '../actions/types';

const initialState = {
    modal: {
        createModal: false,
        searchModal: false,
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                modal: action.payload
            };
        default:
            return state;
    }
}