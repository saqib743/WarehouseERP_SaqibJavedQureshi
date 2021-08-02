import React,{Component} from 'react';
import Listofemployees from './HRM-ListofEmployees';

import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

import AddEmployee from './HRM-AddEmployee';
 


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
            <div className='col-12'>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                        <ModalHeader toggle={this.toggleModal}>Add Employee</ModalHeader>
                        <ModalBody>
                        <AddEmployee addEmployee={this.props.addEmployee} resetAddEmployeeForm={this.props.resetAddEmployeeForm}/>
                        </ModalBody>
                </Modal>
            </div>
        </div>
        
    )
}
}
export default HRMApp;