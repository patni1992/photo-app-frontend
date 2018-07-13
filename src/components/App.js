import React, { Component } from "react";
import { Route } from "react-router-dom";
import PhotoDetail from "./PhotoDetail";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddPhotos from "./AddPhotos";
import profilePage from "./ProfilePage";
import AuthPage from "./authForms/AuthPage";
import RequireAuth from "./RequireAuth";
import { Content, FullPageImg } from "./styledComponents/ui";

class App extends Component {
  render() {
    return (
      <div className="app">
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
          <Route exact path="/" component={RequireAuth(Gallery)} />
          <Route path="/addPhotos" component={RequireAuth(AddPhotos)} />
          <Route path="/photo/:id" component={RequireAuth(PhotoDetail)} />
          <Route path="/profile/:userId" component={RequireAuth(profilePage)} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
