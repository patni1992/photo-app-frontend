import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import Dropzone from "react-dropzone";
import { editUser } from "../redux/actions/profileActions";
import InputGroup from "./common/InputGroup";

const Spacing = styled.div`
  width: 70%;
  text-align: left;
  margin: 0 auto;
  & form > * {
    margin-top: 20px;
  }
`;

const ProfilePhoto = styled.div`
  padding: 18px;
  border-radius: 50%;
  width: 120px;
  background-color: gray;

  & p {
    color: black;
  }
`;

const BtnContainer = styled.div`
  text-align: left;
`;

class ProfileSettings extends Component {
  state = {
    img: null,
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    biography: ""
  };
  onDrop = acceptedFiles => {
    console.log(acceptedFiles);
    this.setState({
      img: acceptedFiles[0]
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.set("firstName", this.state.firstName);
    bodyFormData.set("lastName", this.state.lastName);
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("img", this.state.img);
    bodyFormData.set("country", this.state.country);
    bodyFormData.set("biography", this.state.biography);
    this.props.editUser(this.props.match.params.userId, bodyFormData);
  };
  renderProfileImgData = () => {
    if (this.state.img) {
      return (
        <img
          style={{
            width: "100%"
          }}
          src={this.state.img.preview}
          alt=""
        />
      );
    }
    return (
      <div style={{ textAlign: "center" }}>
        <p>Try dropping a file here, or click to select a file to upload.</p>
        <p>Only *.jpeg and *.png images will be accepted</p>
      </div>
    );
  };
  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <h2>Profile</h2>
        <p>Add information about yourself to share on your profile.</p>
        <Spacing>
          <Dropzone
            style={{
              background: "white",
              border: "3px black dotted",
              padding: "5px",
              width: "140px",
              fontSize: "10px",
              margin: "0 0 15px",
              cursor: "pointer"
            }}
            onDrop={this.onDrop}
            accept="image/jpeg, image/png"
            multiple={false}
          >
            {this.renderProfileImgData}
          </Dropzone>
          <form onSubmit={this.onSubmit}>
            <InputGroup
              value={this.state.firstName}
              placeholder="First Name"
              name="firstName"
              onChange={this.onChange}
            />
            <InputGroup
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
              placeholder="Last Name"
            />
            <InputGroup
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email"
            />
            <InputGroup
              name="country"
              onChange={this.onChange}
              value={this.state.country}
              placeholder="Country"
            />
            <InputGroup
              name="biography"
              value={this.state.biography}
              onChange={this.onChange}
              placeholder="Biography"
              info="write something about yourself"
            />

            <BtnContainer>
              <button
                type="submit"
                style={{
                  display: "inlineBlock",
                  padding: "10px",
                  width: "70px",
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: "#4caf50"
                }}
              >
                Save
              </button>
              <button
                style={{
                  padding: "10px",
                  width: "110px",
                  color: "white",
                  cursor: "pointer",
                  display: "inlineBlock",
                  backgroundColor: "#f44242"
                }}
              >
                Delete Account
              </button>
            </BtnContainer>
          </form>
        </Spacing>
      </Container>
    );
  }
}

export default connect(
  null,
  { editUser }
)(ProfileSettings);
