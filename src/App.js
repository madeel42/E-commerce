import React from "react";
import Home from "./components/home/home";
import modelComponent from "./components/productpart/products/cardsModel/cardsModel";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {UserProvider} from './components/header/useContext'
import Cart from "./components/productpart/products/cart/cart";
const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
      {/* <Home/> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/products/:id" component={modelComponent} /> */}
      </Switch>
      {/* <Route path="/products" component={modelComponent}/> */}

      <Route path="/cart" component={Cart} />
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;
