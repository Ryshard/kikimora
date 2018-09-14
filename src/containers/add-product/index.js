import React from 'react';
import { connect } from 'react-redux';
import { path } from 'ramda';
import { saveProduct } from 'actions';

class AddProduct extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			currentValue: null
		};
		this.getInputValue = this.getInputValue.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	componentWillReceiveProps(props) {
		console.log('new props', props);
	}

	handleSave() {
		this.props.saveProduct({
			name: this.getInputValue('productName'),
			category: this.getInputValue('category')
		});
	}

	getInputValue(name) {
		return path([name, 'value'], this.refs);
	}


	render() {
		return (
			<div>
				<h1>Add Product</h1>
				<div>
					<input type="text" ref="productName" placeholder="name"/>
					<input type="text" ref="category" placeholder="category"/>				
					<button onClick={this.handleSave}>Save</button>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		text: state.newItem.text
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveProduct: (product) => {
			saveProduct(dispatch, product);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(AddProduct)
