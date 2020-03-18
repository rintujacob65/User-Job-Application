import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Tabs,Tab} from 'react-bootstrap';
import {startSetUsers } from '../../actions/userAction'
//import { findUser } from '../../selectors/userSelector';
import FrontEndDeveloper from './FrontEndDeveloper'
import NodejsDeveloper from './NodejsDeveloper'
import MEANStackDeveloper from './MEANStackDeveloper'
import FULLStackDeveloper from './FULLStackDeveloper'
import { connect } from 'react-redux'

function AdminDashboard(props){
  if(props.users.length == 0){
    props.dispatch(startSetUsers())
}
  return(

        <Container>
            <h2>Admin Dashboard</h2>
            
        <Tabs defaultActiveKey="FrontEndDeveloper" variant="pills"
               id="uncontrolled-tab-example">
          <Tab eventKey="FrontEndDeveloper" title="FrontEndDeveloper" 
             variant="pills" >
            <FrontEndDeveloper />
          </Tab>
          <Tab eventKey="NodejsDeveloper" title="NodejsDeveloper">
            <NodejsDeveloper />
           </Tab>
          <Tab eventKey="MEANStackDeveloper" title="MEANStackDeveloper" >
            <MEANStackDeveloper />
          </Tab>
          <Tab eventKey="FULLStackDeveloper" title="FULLStackDeveloper" >
            <FULLStackDeveloper />
          </Tab>
        </Tabs>
           
        </Container>
    )
}
const mapStateToProps = (state,props) => {
  return{
       users : state.users
   }
}
export default connect(mapStateToProps)(AdminDashboard)