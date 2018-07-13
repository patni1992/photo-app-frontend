import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import { fetchComments } from "../redux/actions/commentActions";
import { getEntitiesFromResourcsIds } from "../redux/reducers/pageReducer";
import { fetchImages, resetImages } from "../redux/actions/imageActions";
import { emptyPage } from "../redux/actions/pageActions";
import Comments from "./Comments";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchComments("?userId=" + this.props.match.params.userId);
    this.props.fetchImages(
      "?limit=6&userId=" + this.props.match.params.userId,
      "profilePage",
      true
    );
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.emptyPage({
      dataBelongToPage: "profilePage"
    });
  }

  renderComments() {
    const comments = Object.keys(this.props.comments);

    if (!comments.length) {
      return "No comments posted";
    }

    return (
      <Comments comments={comments.map(key => this.props.comments[key])} />
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <div style={{ margin: "0px" }}>
              <h2>Latest Images</h2>
              <Row align="top">
                {this.props.images.map(image => (
                  <Col sm={12} lg={6}>
                    <img
                      style={{
                        width: "100%",
                        padding: "10px 0"
                      }}
                      src={image.path}
                    />
                  </Col>
                ))}
              </Row>
            </div>
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
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: getEntitiesFromResourcsIds(state, "profilePage"),
    comments: state.comments.items,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { fetchComments, fetchImages, resetImages, emptyPage }
)(ProfilePage);
