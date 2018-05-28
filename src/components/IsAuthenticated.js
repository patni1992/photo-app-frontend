import React, { Component } from 'react';
import { Connect } from 'react-redux';

export default function(ComposedComponent) {
	class Authenticate extends Component {
		componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.context.router.push('/login');
			}
		}
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return {
			isAuthenticated: state.auth.isAuthenticated
		};
	}
	return Connect(mapStateToProps)(Authenticate);
}
