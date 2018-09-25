import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'containers/home';
import AddProduct  from 'containers/add-product';

const routes = (
	<div>
	<Route exact path="/" component={Home}/>
	<Route exact path="/index.html" component={Home}/>
	<Route path="/add-product" component={AddProduct}/>
	</div>
);

export default routes;