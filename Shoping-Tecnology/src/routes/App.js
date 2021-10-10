import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import SmartPhone from '../containers/SmartPhone';
import Laptop from '../containers/Laptop';
import Pc from '../containers/Pc';
import Accessories from '../containers/Accessories';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import '../style/components/styles.css';
import AppContext from '../context/AppContext';
import useProducts from '../hooks/useProductos';

const App = () =>{

  const inicial = useProducts();
  const isEmpty = Object.keys(inicial.state).length;

  return(
    <>
    {isEmpty > 0 ? (
    <AppContext.Provider value={inicial}>
     <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pc" component={Pc} />
            <Route exact path="/phone" component={SmartPhone} />
            <Route exact path="/laptop" component={Laptop} />
            <Route exact path="/accessories" component={Accessories} />
            <Route component={NotFound} />
        </Switch>
      </Layout>
     </BrowserRouter>
     </AppContext.Provider>) : <h1>Cargando...</h1>}
     </>
    )}
export default App;