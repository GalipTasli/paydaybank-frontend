import { Formik , Form, Field,ErrorMessage} from 'formik'
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
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
  const schema = Yup.object({
    emailAddress: Yup.string().required("mail adresi zorunludur"),
    name: Yup.string().required(" isim zorunludur"),
    password: Yup.string().required(" şifre zorunludur"),
    title: Yup.string().required(" takma isim zorunludur")
  })
  const initialValues={emailAddress:"",name:"",password:"",title:"",id:0}
  
 
  return (
    <div>
      
       
      
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit= {(values)=>{
        let UserAdd={
          emailAddress:values.emailAddress,
          name:values.name,
          password:values.password,
          title:values.title,
          id: id

        }
        let userService = new UserService()
       userService.addUsers(UserAdd).then((result)=>{
          toast.success("kullanıcı eklendi")
        })
      
        
        
      }}
      >
        {({handleSubmit})=>(
         <Form className="ui form" onSubmit={handleSubmit} >
           <FormField>
           <Label>Email Adresi*</Label>
              <Field name="emailAddress" placeholder={user.emailAddress}></Field>
              <ErrorMessage name="emailAddress" render={error=>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>İsim*</Label>
              <Field name="name" placeholder={user.name}></Field>
              <ErrorMessage name="name" render={error=>
                    <Label pointing basic color="red" content={error}></Label>
                  }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Takma İsim*</Label>
                <Field name="title" placeholder={user.title}></Field>
                <ErrorMessage name="title" render={error=>
                      <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Şifre*</Label>
                <Field name="password" placeholder={user.password}></Field>
                <ErrorMessage name="password" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                          }></ErrorMessage>
            </FormField>
           
           <FormField>
           <Link to="/">
             <Button primary onClick={handleSubmit}>  Kaydet</Button>
             </Link>
             
           </FormField>
    
        </Form>
        )}
      </Formik>
      
    </div>
  )
}
