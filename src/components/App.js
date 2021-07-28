import React from 'react';
import Header from './Header';
import Main from './Main';
import Productos from './Productos';
import '../components/views/index.css';




const App = () => {
    return (
      <>
      <Header    />
      <Main   titulo="Bienvenido a CoderHouse"         />
      <Productos       />
      </>
    );
}
 
export default App;
