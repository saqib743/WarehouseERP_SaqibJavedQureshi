import * as ActionTypes from './ActionTypes'

export const Employees = (state = {
        isLoading:true,errMess:null,employees:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EMPLOYEE:
        var employee = action.payload;
        return {...state,isLoading:false,errMess:null,employees:state.employees.concat(employee)}
    

        default:
          return state;
      }
};