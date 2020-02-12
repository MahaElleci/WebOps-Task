import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux'; 

const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 33.333333%; 
  justify-content:space-evenly;

`;
const CategoryItem = styled.div`
  background: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  height: 230px;
  background-size: cover;
  width: 350px;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const CategoryOverlay = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  width: 275px;
  height: 185px;
  background-color: #fff;
  position: absolute;
  z-index: 10;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadein 1s;
  p {
    color: #000;
    font-weight: 700;
  }
`;
const Categories = () => {
  const [isHovering, setHovering] = useState(false);
  const [currentSelected, setSelected] = useState(false);
   
  const data = useSelector(state => state);
  const hoveringHandler = (show, itemId) => {
    setHovering(show);
    setSelected(itemId);
  };

  const renderOverlay = title => {
    return (
      <CategoryOverlay>
        <p>{title}</p>
      </CategoryOverlay>
    );
  };
  return (
    <CategoriesWrapper>
      {data.categoreisItems.map((item, i) => {
        return (
          <CategoryItem
            key={i}
            id={item.id}
            image={item.image}
            onMouseEnter={e => hoveringHandler(true, item.id)}
            onMouseOut={e => hoveringHandler(false, item.id)}
          >
            {isHovering &&
              currentSelected === item.id &&
              renderOverlay(item.title)}
          </CategoryItem>
        );
      })}
    </CategoriesWrapper>
  );
};
export default Categories;
