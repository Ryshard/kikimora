import React from 'react';
import { Route } from 'react-router';
import Template from 'components/template';
import Home from 'containers/home';

export const routes = (
	<Route component={Layout}>
		<Route path="/" component={Home}/>
	</Route>
);