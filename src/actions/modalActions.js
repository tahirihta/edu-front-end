import { SET_MODAL } from './types';

// Set Modal
export const setModal = data => {
    return {
        type: SET_MODAL,
        payload: data
    };
};