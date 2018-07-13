import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../redux/actions/authActions";

const Menu = styled.nav`
  display: block;
  width: 100%;
  background-color: #333;
  line-height: 1.6em;
  font-weight: 400;
  text-align: center;
  position: relative;
  margin: 0 auto;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  & li {
    display: inline-block;
    transition: opacity 0.8s;

    & a {
      user-select: none;
      display: block;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      padding: 10px 20px;
    }
  }

  & ul {
    list-style-type: none;
    margin: 0 auto;
    padding-left: 0;
    text-align: center;
    width: 100%;
    background-color: #333;
    transition: max-height 0.8s;
  }

  @media (max-width: 800px) {
    padding: 20px;
    & ul {
      height: 180px;
      max-height: ${props => (props.show ? "300px" : "0")};
    }
    & li {
      display: block;
      opacity: ${props => (props.show ? "1" : "0")};
    }
  }
`;

const Hamburger = styled.div`
  position: absolute;
  display: none;
  z-index: 200;
  width: 40px;
  height: 40px;
  top: 8px;
  right: 0px;

  @media (max-width: 800px) {
    display: block;
  }

  & span {
    cursor: pointer;
    color: white;
    font-size: 25px;
  }
`;

class Navbar extends Component {
  state = {
    showMenu: false
  };

  logout = data => {
    this.props.logoutUser();
  };

  toggleClickHandler = () => {
    this.setState(prevState => {
      return { sidebar: !prevState.sidebar };
    });
  };

  toggleMenu = () => {
    this.setState(function(prevState) {
      return { showMenu: !prevState.showMenu };
    });
  };
  renderNavbar() {
    if (this.props.auth.isAuthenticated) {
      return (
        <Menu show={this.state.showMenu}>
          <Hamburger onClick={this.toggleMenu}>
            <FontAwesome name="bars" style={{}} />
          </Hamburger>

          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addphotos">Add photos</Link>
            </li>
            <li>
              <Link to={`/profile/${this.props.auth.user.id}`}>
                {this.props.auth.user.username}
              </Link>
            </li>
            <li>
              <Link to="#" onClick={this.logout}>
                Logout
              </Link>
            </li>
          </ul>
        </Menu>
      );
    } else {
      return null;
    }
  }
  render() {
    return this.renderNavbar();
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
