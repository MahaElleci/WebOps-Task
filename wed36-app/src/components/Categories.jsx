import React, { useState } from "react";
import styled from "styled-components";

const data = [
  {
    id: 0,
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Wedding Cake"
  },
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Venues"
  },
  {
    id: 2,
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Decorations"
  },
  {
    id: 3,
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Wedding Cake"
  },
  {
    id: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Venues"
  },
  {
    id: 5,
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Decorations"
  }
];
const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 5rem;
  column-gap: 10px;
  row-gap: 10px;
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
      {data.map((item, i) => {
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
