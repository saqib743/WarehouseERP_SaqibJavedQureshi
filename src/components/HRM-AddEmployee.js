import React,{Component} from 'react';
import {Button, Label, Col,Row} from 'reactstrap'
import {Control,Form,Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';



class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.addEmployee(values.firstname);
        this.props.resetAddEmployeeForm();
    }
    
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Form model="employee" onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className = "form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        />
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