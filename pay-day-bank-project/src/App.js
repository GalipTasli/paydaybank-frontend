import React from 'react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Login from './layouts/Login';
import Register from './layouts/Register';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/Register" component={Register}></Route>
      <Route exact path="/Dashboard" component={Dashboard}></Route> 
      
      
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
     
      </Container>
      
    </div>
    
  );
}

export default App;
