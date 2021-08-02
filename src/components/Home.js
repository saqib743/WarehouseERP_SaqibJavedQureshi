import React,{Component} from 'react';
import {Card,CardBody,CardHeader} from 'reactstrap'

class Home extends Component{

render(){
    
    return(
        <div className="container">
            <div className= "row">
                <div className="col-12">
                    <h1>Dashboards</h1>
                </div>       
                <div className='col-6 col-sm-3'>
                    <Card style={{ backgroundColor: '#05b517', borderColor: '#05b517' }}>
                        <CardHeader>
                            Total Employees
                        </CardHeader>
                        <CardBody className="text-center">
                            <h1>{this.props.employees.employees.length}</h1>
                        </CardBody>
                    </Card>
                </div>  
                <div className='col-6 col-sm-3'>
                    <Card style={{ backgroundColor: '#03d000', borderColor: '#03d000' }}>
                        <CardHeader>
                            Active Employees
                        </CardHeader>
                        <CardBody className="text-center">
                            <h1>{this.props.employees.employees.filter((employee) => employee.active === "Active").length}</h1>
                        </CardBody>
                    </Card>
                </div>           
            </div>

            <div className= "row row-content">
            <div className='col-6 col-sm-3'>
                    <Card style={{ backgroundColor: '#dbaf1d', borderColor: '#dbaf1d' }}>
                        <CardHeader>
                            Warehouse Items
                        </CardHeader>
                        <CardBody className="text-center">
                            <h1>{this.props.goods.goods.length}</h1>
                        </CardBody>
                    </Card>
                </div>    
            </div> 
        </div>
    )
}
}
export default Home;