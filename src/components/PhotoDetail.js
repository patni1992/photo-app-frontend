import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveEditImage } from "../redux/actions/activeEditImageActions";
import { postComment, fetchComments } from "../redux/actions/commentActions";
import { fetchImage, deleteImage } from "../redux/actions/imageActions";
import { getUserByImageIdState } from "../redux/selectors/userSelector";
import Photo from "./Photo";
import Comments from "./Comments";
import styled from "styled-components";
import { Wrapper } from "./styledComponents/ui";
import { Container } from "react-grid-system";

const Styling = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
`;

const TextArea = styled.input`
  padding: 35px;
  width: 100%;
  white-space: pre-line;
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  border: 2px #d3d3d3 solid;
`;

class PhotoDetail extends Component {
  componentDidMount() {
    this.props.fetchImage(this.props.match.params.id, "", "photoDetail");
    this.props.fetchComments("?imageId=" + this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  addDeletePhotoHandler = id => {
    this.props.deleteImage(this.props.match.params.id);
  };

  addCommentHandler = event => {
    event.preventDefault();
    const comment = event.target.elements.comment;

    if (comment.value.trim()) {
      this.props.postComment(this.props.match.params.id, comment.value);
      comment.value = "";
    }
  };

  render() {
    if (this.props.image && this.props.author) {
      const { image } = this.props;
      const { author } = this.props;

      let newProps = Object.assign({}, image, {
        profileLink: `/profile/${author._id}`,
        author: author,
        deletePhoto:
          author._id == this.props.auth.user.id
            ? this.addDeletePhotoHandler
            : null,
        src: image.path,
        editPhoto:
          author._id == this.props.auth.user.id
            ? data => {
                this.props.setActiveEditImage(data);
                this.props.history.push("/addPhotos");
              }
            : null
      });

      return (
        <Container>
          <Wrapper>
            <Styling>
              <Photo {...newProps} />
              <div style={{ flexBasis: "100%" }}>
                <Comments
                  comments={Object.keys(this.props.comments).map(
                    key => this.props.comments[key]
                  )}
                />
                <form onSubmit={this.addCommentHandler} action="">
                  <TextArea
                    name="comment"
                    type="text"
                    placeholder="Enter a comment"
                  />
                </form>
              </div>
            </Styling>
          </Wrapper>
        </Container>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    image: state.images.items[ownProps.match.params.id],
    comments: state.comments.items,
    auth: state.auth,
    author: getUserByImageIdState(state, ownProps)
  };
}

export default connect(
  mapStateToProps,
  {
    setActiveEditImage,
    fetchComments,
    postComment,
    fetchImage,
    deleteImage
  }
)(PhotoDetail);
