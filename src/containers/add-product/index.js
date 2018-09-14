import React from 'react';
import { connect } from 'react-redux';

class AddProduct extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			currentValue: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillReceiveProps(props) {
		console.log('new props', props);
		const {text} = props;
		if(text) {
			this.setState({text});
		}
	}
	handleClick() {
		const {currentValue} = this.state;
		this.props.sendText(currentValue);
	}

	handleChange() {
		const value = this.refs.textInput.value;
		this.setState({ currentValue: value});
	}

	render() {
		const { text } = this.state;
		return (
			<div>
			<h1>Add Product</h1>
			<div>
				<input type="text>" onChange={this.handleChange} ref="textInput"/>
				<button onClick={this.handleClick}>Send</button>
			</div>
			{ text && <h2>{text}</h2>}
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
		sendText: (text) => {
			dispatch({
				type: 'SENDING_TEXT',
				data: { text }
			});
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(AddProduct)
