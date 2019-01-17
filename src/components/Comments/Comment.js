import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const CommentWrapper = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1.1px solid #d3d3d3;
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

const Comment = ({ comment, author }) => {
  if (comment && author) {
    return (
      <CommentWrapper>
        <ThumbnailContainer>
          <Thumbnail src={author.fullPathProfileImage} />
          <strong>
            <h3>{author.username}</h3>
          </strong>
        </ThumbnailContainer>
        <TextContainer>
          <DateText>{moment(comment.createdAt).fromNow()}</DateText>
          <CommentText>{comment.text}</CommentText>
        </TextContainer>
      </CommentWrapper>
    );
  } else {
    return null;
  }
};

Comment.propTypes = {
  author: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired
};

export default Comment;
