import React, { Component } from "react";
import Photo from "./Photo";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import InfiniteScroll from "./InfiniteScroll";
import { getEntitiesFromResourcsIds } from "../redux/reducers/pageReducer";
import { searchFetchImages } from "../redux/actions/searchActions";
import { connect } from "react-redux";
import { Container } from "react-grid-system";
import Modal from "./Modal";
import { fetchImages } from "../redux/actions/imageActions";

const Styling = styled.div`
  display: flex;
  flex-wrap: wrap;
  & figure:nth-child(7n + 7) {
    flex: 1 100%;
  }
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
    let query = "?page=1";
    if (value) {
      query += "&search=" + value;
    }
    this.props.searchFetchImages(query, "feed");
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
    if (!this.props.images.length) {
      this.props.fetchImages("", "feed");
    }
  }

  paginate = () => {
    if (this.props.pagination) {
      const { page, pages } = this.props.pagination.feedimages;
      if (page < pages) {
        this.props.fetchImages(
          "?page=" + (page + 1) + "&search=" + this.state.filterOn,
          "feed"
        );
      }
    }
  };

  renderImages() {
    const { images } = this.props;

    if (!images.length) {
      return null;
    }

    return images.map(image => {
      return (
        <Photo
          key={image._id}
          id={image._id}
          imgLink={`/photo/${image._id}`}
          profileLink={`/profile/${image.author._id}`}
          clickHandler={this.setModal}
          description={image.description}
          tags={image.tags}
          author={this.props.users[image.author]}
          src={image.path}
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
          ) : null}
          <Styling> {this.renderImages()} </Styling>
        </Container>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: getEntitiesFromResourcsIds(state, "feed"),
    pagination: state.pagination,
    users: state.users.items
  };
}

export default connect(
  mapStateToProps,
  { fetchImages, searchFetchImages }
)(Gallery);
