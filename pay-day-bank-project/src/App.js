import React from 'react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Login from './layouts/Login';
import Register from './layouts/Register';
import {Route} from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import UserList from './pages/UserList';
import UserEdit from './pages/UserEdit';
import Navi from './pages/Navi';
import ProductAdd from './pages/ProductAdd';
import DeleteProduct from './pages/DeleteProduct';
import Deleteuser from './pages/Deleteuser';



function App() {
  
  return (

    <div className="App">
           
           
     
          <Navi></Navi>
      
          <Container className="main">
   
         <style>
      {`
     html, body {
      background-color: #252839 !important;
    }
    p {
      align-content: center;
      background-color: #495285;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 6em;
    }
    p > span {
      opacity: 0.4;
      text-align: center;
    }
  }
    `}
    </style>
    
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/Register" component={Register}></Route>
      <Route exact path="/Dashboard" component={Dashboard}></Route> 
      <Route exact path="/Dashboard/ProductList" component={ProductList}></Route>
      <Route exact path="/Dashboard/ProductList/ProductAdd" component={ProductAdd}></Route>
      <Route exact path="/Dashboard/ProductList/ProductDetails/:id" component={ProductDetails}></Route>
      <Route exact path="/Dashboard/ProductList/deleteproduct/:id" component={DeleteProduct}></Route>  
      <Route exact path="/Dashboard/UserList" component={UserList}></Route>
      <Route exact path="/Dashboard/UserList/UserEdit/:id" component={UserEdit}></Route>
      <Route exact path="/Dashboard/UserList/deletuser/:id" component={Deleteuser}></Route>
      </Container>
      
    </div>
    
  );
}

export default App;