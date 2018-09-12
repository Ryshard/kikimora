import React from 'react';
import { connect } from 'react-redux';

export class Template extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}

	render() {
		const { children } = this.props;

		return (
			<div key="1">{children}</div>
		);
	}
};