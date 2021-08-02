import React,{Component} from 'react';
import {Button, Label, Col,Row} from 'reactstrap'
import {Control,Form,Errors} from 'react-redux-form';




class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.addEmployee(values.employeeId,values.firstname,values.lastname,values.telnum,values.email,values.gender,values.active,values.permanentContractual);
        this.props.resetAddEmployeeForm();
        
    }
    
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Form model="employee" onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className = "form-group">
                                <Label htmlFor="lastname" md={2}>Employee Id</Label>
                                <Col md={10}>
                                    <Control.text model=".employeeId" id="employeeId" name="employeeId"
                                        placeholder="Employee Id"
                                        className="form-control"
                                        />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control" />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control" />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="telnum" md={2}>Telephone No.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Telephone No." className="form-control" />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control" />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="gender" md={2}>Gender</Label>
                                <Col md={10}>
                                    <Control.select model=".gender" name="gender" defaultValue= "Select" className="form-control">
                                        <option disabled>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Control.select>
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="active" md={2}>Active</Label>
                                    <Col md={10}>
                                        <Control.select model=".active" name="active" defaultValue= "Select" className="form-control">
                                            <option disabled>Select</option>
                                            <option>Active</option>
                                            <option>Not Active</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="permanentContractual" md={2}>Permanent/ Contractual</Label>
                                <Col md={10}>
                                        <Control.select model=".permanentContractual" name="permanentContractual" defaultValue= "Select" className="form-control">
                                            <option disabled>Select</option>
                                            <option>Permanent</option>
                                            <option>Contractual</option>
                                        </Control.select>
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    
                                    Save
                                    
                                        
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddEmployee;


