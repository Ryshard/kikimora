import React from 'react';
import { connect } from 'react-redux';

const sampleAction = () => (dispatch, getState) => {
	return dispatch({
		type: "SAMPLE_ACTION",
		data: {
			foo: 'Abc',
			bar: 'ARD'
		}
	});
};

export class SampleForm extends React.Component {
  	constructor(props) {
    	super(props);
	}
	render() {
        return (
        	<div>
        	<button onClick={sampleAction}>Click.me</button>
        	</div>
        );
	}
}

const mapStateToProps = (state) => ({
  foo: state.foo
});


export default connect(
  mapStateToProps,
  { sampleAction }
)(SampleForm);