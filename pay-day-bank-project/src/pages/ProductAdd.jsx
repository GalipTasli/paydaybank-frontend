import React from 'react'
import * as Yup from "yup"
import { Formik , Form, Field,ErrorMessage} from 'formik'
import { FormField, Button, Label,Segment } from "semantic-ui-react";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ProductService from '../services/productService';

export default function ProductAdd() {
    const schema = Yup.object({
        name: Yup.string().required("isim zorunludur"),
        description: Yup.string().required(" ürün açıklaması zorunludur"),
        price: Yup.number().required("ürün fiyatı zorunludur."),
        available: Yup.boolean().required("ürünün elmizde olup olmadığını bildirmeniz zorunludur.")
      
      },[])
        var global
      const initialValues={available:null,description:"",price:null, name:"",id:null}
    return (
        <div>
             <Segment>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit= {(values)=>{
         console.log(values)
         if(values.available==="true")
         global=true
         if(values.available==="false")
         global=false
        let productNew={
            name:values.name,
            description:values.description,
            available:global,
            price:values.price,
            id: values.id

        }
        let prodoctService= new ProductService()
        prodoctService.addProduct(productNew).then((result)=>{
            toast.success("Ürün eklendi.")
        })
        
      }}
      >
        {({handleSubmit})=>(
         <Form className="ui form" onSubmit={handleSubmit} >
           <FormField>
           <Label>İsmi*</Label>
              <Field name="name" placeholder="İsmi"></Field>
              <ErrorMessage name="name" render={error=>
                <Label pointing basic color="red" content={error}></Label>
              }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Açıklaması*</Label>
              <Field name="description" placeholder="açıklaması "></Field>
              <ErrorMessage name="description" render={error=>
                    <Label pointing basic color="red" content={error}></Label>
                  }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Fiyatı*</Label>
                <Field name="price" placeholder="Fiyatı"></Field>
                <ErrorMessage name="price" render={error=>
                      <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
           </FormField>
           <FormField>
           <Label>Mevcudiyet*</Label>
           <Field as="select" name="available" >
           <option value={null}>---------</option>
             <option value="true">stokta ürün var</option>
             <option value="false">stokta ürün yok</option>
           </Field>
           <ErrorMessage name="available" render={error=>
                      <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
           </FormField>
           <FormField>
           <Link to="/">
             <Button type="button" primary onClick={handleSubmit}>  Kaydet</Button>
             </Link>
             
           </FormField>
    
        </Form>
        )}
      </Formik>
      </Segment>
        </div>
    )
}
