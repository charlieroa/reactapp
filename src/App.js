import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import './assets/css/index.css';
import NavBar from './components/NavBar';

import {
  BrowserRouter, 
  Switch,
  Route,
  Link, 
} from "react-router-dom";


const App = () => {
    return (
      <BrowserRouter>      
      <NavBar />
  <Switch>
          <Route path="/categoria/:id" exact>
            <ItemDetailContainer/>
          </Route>          
          <Route path="/" exact>
            <ItemListContainer/>
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
   </Switch>
   
      </BrowserRouter>
    );
}
 
export default App;
