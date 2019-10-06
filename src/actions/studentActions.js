import { SET_STUDENT } from './types';

// Set Student
export const setStudent = data => {
    return {
        type: SET_STUDENT,
        payload: data
    };
};