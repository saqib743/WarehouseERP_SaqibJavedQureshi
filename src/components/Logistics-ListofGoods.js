import React,{Component} from 'react';
import {Table} from 'reactstrap';


class Listofgoods extends Component{
    render(){
        return(
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Good Id</th>
                        <th>Good Name</th>
                        <th>Quantity</th>
                        <th>Pack/Unpacked</th>
                        <th>Recieved On</th>
                        <th>Recieved By</th>
                        <th>Retention Period</th>
                        <th>Dispatching Date</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.props.goods.goods.map((good) => {
                            return (
                              <tr key={good.goodId}>
                              <td>{good.goodId}</td>
                              <td>{good.goodName}</td>
                              <td>{good.qty}</td>
                              <td>{good.packedUnpacked}</td>
                              <td>{good.recievedOn}</td>
                              <td>{good.recievedBy}</td>
                              <td>{good.retentionPeriod}</td>
                              <td>{good.dispatchingDate}</td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </Table>
        )
    }
    }
    export default Listofgoods;