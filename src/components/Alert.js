import NotificationSystem from "react-notification-system";
import React, { Component } from "react";

class Alert extends Component {
  componentWillReceiveProps(newProps) {
    const { message, level, title } = newProps.notification;
    if (message) {
      this.notificationSystem.addNotification({
        message,
        level,
        autoDismiss: 6,
        title
      });
      this.props.onRemove();
    }
  }

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />;
  }
}

export default Alert;
