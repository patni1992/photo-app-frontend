import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import Dropzone from "react-dropzone";
import removeFalsy from "../utils/cleanObject";
import { editUser, deleteUser } from "../redux/actions/profileActions";
import { fetchUser } from "../redux/actions/userActions";
import { selectUserById } from "../redux/selectors/userSelector";
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
  constructor(props) {
    super(props);
    this.state = {
      image: { preview: "" },
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      biography: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.profile) {
      return {
        image: { preview: props.profile.profileImage },
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        email: props.profile.email,
        country: props.profile.country,
        biography: props.profile.biography
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  onDrop = acceptedFiles => {
    this.setState({
      image: acceptedFiles[0]
    });
  };

  onChangeDisableNumbers = e => {
    const regex = /^[a-zA-Z]*$/;
    if (regex.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const bodyFormData = new FormData();
    const dataToSend = removeFalsy(this.state);
    for (let key in dataToSend) {
      bodyFormData.set(key, dataToSend[key]);
    }

    this.props.editUser(this.props.match.params.userId, bodyFormData);
  };

  onDelete = e => {
    e.preventDefault();
    this.props.deleteUser(this.props.match.params.userId);
  };

  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <h2 style={{ margin: " 0" }}>Profile</h2>
        <p>Add information about yourself to share on your profile.</p>
        <Spacing>
          <Dropzone
            style={{
              background: "white",
              border: "3px black dotted",
              padding: "5px",
              width: "280px",
              fontSize: "10px",
              cursor: "pointer"
            }}
            onDrop={this.onDrop}
            accept="image/jpeg, image/png"
            multiple={false}
          >
            <div
              style={{
                verticalAlign: "middle",
                textAlign: "center",
                width: "140px",
                display: "inline-block"
              }}
            >
              <p style={{ margin: 0 }}>
                Try dropping a file here, or click to select a file to upload.
              </p>
              <p>Only *.jpeg and *.png images will be accepted</p>
            </div>
            <img
              style={{
                width: "110px",
                height: "80px",
                verticalAlign: "middle",
                marginLeft: "10px",

                display: "inline-block"
              }}
              src={this.state.image.preview}
              alt=""
            />
          </Dropzone>
          <small
            style={{
              color: "#6c757d",
              marginTop: "8px",
              fontSize: "12px",
              display: "block"
            }}
          >
            Select a profile image
          </small>

          <form onSubmit={this.onSubmit}>
            <InputGroup
              value={this.state.firstName}
              placeholder="First Name"
              name="firstName"
              onChange={this.onChangeDisableNumbers}
            />
            <InputGroup
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChangeDisableNumbers}
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
              onChange={this.onChangeDisableNumbers}
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
                onClick={this.onDelete}
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
function mapStateToProps(state, ownprops) {
  return {
    profile: selectUserById(state, ownprops.match.params.userId)
  };
}

export default connect(
  mapStateToProps,
  { editUser, deleteUser, fetchUser }
)(ProfileSettings);
