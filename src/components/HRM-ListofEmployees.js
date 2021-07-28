import React,{Component} from 'react';
import {Table} from 'reactstrap';


class Listofemployees extends Component{
    renderEmployee(employee){

    }
    render(){
        return(
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Male/ Female</th>
                        <th>Active/ Not Active</th>
                        <th>Permenant/ Contractual</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.employees.map((employees) => {
                            return (
                              <tr>
                              <td>N/A</td>
                              <td>{employees}</td>
                              <td>N/A</td>
                              <td>N/A</td>
                              <td>N/A</td>
                              <td>N/A</td>
                              <td>N/A</td>
                              <td>N/A</td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </Table>
        )
    }
    }
    export default Listofemployees;