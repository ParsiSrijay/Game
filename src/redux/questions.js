import * as ActionTypes from './ActionTypes';

export const Questions = (state = {
    errMess: null,
    questions:[]},action) => {
        switch(action.type) {
            case ActionTypes.ADD_QUESTIONS :
                return {...state, errMess: null, questions: action.payload};
            default:
                return state;
        }
};