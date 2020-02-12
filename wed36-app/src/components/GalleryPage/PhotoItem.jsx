import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  &:hover {
      cursor: pointer;
  }
`;

const ItemImage = styled.div`
  background: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  height: 300px;
  background-size: cover;
  width: 200px;
  background-position: center;
`;
const ItemTitle = styled.p`
  color: #000;
  font-weight: 600;
`;
const PhotoItem = props => {
  return ( 
    <Link to={`/photo/${props.id}`} style={{ textDecoration: 'none' }}>
    <ItemWrapper>
      <ItemImage image={props.image} />
      <ItemTitle>{props.title}</ItemTitle>
    </ItemWrapper> 
    </Link>
  );
};

export default PhotoItem;
