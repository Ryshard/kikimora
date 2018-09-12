import React from 'react';
import { connect } from 'react-redux';

class Template extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}

	render() {
		const { children } = this.props;
		console.log('children', children);
		return (
			<div key="1">{children}</div>
		);
	}
};

export default Template;
