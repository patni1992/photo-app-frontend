import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authorization extends Component {
    componentWillMount() {
      if (this.props.auth.user.id != this.props.match.params.userId) {
        this.props.history.goBack();
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }
  return connect(mapStateToProps)(Authorization);
}
