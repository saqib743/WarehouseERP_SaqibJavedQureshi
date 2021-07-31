import React,{Component} from 'react';
import Listofemployees from './HRM-ListofEmployees';

import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import AddEmployee from './HRM-AddEmployee';
 
import {Control,Form,Errors} from 'react-redux-form';

class HRMApp extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
    }
toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
    }
render(){
    return(
        <div className="container">
            <div className= "row row-content">
                <div className="col-12">
                    <h1>Human Resource Management (HRM) Module</h1>
                </div>
            </div>
            <div className='row row-content'>
                <div className="col-12 col-sm-3">
                    <Button color="success" onClick={this.toggleModal}>Add Employee ( {this.props.employees.employees.length} )</Button>
                </div>
            </div>
            <div className='row row-content'>
                <div className="col-12">
                    <Listofemployees employees={this.props.employees}/>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-dialog modal-lg">
                    <ModalHeader toggle={this.toggleModal}>Add Employee</ModalHeader>
                    <ModalBody>
                      <AddEmployee addEmployee={this.props.addEmployee} resetAddEmployeeForm={this.props.resetAddEmployeeForm}/>
                    </ModalBody>
                </Modal>
        </div>
        
    )
}
}
export default HRMApp;