import React from 'react'
import Menu2 from '../pages/Menu2'
import {  Grid } from 'semantic-ui-react'
import UserList from '../pages/UserList'
import ProductList from '../pages/ProductList'
import UserEdit from '../pages/UserEdit'
import {Route} from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';
import Navi from '../pages/Navi';


export default function Dashboard() {
    return (
        <div>
            
     
           <Grid>
               <Grid.Row>
                   <Grid.Column width={4}>
                        <Menu2></Menu2>
                   </Grid.Column>
                   <Grid.Column width={12}>
                   <Route exact path="/Dashboard/" component={ProductList}></Route>  
                    <Route exact path="/Dashboard/ProductList" component={ProductList}></Route>
                    <Route exact path="/Dashboard/ProductList/ProductDetails" component={ProductDetails}></Route>
                    <Route exact path="/Dashboard/UserList" component={UserList}></Route>
                    <Route exact path="/Dashboard/UserList/UserEdit" component={UserEdit}></Route>
                   </Grid.Column>
               </Grid.Row>
               
           </Grid>
        
           
        </div>
    )
}
