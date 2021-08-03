import React,{Component} from 'react';
import Listofgoods from './Logistics-ListofGoods'

import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import AddGood from './Logistics-AddGood';


class Logistics extends Component{
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
                    <h1>Logistics Module</h1>
                </div>
            </div>
            <div className='row row-content'>
                <div className="col-12 col-sm-3">
                    <Button color="success" onClick={this.toggleModal}>Add Good ( {this.props.goods.goods.length} )</Button>
                </div>
            </div>
            <div className='row row-content'>
                <div className="col-12">
                    <Listofgoods goods={this.props.goods}/>
                </div>
            </div>
            <div className='col-12'>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg" >
                        <ModalHeader toggle={this.toggleModal}>Add Good</ModalHeader>
                        <ModalBody>
                        <AddGood employees={this.props.employees} addGood={this.props.addGood} resetAddGoodForm={this.props.resetAddGoodForm}/>
                        </ModalBody>
                </Modal>
            </div>
        </div>
    )
}
}
export default Logistics;