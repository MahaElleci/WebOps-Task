import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10rem; 
  margin-bottom: 5rem;
  flex-wrap: wrap;
  flex: 0 65%;
  @media only screen and (max-width: 1722px) {
    flex: 0 95%;
  }
`;
const ItemImage = styled.div`
  display: flex;
  max-width: 690px;
  max-height: 690px;
  margin-right: 2rem;
  img {
    width: 100%;
    height: auto;
    object-fit: scale-down;
  }
`;

const ItemDescription = styled.div`
  p {
    font-size: 1.5rem;
    color: #000;
  } 
  a {
      text-decoration:none;
      color: #337ab7; 
      &:hover {
          opacity:0.9;
      }
  }
  .heading {
    font-weight: 600;
  }
  .description {
    font-weight: 200;
  }
`;
const GalleryItemPage = props => {
  const data = useSelector(state => state);
  const selectedItem = data.galleryItems.find(
    item => item.id == props.match.params.id
  );

  return (
    <ItemWrapper>
      <ItemImage>
        <img src={selectedItem.image} />
      </ItemImage>
      <ItemDescription>
        <p className="heading">{selectedItem.title}</p>
        <p className="description">{selectedItem.description}</p>
        <a href="#" className="author">
          {selectedItem.author}
        </a>
      </ItemDescription>
    </ItemWrapper>
  );
};
export default GalleryItemPage;
