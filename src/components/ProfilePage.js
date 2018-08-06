import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Row, Col } from "react-grid-system";
import { fetchComments } from "../redux/actions/commentActions";
import Link from "./common/Link";
import { getImagesFromResourceIdsState } from "../redux/selectors/imageSelector";
import { selectUserById } from "../redux/selectors/userSelector";
import { fetchImages, resetImages } from "../redux/actions/imageActions";
import { fetchUserStats } from "../redux/actions/userStatsActions";
import { emptyPage } from "../redux/actions/pageActions";
import Comments from "./Comments";
import moment from "moment";
import { getCommentsFromResourceIdsState } from "../redux/selectors/commentSelector";
import {
  getAuthorsFromComments,
  selectUserStatsById
} from "../redux/selectors/userSelector";
import PaginationBar from "./PaginationBar";

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
    this.props.fetchUserStats(this.props.match.params.userId);
    let limit = 8;
    if (window.innerWidth > 1199) {
      limit = 9;
    }
    window.addEventListener("resize", this.updateLimit);

    this.setState({ limit }, prevState => {
      this.props.fetchImages(
        `?limit=${this.state.limit}&userId=${this.props.match.params.userId}`,
        "profilePage",
        true
      );
      this.props.fetchComments("?userId=" + this.props.match.params.userId);
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
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
    if (this.props.comments && this.props.commentsAuthors) {
      return (
        <Comments
          comments={this.props.comments}
          authors={this.props.commentsAuthors}
        />
      );
    }

    return null;
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
      <Row style={{ margin: "0 25px 0 25px" }}>
        <Col style={{ padding: "0" }} sm={8}>
          <h2>Images</h2>
          <Row style={{ marginBottom: "10px" }}>
            {this.props.images.map(image => (
              <Col style={{ padding: 0 }} sm={12} md={6} xl={4}>
                <ImageContainer>
                  <Link to={`/photo/${image._id}`}>
                    <img
                      style={{
                        width: "100%",
                        height: "auto"
                      }}
                      src={image.path}
                    />
                  </Link>
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
          <h2>{this.props.author.username}</h2>
          <p style={{ display: "block" }}>
            <strong>{moment(this.props.author.createdAt).format("L")} </strong>
            Register date
          </p>
          <p style={{ display: "block" }}>
            <strong>{this.props.stats.imageCount}</strong> Images
          </p>
          <p style={{ display: "block" }}>
            <strong>{this.props.stats.commentCount}</strong> Comments
          </p>
          <h2>Latest comments</h2>
          {this.renderComments()}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const comments = getCommentsFromResourceIdsState(state, "profilePage");
  return {
    images: getImagesFromResourceIdsState(state),
    commentsAuthors: getAuthorsFromComments(state, comments),
    comments,
    stats: selectUserStatsById(state, ownProps),
    auth: state.auth,
    author: selectUserById(state, ownProps.match.params.userId),
    pagination: state.pagination
  };
}

export default connect(
  mapStateToProps,
  { fetchComments, fetchUserStats, fetchImages, resetImages, emptyPage }
)(ProfilePage);
