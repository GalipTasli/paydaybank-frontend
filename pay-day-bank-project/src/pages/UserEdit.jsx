import React from 'react'
import {Button,Form,  Input} from 'semantic-ui-react'

export default function UserEdit() {
    return (
        <div>
          
              <Form  >
                  <Form.Field 
                  id='form-input-control-name'
                  control={Input}
                  label='Adı:'
                  placeholder='Adı*'
                />
                
              
                <Form.Field
                  id='form-input-control-title'
                  control={Input}
                  label='Takma İsmi:'
                  placeholder='Takma İsmi*'
                />
                <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='info@infonal.com'   
              />
              <Form.Field
                  id='form-input-control-password'
                  control={Input}
                  label='Şifre:'
                  placeholder='şifre*'
                />
         
              <Button primary size="big">   Kaydet </Button>
            </Form>
          
            
        </div>
    )
}
