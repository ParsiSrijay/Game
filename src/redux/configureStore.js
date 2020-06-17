import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Questions } from './questions';
import { Users } from './users';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        	users:Users,
            questions: Questions
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
};