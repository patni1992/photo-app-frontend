import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router'

export default function(ComposedComponent) {
  class Authenticate extends Component {
    state = {
      redirect: false
    }
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.setState({
          redirect: true
        })
      }
    }
    render() {
      if(this.state.redirect) {
        return <Redirect to='/auth'/>;
      }
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  return connect(mapStateToProps)(Authenticate);
}
