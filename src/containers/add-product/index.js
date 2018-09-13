import React from 'react';
import { connect } from 'react-redux';

class AddProduct extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}

	render() {
		return (
			<h1>Add Product</h1>
		);
	}
};

export default AddProduct;
