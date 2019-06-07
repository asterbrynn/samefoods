import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class UserFoodList extends Component {
	render() {
		return (
			<div>
				list
				<br/>
				<button>
					<Link to="/dashboard" style={{color: "black", textDecoration: "none"}}>Cancel</Link>
				</button>
			</div>
		)
	}
}