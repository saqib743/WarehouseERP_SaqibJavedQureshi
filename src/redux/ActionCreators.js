import { url } from "../shared/url";
import * as ActionTypes from './ActionTypes';

export const addEmployee = (employeeId,firstname,lastname,telnum,email,gender,active,permanentContractual) => ({
    type: ActionTypes.ADD_EMPLOYEE,
    payload: {employeeId:employeeId,
                firstname:firstname,
                lastname:lastname,
                telnum:telnum,
                email:email,
                gender:gender,
                active:active,
                permanentContractual:permanentContractual}
});

export const addGood = ( goodId,goodName,qty,packedUnpacked,recievedOn,recievedBy,retentionPeriod,dispatchingDate) => ({
    type: ActionTypes.ADD_GOOD,
    payload: {goodId:goodId,
                goodName:goodName,
                qty:qty,
                packedUnpacked:packedUnpacked,
                recievedOn:recievedOn,
                recievedBy:recievedBy,
                retentionPeriod:retentionPeriod,
                dispatchingDate:dispatchingDate}
});

export const addEmployeet = (employeeId,firstname,lastname,telnum,email,gender,active,permanentContractual) => {
    console.log("2");
    // const constructEmployee={
    //         employeeId:employeeId,
    //         firstname:firstname,
    //         lastname:lastname,
    //         telnum:telnum,
    //         email:email,
    //         gender:gender,
    //         active:active,
    //         permanentContractual:permanentContractual
    //     }
    //     console.log("1");
    //     //addEmployeeRedux(JSON.stringify(constructEmployee));
    //     console.log(constructEmployee);
    //     console.log(constructEmployee);
}

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