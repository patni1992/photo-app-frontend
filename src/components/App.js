import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PhotoDetail from "./PhotoDetail";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddPhotos from "./AddPhotos";
import { withRouter } from "react-router-dom";
import profilePage from "./ProfilePage";
import ProfileSettings from "./ProfileSettings";
import { clearAlert } from "../redux/actions/alertActions";
import AuthPage from "./authForms/AuthPage";
import Alert from "./Alert";
import RequireAuthorization from "./RequireAuthorization";
import RequireAuthentication from "./RequireAuthentication";
import { Content, FullPageImg } from "./styledComponents/ui";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Alert
          onRemove={this.props.clearAlert}
          notification={this.props.alert}
        />
        <Navbar />
        <Route
          path="/auth"
          render={() => {
            return (
              <FullPageImg>
                <AuthPage />
              </FullPageImg>
            );
          }}
        />
        <Content>
          <Route exact path="/" component={RequireAuthentication(Gallery)} />
          <Route
            path="/addPhotos"
            component={RequireAuthentication(AddPhotos)}
          />
          <Route
            path="/photo/:id"
            component={RequireAuthentication(PhotoDetail)}
          />
          <Route
            path="/profile/:userId"
            component={RequireAuthentication(profilePage)}
          />
          <Route
            path="/profileSettings/:userId"
            component={RequireAuthorization(
              RequireAuthentication(ProfileSettings)
            )}
          />
        </Content>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { clearAlert }
  )(App)
);
