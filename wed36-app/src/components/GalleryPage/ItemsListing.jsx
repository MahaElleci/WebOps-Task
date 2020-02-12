import React from "react";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";

import { useSelector } from "react-redux";
const ItemsListingWrapper = styled.div`
       flex: 0 0 41.333333%; 
       @media only screen and (max-width: 1468px) {
        flex: 0 0 50.333333%; 
       } 
       @media only screen and (max-width: 1208px) {
        flex: 0 0 60.333333%; 
       }
`;
const ItemsListing = () => {
  const data = useSelector(state => state);
  return (
    <ItemsListingWrapper>
      <div className="grid-row">
        {data.galleryItems.map((item, i) => {
          return (
            <PhotoItem
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </ItemsListingWrapper>
  );
};

export default ItemsListing;
