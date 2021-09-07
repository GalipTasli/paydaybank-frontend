import React,{  useState,useEffect } from "react";
import {  Table,Button } from 'semantic-ui-react'
import UserService from "../services/userService";
import { Link } from 'react-router-dom';


export default function UserList(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        let userService = new UserService()
        userService.getUsers().then(result=> setUsers(result.data.data))
    })
   
return(
    <div>
        
        <Table  celled inverted selectable>
    <Table.Header>
      <Table.Row>
      
        <Table.HeaderCell><h3>ismi</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>ünvanı</h3> </Table.HeaderCell>
        <Table.HeaderCell><h3>email adresi</h3></Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {users.map((user)=> (
       <Table.Row key={user.id}>
           
           <Table.Cell>{user.name}</Table.Cell>
           <Table.Cell>{user.title}</Table.Cell>
           <Table.Cell>{user.emailAddress}</Table.Cell>
           <Table.Cell>
           <Button.Group  >
           <Link to={"/Dashboard/UserList/UserEdit/"+user.id}>
                  <Button positive size='big' primary>Güncele</Button>
                  </Link>
                  <Button.Or primary/>
                  <Link to={"/Dashboard/UserList/deletuser/"+user.id}> 
                  <Button  size='big'  color='red'>Sil</Button>
                  </Link>
              </Button.Group>
              </Table.Cell>
       </Table.Row>
    ))}
    </Table.Body>
   </Table>
    
    </div>
)

}
