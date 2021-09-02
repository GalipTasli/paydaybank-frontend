import React from 'react'
import {Button,Checkbox,Form,  Input,TextArea,} from 'semantic-ui-react'
  

export default function ProductDetails() {
    return (
        <div>
             <Form >
      
          <Form.Field
            control={Input}
            label='Ürün Adı:'
            placeholder='Ürün Adı*'
          />
          <Form.Field
            control={Input}
            label='Fiyat:'
            placeholder='Fiyatı*'
          />
         
         <Form.Field 
       
          control={Checkbox}
          label='Mevcudiyet'
        />
       
        <Form.Field
          control={TextArea}
          label='Ürün Açıklaması:'
          placeholder='Açıklama*'
        />
       <Button primary >Kaydet</Button>
        
      </Form>
        </div>
    )
}
