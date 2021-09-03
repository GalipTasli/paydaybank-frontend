import { Formik , Form, Field} from 'formik'
import React from 'react'
import * as Yup from "yup"
import UserService from "../services/userService";
import { Link } from 'react-router-dom'
import {FormField,  Button,Image,Grid,Label,Segment,Divider, Icon } from 'semantic-ui-react'

export default function Login() {
 
    const schema = Yup.object({
      emailAddress: Yup.string().required("mail adresi zorunludur"),
      password: Yup.string().required(" şifre zorunludur")

    })
    const initialValues={emailAddress:" ",name:" ",password:" ",title:" ",id:0}
    const dedd={ver:""}
    
    return (
        <div   >
         
       <Image src='http://infonal.com/wp-content/uploads/2015/03/main-logo.png'   fluid />
       <br></br>
       <Segment placeholder >
    <Grid columns={2} relaxed='very' stackable textAlign="center">
    <Divider vertical></Divider>
      <Grid.Row verticalAlign='middle'>
      <Grid.Column >
      
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit= {(values)=>{
        let User={
          emailAddress:values.emailAddress,
          name:values.name,
          password:values.password,
          title:values.title,
          id: values.id

        }
        let userService = new UserService()
        userService.verificationEmailandPassword(User).then((result)=>{
         
         dedd.ver=result.data.success
        
        }
        )
       
        
      }}
      >
       
        {({handleSubmit})=>(
          
         <Form  className="ui form" onSubmit={handleSubmit} >
           
           <FormField  >
             
             <Label>Email Adresi</Label>
              <Field  name="emailAddress" placeholder="email adres" ></Field>
           </FormField>
           <FormField>
           <Label>Şifre</Label>
              <Field   name="password" placeholder="Şifre "></Field>
              
           </FormField>
           
           
           <FormField>
           <Button size='big' primary onClick={handleSubmit}> <Icon name="sign-in"></Icon> Giriş Yap</Button>
             {dedd.ver===true && <meta httpEquiv="refresh" content="1;http://localhost:3000/Dashboard"></meta>
             }
             {dedd.ver===false && 
           
             <Label>lütfen bilgilerinzi doğru giriniz </Label>
             } 
           </FormField>
    
        </Form>
        
        )}
      </Formik>




      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Link to="/Register">
        <Button content=' Kayıt Ol  ' icon='signup' size='big'  primary/>
        </Link>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
    
  
  
    
        </div>
    )
}