import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Home extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}

	render() {
		return (
			<div>
			<h1>Home</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/addproduct">Add product</Link>
			</nav>
			<hr />
			</div>
		);
	}
};

export default Home;
