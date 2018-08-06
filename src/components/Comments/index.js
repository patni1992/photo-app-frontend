import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "./Comment";

const CommentsBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Comments = ({ comments, authors }) => {
  return (
    <CommentsBox>
      {comments.map(comment => {
        return (
          <Comment
            key={comment._id}
            comment={comment}
            author={authors[comment.author]}
          />
        );
      })}
    </CommentsBox>
  );
};

Comments.propTypes = {
  authors: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};

export default Comments;
