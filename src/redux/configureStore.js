import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Employees} from './Employees';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form'
import { InitialEmployee } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            employees: Employees,
            ...createForms({
                employee:InitialEmployee
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}