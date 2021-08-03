import React,{Component} from 'react';
import {Button, Label, Col,Row} from 'reactstrap'
import {Control,Form,Errors} from 'react-redux-form';




class AddGood extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.addGood(values.goodId,values.goodName,values.qty,values.packedUnpacked,values.recievedOn,values.recievedBy,values.retentionPeriod,values.dispatchingDate);
        this.props.resetAddGoodForm();
        
    }
    
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <Form model="good" onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className = "form-group">
                                <Label htmlFor="lastname" md={2}>Good Id</Label>
                                <Col md={10}>
                                    <Control.text model=".goodId" id="gooId" name="gooId"
                                        placeholder="Good Id"
                                        className="form-control"
                                        />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="goodName" md={2}>Good Name</Label>
                                <Col md={10}>
                                    <Control.text model=".goodName" id="goodName" name="goodName" placeholder="Good Name" className="form-control" />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="qty" md={2}>Qty</Label>
                                <Col md={10}>
                                    <Control.text model=".qty" id="qty" name="qty" placeholder="Qty" className="form-control" />
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="packedUnpacked" md={2}>Packed/ Un-Packed</Label>
                                <Col md={10}>
                                    
                                    <Control.select model=".packedUnpacked" name="packedUnpacked" defaultValue= "Select" className="form-control">
                                            <option disabled>Select</option>
                                            <option>Packed</option>
                                            <option>UnPacked</option>
                                        </Control.select>
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="recievedOn" md={2}>Recieved On</Label>
                                <Col md={10}>
                                    <Control.text model=".recievedOn" id="recievedOn" name="recievedOn" placeholder="Recieved On" className="form-control" />
                                    
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="recievedBy" md={2}>Recieved By</Label>
                                <Col md={10}>
                                        <Control.select model=".recievedBy" name="recievedBy" defaultValue= "Select" className="form-control">
                                            <option disabled>Select</option>
                                            {this.props.employees.employees.map((employee)=>{
                                                return(
                                                <option>{employee.firstname}</option>
                                                )
                                            })}
                                        </Control.select>
                                </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="retentionPeriod" md={2}>Retention Period</Label>
                                    <Col md={10}>
                                    <Control.text model=".retentionPeriod" id="retentionPeriod" name="retentionPeriod" placeholder="Retention Period" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className = "form-group">
                                <Label htmlFor="dispatchingDate" md={2}>Dispatching Date</Label>
                                <Col md={10}>
                                <Control.text model=".dispatchingDate" id="dispatchingDate" name="dispatchingDate" placeholder="Dispatching Date" className="form-control" />
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
export default AddGood;