import React,{Component} from 'react'
import Header from './MainHeader';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home';
import HRMApp from './HRM';
import LogisticsApp from './Logistics';

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>       
                <TransitionGroup>
            <CSSTransition  classNames="page" timeout={300}>
              <Switch >
                  <Route path='/home' component={Home} />
                  <Route path='/hrm' component={HRMApp} />
                  <Route path='/logistics' component={LogisticsApp} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
            </div>
        )
    }
}
export default Main;