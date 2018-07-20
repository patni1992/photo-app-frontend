import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Row, Col } from "react-grid-system";
import { fetchComments } from "../redux/actions/commentActions";
import { getEntitiesFromResourcsIds } from "../redux/reducers/pageReducer";
import { fetchImages, resetImages } from "../redux/actions/imageActions";
import { emptyPage } from "../redux/actions/pageActions";
import Comments from "./Comments";
import PaginationBar from "./PaginationBar";
import Link from "./common/Link";

const ImageContainer = styled.div`
  height: 185px;
  cursor: pointer;
  transition: transform 500ms ease, filter 500ms ease;
  &:hover {
    z-index: 10;
    transform: scale(1.05);
    filter: brightness(125%);
  }

  @media (min-width: 1400px) {
    height: 205px;
  }

  @media (min-width: 1900px) {
    height: 280px;
  }
`;

class ProfilePage extends Component {
  state = {
    limit: 8
  };
  componentDidMount() {
    let limit = 8;
    if (window.innerWidth > 1199) {
      limit = 9;
    }
    window.addEventListener("resize", this.updateLimit);

    this.setState({ limit }, prevState => {
      this.props.fetchComments("?userId=" + this.props.match.params.userId);
      this.props.fetchImages(
        `?limit=${this.state.limit}&userId=${this.props.match.params.userId}`,
        "profilePage",
        true
      );
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.emptyPage({
      dataBelongToPage: "profilePage"
    });
    window.removeEventListener("resize", this.updateLimit);
  }

  updateLimit = () => {
    let limit = 8;
    if (window.innerWidth > 1199) {
      limit = 9;
    }
    if (limit !== this.state.limit) {
      this.setState({ limit });
      this.props.fetchImages(
        `?limit=${limit}&userId=${this.props.match.params.userId}`,
        "profilePage",
        true
      );
    }
  };

  renderComments() {
    const comments = Object.keys(this.props.comments);

    if (!comments.length) {
      return "No comments posted";
    }

    return (
      <Comments comments={comments.map(key => this.props.comments[key])} />
    );
  }

  renderPagination() {
    let element = null;
    if (
      this.props.pagination &&
      this.props.images.length &&
      this.props.pagination.hasOwnProperty("profilePageimages") &&
      this.props.pagination.profilePageimages.pages > 1
    ) {
      element = (
        <PaginationBar
          pages={this.props.pagination.profilePageimages.pages}
          onClick={this.paginationClick}
          activePage={1}
        />
      );
    }
    return element;
  }

  paginationClick = value => {
    this.props.fetchImages(
      `?page= ${value}&limit=${this.state.limit}&userId=${
        this.props.match.params.userId
      }`,
      "profilePage",
      true
    );
  };

  render() {
    return (
      <Row style={{ margin: "0 15px 0 15px" }}>
        <Col style={{ padding: "0" }} sm={8}>
          <h2>Latest Images</h2>
          <Row style={{ marginBottom: "10px" }}>
            {this.props.images.map(image => (
              <Col style={{ padding: 0 }} sm={12} md={6} xl={4}>
                <ImageContainer>
                  <a href={`/photo/${image._id}`}>
                    <img
                      style={{
                        width: "100%",
                        height: "auto"
                      }}
                      src={image.path}
                    />
                  </a>
                </ImageContainer>
              </Col>
            ))}
          </Row>
          {this.renderPagination()}
          {this.props.match.params.userId == this.props.auth.user.id ? (
            <Link to={"/profileSettings/" + this.props.match.params.userId}>
              <button
                style={{
                  display: "block ",
                  padding: "10px",
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: "#4caf50"
                }}
              >
                Profile Settings
              </button>
            </Link>
          ) : null}
        </Col>
        <Col sm={4}>
          <h2>Latest comments</h2>
          {this.renderComments()}
          <h2>Something else </h2>
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
          <img
            style={{ width: "50px" }}
            src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
          />{" "}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: getEntitiesFromResourcsIds(state, "profilePage"),
    comments: state.comments.items,
    auth: state.auth,
    pagination: state.pagination
  };
}

export default connect(
  mapStateToProps,
  { fetchComments, fetchImages, resetImages, emptyPage }
)(ProfilePage);
