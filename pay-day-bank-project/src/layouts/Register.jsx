import { Formik , Form, Field,ErrorMessage} from 'formik'
import React from 'react'
import * as Yup from "yup"
import { FormField, Button, Label,Image,Segment } from "semantic-ui-react";
import UserService from "../services/userService";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function register() {
  const schema = Yup.object({
    emailAddress: Yup.string().required("mail adresi zorunludur"),
    name: Yup.string().required(" isim zorunludur"),
    password: Yup.string().required(" şifre zorunludur"),
    title: Yup.string().required(" takma isim zorunludur")
  })
  const initialValues={emailAddress:"",name:"",password:"",title:"",id:0}
  
 
  return (
    <div>
      
       <Image src='http://infonal.com/wp-content/uploads/2015/03/main-logo.png'   fluid />
       <Segment>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit= {(values)=>{
        let UserAdd={
          emailAddress:values.emailAddress,
          name:values.name,
          password:values.password,
          title:values.title,
          id: values.id

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
              <Field name="emailAddress" placeholder="email adres"></Field>
              <ErrorMessage name="emailAddress" render={error=>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>İsim*</Label>
              <Field name="name" placeholder="adı "></Field>
              <ErrorMessage name="name" render={error=>
                    <Label pointing basic color="red" content={error}></Label>
                  }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Takma İsim*</Label>
                <Field name="title" placeholder="takma isim "></Field>
                <ErrorMessage name="title" render={error=>
                      <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Şifre*</Label>
                <Field name="password" placeholder="şifre "></Field>
                <ErrorMessage name="password" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                          }></ErrorMessage>
            </FormField>
           
           <FormField>
           
             <Button type="button" primary onClick={handleSubmit}> <Link to={"/"}> Kaydet</Link></Button>
             
             
           </FormField>
    
        </Form>
        )}
      </Formik>
      </Segment>
    </div>
  )
}
