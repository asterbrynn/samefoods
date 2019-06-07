import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				lol
				<br/>
				<button>
					<Link to="/edit-list" style={{color: "black", textDecoration: "none"}}>Edit Your List</Link>
				</button>
			</div>
		)
	}
}