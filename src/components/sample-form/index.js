import React from 'react';
import { connect } from 'react-redux';
import { sampleAction } from 'actions';

export class SampleForm extends React.Component {
  	constructor(props) {
    	super(props);
    	this.renderText = this.renderText.bind(this);
    	this.state = {};
	}

	componentWillReceiveProps(props) {
		console.log('componentWillReceiveProps', props);
		if(props.text){
			this.setState({text: props.text})
		}
	}
	renderText() {
		const { text } = this.state;
		return(
			<div class="info">
				{text}
			</div>
		);
	}
	
	handleCLick() {
		console.log('handleCLick');
		console.log('sampleAction', sampleAction);
		this.props.sampleAction({ text: 'Alma Materra'});
	}

	render() {
		const { text } = this.state;
        return (
        	<div>
        	<button onClick={this.handleCLick}>Click.me</button>
        	{text && this.renderText() }
        	</div>
        );
	}
}

const mapStateToProps = (state) => ({
  text: state.text
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const actions = {
    sampleAction: data => sampleAction({ dispatch, data })
  };

  return Object.assign({}, stateProps, actions, ownProps);
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SampleForm);