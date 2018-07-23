import React, { Component } from "react";
import styled from "styled-components";

const Styling = styled.span`
  border: 1px solid #dee2e5;
  background-color: #dee2e5;
  border-radius: 5px;
  padding: 3px 7px;
  line-height: 13px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  margin: 4px;
  color: #909191;
`;

class Tag extends Component {
  render() {
    return <Styling>{this.props.tagText}</Styling>;
  }
}

export default Tag;
