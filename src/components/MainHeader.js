import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Button } from 'reactstrap';
  
import {NavLink} from 'react-router-dom';
class Header extends Component {
  constructor(props){
    super(props);
    this.state={
        isNavOpen: false
        
    }
    this.toggleNav=this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen:!this.state.isNavOpen
    });
  }
  

  render() {
    
    return(
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href="/">
              <img src="https://i.ibb.co/2qKfstw/4-fdfgdfgfgpng.png" height="50" width="60" alt="Warehouse ERP"></img>
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg">Home</span>
                  
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/hrm">
                  <span className="fa fa-info fa-lg"></span> HRM
                  
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/logistics">
                  <span className="fa fa-list fa-lg"></span> Logistics
                  
                </NavLink>
              </NavItem>
              
            </Nav>
            
                            
            </Collapse>
        </div>
      </Navbar>
      
       
       </div>
    );
  }
}

export default Header;