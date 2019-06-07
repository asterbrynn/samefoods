import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserFoodList from './components/UserFoodList';

export default (
	<Switch>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/edit-list" component={UserFoodList} />
	</Switch>
)