import React, { Component } from "react";
import debounce from "lodash/debounce";

import styled from "styled-components";

const Input = styled.input`
  padding: 17px;
  width: 100%;
  border: 2px #d3d3d3 solid;
`;

const InputContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
`;

class Searchbar extends Component {
  handleChange = e => {
    const value = e.target.value;
    this.handleFilter(value);
  };

  handleFilter = debounce(val => {
    this.props.onChangeHandler(val);
  }, 500);

  render() {
    return (
      <InputContainer>
        <Input
          placeholder="Search for images"
          type="text"
          onChange={this.handleChange}
        />
      </InputContainer>
    );
  }
}

export default Searchbar;
