import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import {Button,  FormField, Label } from 'semantic-ui-react'
import { Formik , Form, Field } from 'formik'

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ProductService from '../services/productService';
  

export default function ProductDetails() {
  let {id}=useParams();

  const [product,setProduct]=useState({});

  useEffect(()=>{
    let productService= new ProductService()
    productService.getByProductId(id).then(result=>setProduct(result.data.data))
  },[])

 
  const initialValues={available:null,description:"",price:null, name:"",id:null}
 
  
    return (
        <div>
            
      <Formik
      initialValues={initialValues}
      onSubmit= {(values)=>{
        
        if(values.available===null)
        values.available=product.available.toString()
        if(values.available==="ture")
        values.available=true
        if(values.available==="false")
        values.available=false
        if(values.name==="")
        values.name=product.name
        if(values.description==="")
        values.description=product.description
        if(values.price===null)
        values.price=product.price
        
        console.log(values)
        let ProductAdd={
          available:values.available,
          name:values.name,
          description:values.description,
          price:values.price,
          id:product.id

        }
        let productService = new ProductService()
        productService.putProduct(ProductAdd).then((result)=>{
          toast.success("Kullanıcı güncelendi")
        })
        
      
        
        
      }}
      >
        
        {({handleSubmit})=>(
         <Form className="ui form" onSubmit={handleSubmit} >
           <FormField>
           <Label> İsmi*</Label>
              <Field name="name" placeholder={product.name}></Field>              
           </FormField>

           <FormField>
           <Label>Fiyatı*</Label>
           
              <Field name="price" placeholder={product.price}></Field> 
           </FormField>

           <FormField>
           <Label>Açıklaması*</Label>
                <Field name="description" placeholder={product.description}></Field>              
           </FormField>
           <Label>Mevcudiyet*</Label>
           <Field as="select" name="available" >
             <option value={null}>---------</option>
             <option value="ture">stokta ürün var</option>
             <option value="false">stokta ürün yok</option>
           </Field>  
           < br></br>   
           <FormField>
           
             <Button primary onClick={handleSubmit}> <Link to={"/Dashboard/ProductList"}>  Kaydet </Link></Button>
             
             
           </FormField>
    
        </Form>
        )}
      </Formik>
      
        </div>
    )
}
