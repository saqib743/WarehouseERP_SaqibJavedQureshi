import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Employees} from './Employees';
import { Goods } from './Goods';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form'
import { InitialEmployee,InitialGood } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            employees: Employees,
            goods:Goods,
            ...createForms({
                employee:InitialEmployee,
                good:InitialGood
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}