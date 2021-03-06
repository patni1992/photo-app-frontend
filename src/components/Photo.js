import React, { Component } from "react";
import Tag from "./Tag";
import FontAwesome from "react-fontawesome";
import Link from "./common/Link";
import styled from "styled-components";

const Figure = styled.figure`
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    margin-left: 8px;
    margin-right: 8px;
  }
  flex-basis: calc(40.333% - 4rem);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  flex-grow: 1;
  position: relative;
  background-color: #ffffff;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: -5px;
`;

const TagContainer = styled.div`
  font-size: 15px;
  color: #777;
  line-height: 23px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  background: #a9a9a9;
  &:hover {
    cursor: pointer;
  }
  min-width: 270px;
  max-width: 1100px;
`;

const EditContainer = styled.span`
  position: absolute;
  font-size: 20px;
	top: 16px;
	right 15px;
	cursor: pointer;
`;

const TrashContainer = styled.span`
  position: absolute;
  font-size: 20px;
	top: 16px;
	right 55px;
	cursor: pointer;
`;

const Header = styled.div`
  padding: 0 7px;
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

const FigCaption = styled.figcaption`
  margin-left: 10px;
`;

const P = styled.p`
  margin-left: 5px;
  color: #777;
`;
class Photo extends Component {
  renderIcons() {
    let actionIcons = [];
    if (this.props.editPhoto) {
      actionIcons.push(
        <EditContainer
          onClick={() =>
            this.props.editPhoto({
              src: this.props.src,
              tags: this.props.tags.join(","),
              description: this.props.description,
              id: this.props._id
            })
          }
        >
          <FontAwesome name="pencil" />
        </EditContainer>
      );
    }

    if (this.props.deletePhoto) {
      actionIcons.push(
        <TrashContainer onClick={() => this.props.deletePhoto(this.props._id)}>
          <FontAwesome name="trash" />
        </TrashContainer>
      );
    }

    return actionIcons;
  }
  render() {
    return (
      <Figure>
        <Header>
          <Link to={`/profile/${this.props.author._id}`}>
            <ThumbnailContainer>
              <Thumbnail src={this.props.author.fullPathProfileImage} />
              <strong>
                <h3> {this.props.author.username} </h3>
              </strong>
            </ThumbnailContainer>
          </Link>
        </Header>
        <ImgContainer>
          {this.props.imgLink ? (
            <Link to={this.props.imgLink}>
              <Img className="photo" src={this.props.src} />
            </Link>
          ) : (
            <Img className="photo" src={this.props.src} />
          )}
        </ImgContainer>
        <FigCaption>
          {this.renderIcons()}
          <TagContainer>
            {this.props.tags.map((tagText, index) => (
              <Tag key={index} tagText={tagText} />
            ))}
          </TagContainer>
          <P> {this.props.description} </P>
        </FigCaption>
      </Figure>
    );
  }
}

export default Photo;
