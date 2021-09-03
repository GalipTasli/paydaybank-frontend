import { Formik , Form, Field} from 'formik'
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react'
import { FormField, Button, Label } from "semantic-ui-react";
import UserService from "../services/userService";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function UserEdit() {
  let {id}=useParams();

  const [user,setUser]=useState({});

   useEffect(()=>{
     let userService = new UserService()
    userService.getByUserId(id).then(result=> setUser(result.data.data))
   },[])
 
  const initialValues={emailAddress:"",name:"",password:"",title:"",id:0}
  
 
  return (
    <div>
      
       
      
      <Formik
      initialValues={initialValues}
      onSubmit= {(values)=>{
        console.log(values)
        if(values.emailAddress==="")
        values.emailAddress=user.emailAddress
        if(values.name==="")
        values.name=user.name
        if(values.password==="")
        values.password=user.password
        if(values.title==="")
        values.title=user.title
        console.log(values)
        let UserAdd={
          emailAddress:values.emailAddress,
          name:values.name,
          password:values.password,
          title:values.title,
          id: id

        }
        let userService = new UserService()
       userService.putUser(UserAdd).then((result)=>{
          toast.success("kullanıcı eklendi")
        })
      
        
        
      }}
      >
        {({handleSubmit})=>(
         <Form className="ui form" onSubmit={handleSubmit} >
           <FormField>
           <Label>Email Adresi*</Label>
              <Field name="emailAddress" placeholder={user.emailAddress}></Field>
              
           </FormField>
           <FormField>
           <Label>İsim*</Label>
              <Field name="name" placeholder={user.name}></Field>
            
           </FormField>
           <FormField>
           <Label>Takma İsim*</Label>
                <Field name="title" placeholder={user.title}></Field>
                
           </FormField>
           <FormField>
           <Label>Şifre*</Label>
                <Field name="password" placeholder={user.password}></Field>
                
            </FormField>
           
           <FormField>
           <Link to={"/Dashboard/userList"}>
             <Button primary onClick={handleSubmit}>  Kaydet</Button>
             </Link>
             
           </FormField>
    
        </Form>
        )}
      </Formik>
      
    </div>
  )
}
