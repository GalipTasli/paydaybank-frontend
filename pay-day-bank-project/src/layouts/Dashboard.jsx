import React from 'react'
import Menu2 from '../pages/Menu2'
import {  Grid } from 'semantic-ui-react'
import UserList from '../pages/UserList'


export default function Dashboard() {
    return (
        <div  >
            
     
           <Grid >
               <Grid.Row>
                   <Grid.Column width={4}>
                        <Menu2></Menu2>
                   </Grid.Column>
                   <Grid.Column width={12}>
                   <UserList></UserList>
                   </Grid.Column>
               </Grid.Row>
               
           </Grid>
        
           
        </div>
    )
}
