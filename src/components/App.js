import React, { Component } from "react";
import { Route } from "react-router-dom";
import PhotoDetail from "./PhotoDetail";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddPhotos from "./AddPhotos";
import profilePage from "./ProfilePage";
import ProfileSettings from "./ProfileSettings";
import AuthPage from "./authForms/AuthPage";
import Alert from "./Alert";
import RequireAuthorization from "./RequireAuthorization";
import RequireAuthentication from "./RequireAuthentication";
import { Content, FullPageImg } from "./styledComponents/ui";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    red: "#f44242",
    green: "#1cb94e"
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="app">
          <Alert />
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
      </ThemeProvider>
    );
  }
}

export default App;
