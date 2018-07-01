import React, { Component } from "react";
import Photo from "./Photo";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import InfiniteScroll from "./InfiniteScroll";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "react-grid-system";
import Modal from "./Modal";
import * as actions from "../redux/actions/imageActions";

const Styling = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      modal: {
        src: null,
        description: null
      },
      filterOn: ""
    };
  }

  setFilterValue = value => {
    this.setState({
      filterOn: value
    });
    this.props.fetchImages("?page=1&search=" + value, true);
  };

  setModal = value => {
    if (value) {
      this.setState({
        modal: value
      });
    } else {
      this.setState({
        modal: {
          src: false,
          description: false
        }
      });
    }
  };

  componentDidMount() {
    this.props.fetchImages("?page=" + 1);
  }

  paginate = () => {
    const { page, pages } = this.props.pagination;
    if (page < pages) {
      this.props.fetchImages(
        "?page=" + (page + 1) + "&search=" + this.state.filterOn
      );
    }
  };

  renderImages() {
    const { images } = this.props;

    if (!images) {
      return null;
    }

    return Object.keys(images)
      .filter(data => {
        return (
          images[data].description
            .toLowerCase()
            .indexOf(this.state.filterOn.toLowerCase()) !== -1
        );
      })
      .map(data => {
        data = images[data];
        return (
          <Photo
            id={data._id}
            imgLink={`/photo/${data._id}`}
            profileLink={`/profile/${data.author._id}`}
            clickHandler={this.setModal}
            description={data.description}
            tags={data.tags}
            author={data.author}
            src={data.path}
          />
        );
      });
  }

  render() {
    return (
      <InfiniteScroll isLoading={this.props.isLoading} paginate={this.paginate}>
        <Container>
          <Searchbar onChangeHandler={this.setFilterValue} />
          {this.state.modal.src ? (
            <Modal
              closeHandler={this.setModal}
              description={this.state.modal.description}
              src={this.state.modal.src}
            />
          ) : null}{" "}
          <Styling> {this.renderImages()} </Styling>{" "}
        </Container>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.images,
    images: state.images.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
