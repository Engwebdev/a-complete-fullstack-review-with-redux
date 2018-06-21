import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewProduct from './components/NewProduct/NewProduct';
import Products from './components/Products/Products';

export default (
  <Switch>
    <Route exact path="/products" component={Products} />
    <Route path="/products/new" component={NewProduct} />
  </Switch>
);
