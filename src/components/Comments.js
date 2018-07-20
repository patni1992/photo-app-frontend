import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

const Comment = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  border-bottom: 1.5px solid #d3d3d3;
  background-color: #ffffff;
`;

const Thumbnail = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 10px;
`;

const ThumbnailContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const CommentsBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const CommentText = styled.p`
  margin-top: 30px;
`;

const DateText = styled.small`
  display: block;
  margin-bottom: 11px;
  margin-top: -6px;
`;

const TextContainer = styled.div`
  margin-left: 12px;
`;

class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsBox>
          {this.props.comments.map(comment => {
            return (
              <Comment>
                <ThumbnailContainer>
                  <Thumbnail src={comment.author.profileImage} />
                  <strong>
                    <h3>{comment.author.username}</h3>
                  </strong>
                </ThumbnailContainer>
                <TextContainer>
                  <DateText>{moment(comment.createdAt).fromNow()}</DateText>
                  <CommentText>{comment.text}</CommentText>
                </TextContainer>
              </Comment>
            );
          })}
        </CommentsBox>
      </div>
    );
  }
}

export default Comments;
