import React from "react";
import styled from "styled-components";
import PhotoItem from "../components/PhotoItem";


const ItemsListingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;  
`;
const ItemsListing = (props) => {
  return (
    <ItemsListingWrapper>
      {props.data.map((item, i) => {
        return <PhotoItem key={i} image={item.image} title={item.title} />;
      })}
    </ItemsListingWrapper>
  );
};

export default ItemsListing;
