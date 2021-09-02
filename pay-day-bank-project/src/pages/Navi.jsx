import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Menu,Icon } from 'semantic-ui-react'

export default function Navi() {
    return (
      <div>
           <Menu inverted >
               <Container>
               <Menu.Item >
                 <Link to="/Dashboard">
                  <Icon name='home' size='big' />   <br /> Pay Day Bank
                  </Link>
                   </Menu.Item>
        

        <Menu.Menu position='right'>
          

          <Menu.Item>
            <Link to="/">
            <Button primary>  <Icon name='sign-out' size='big' />  Çıkış Yap </Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
               </Container>
      
      </Menu>
      </div>
    )
}
