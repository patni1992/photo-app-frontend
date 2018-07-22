import React, { Component } from "react";
import { connect } from "react-redux";
import NotificationSystem from "react-notification-system";
import { clearAlert } from "../redux/actions/alertActions";

class Alert extends Component {
  componentWillReceiveProps(newProps) {
    const { message, level, title } = newProps.alert;
    if (message) {
      this.notificationSystem.addNotification({
        message,
        level,
        autoDismiss: 6,
        title
      });
      this.props.clearAlert();
    }
  }

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />;
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default connect(
  mapStateToProps,
  { clearAlert }
)(Alert);
