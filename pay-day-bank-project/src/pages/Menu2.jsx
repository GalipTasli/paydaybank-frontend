import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

export default function Menu2() {
    return (
        <div>
          
         <Menu inverted pointing vertical>
        <Menu.Item>
        <Link to="/Dashboard/ProductList">
           <Button primary size= "big"  >ürünler</Button>
           </Link>
        </Menu.Item>
        <Menu.Item > 
          <Link to="/Dashboard/userList">
          <Button primary size= "big" > kullanıcılar</Button>
          </Link>
        </Menu.Item>
        
      </Menu>
        </div>
    )
}
