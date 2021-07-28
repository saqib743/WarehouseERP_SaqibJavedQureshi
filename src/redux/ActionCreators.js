import { url } from "../shared/url";
import * as ActionTypes from './ActionTypes';

export const addEmployee = (employee) => ({
    type: ActionTypes.ADD_EMPLOYEE,
    payload: employee
});

export const postEmployee = (firstname) => (dispatch)=>{
    const newEmployee={
        firstname:firstname
                    }
        newEmployee.date = new Date().toISOString();
        return fetch(url+'employees',{
            method: 'POST',
            body: JSON.stringify(newEmployee),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'same-origin'
        })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else {
                var error=new Error('Error '+ response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        
        .then(response=>response.json())
        .then(employee=>{alert("Thank you for your !\n"+JSON.stringify(employee))})
        .catch(error=>{console.log('Post  ', error.message)
        alert('Your could not be posted \n Error: '+error.message);
        })
}