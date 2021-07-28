import React,{Component} from 'react'
import Header from './MainHeader';
import Footer from './MainFooter';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home';
import HRMApp from './HRM';
import LogisticsApp from './Logistics';
import AddEmployee from './HRM-AddEmployee';
import {addEmployee} from '../redux/ActionCreators';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state=>{
    return{
      employees:state.employees
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    
    addEmployee: (firstname) =>dispatch(addEmployee(firstname)),
    resetAddEmployeeForm:()=>{dispatch(actions.reset('employee'))}
  });
  

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>       
                <TransitionGroup>
            <CSSTransition  classNames="page" timeout={300}>
              <Switch >
                  <Route path='/home' component={Home} />
                  <Route path='/hrm' component={() => <HRMApp employees={this.props.employees} addEmployee={this.props.addEmployee} resetAddEmployeeForm={this.props.resetAddEmployeeForm}/>} />
                  <Route path='/logistics' component={LogisticsApp} />
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
