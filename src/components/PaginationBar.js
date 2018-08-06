import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Pagination = styled.div`
  display: inline-block;

  & span {
    color: black;
    float: left;
    padding: 5px 10px;
    text-decoration: none;
    cursor: pointer;
  }

  & span:hover {
    background-color: #ddd;
  }

  &
    span:nth-child(${props =>
        props.activePage ? props.activePage + 1 : 1 + 1}) {
    background-color: #4caf50;
    color: white;
  }
`;

class Paginationbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  renderElements(numberOElements) {
    const elementsToRender = [];
    for (let i = 1; i <= numberOElements; i++) {
      elementsToRender.push(<span key={i}>{i}</span>);
    }
    return elementsToRender;
  }

  onClickHandler = e => {
    let value = 0;
    if (e.target.dataset.add) {
      value = this.state.page + 1;
    } else if (e.target.dataset.sub) {
      value = this.state.page - 1;
    } else {
      value = parseInt(e.target.innerText, 10);
    }
    if (value > 0 && value <= this.props.pages) {
      this.setState({ page: value }, prevState => {
        this.props.onClick(this.state.page);
      });
    }
  };

  render() {
    return (
      <Pagination onClick={this.onClickHandler} activePage={this.state.page}>
        <span data-sub>&laquo;</span>
        {this.renderElements(this.props.pages)}
        <span data-add>&raquo;</span>
      </Pagination>
    );
  }
}

Paginationbar.propTypes = {
  pages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Paginationbar;
