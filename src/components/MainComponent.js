import React,{Component} from 'react'
import Header from './MainHeader';
import Footer from './MainFooter';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home';
import HRMApp from './HRM';
import LogisticsApp from './Logistics';

import {addEmployee,addGood} from '../redux/ActionCreators';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state=>{
    return{
      employees:state.employees,
      goods:state.goods
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    
    addEmployee: (employeeId,firstname,lastname,telnum,email,gender,active,permanentContractual) =>dispatch(addEmployee(employeeId,firstname,lastname,telnum,email,gender,active,permanentContractual)),
    resetAddEmployeeForm:()=>{dispatch(actions.reset('employee'))},
    addGood:(goodId,goodName,qty,packedUnpacked,recievedOn,recievedBy,retentionPeriod,dispatchingDate) =>dispatch(addGood(goodId,goodName,qty,packedUnpacked,recievedOn,recievedBy,retentionPeriod,dispatchingDate)),
    resetAddGoodForm:()=>{dispatch(actions.reset('good'))}
  });
  

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>       
                <TransitionGroup>
            <CSSTransition  classNames="page" timeout={300}>
              <Switch >
                  <Route path='/home' component={() => <Home employees={this.props.employees} goods={this.props.goods}/>} />
                  <Route path='/hrm' component={() => <HRMApp employees={this.props.employees} addEmployee={this.props.addEmployee} resetAddEmployeeForm={this.props.resetAddEmployeeForm}/>} />
                  <Route path='/logistics' component={()=><LogisticsApp employees={this.props.employees} goods={this.props.goods} addGood={this.props.addGood} resetAddGoodForm={this.props.resetAddGoodForm}/>} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer/>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
