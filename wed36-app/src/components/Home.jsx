import React from "react";
import styled from "styled-components";
import ItemsListing from "./ItemsListing";
const data = [
  {
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Wedding Cake"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Venues"
  },
  {
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Decorations"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Weddings"
  },
  {
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Wedding Cake"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Wedding Cake"
  },
  {
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Wedding Cake"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Venues"
  },
  {
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Decorations"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Weddings"
  },
  {
    image:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2020/01/homemade-2-tier-wedding-cake-2.jpg",
    title: "Wedding Cake"
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LAZSQHPaL._AC_SL1098_.jpg",
    title: "Wedding Cake"
  }
];
const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr; 
  row-gap: 30px;
  margin-top:8rem;
  margin-bottom: 4rem;
`;

const SideFilters = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonGroup = styled.div`
  display: flex; 
  margin-bottom:2rem; 
  button {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    width: 80px;
    height: 20px;
    margin-right:0.5rem;
    &:hover {
      background-color: #000;
      color: #fff; 
      cursor: pointer;
    }
  }
`;
const SearchInput = styled.input`
  border: 1px solid #000; 
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;
const Home = () => {
  return (
    <CategoriesWrapper>
      <SideFilters>
        <ButtonGroup>
          <button>Filter</button>
          <button>Search</button>
        </ButtonGroup>
        <SearchInput type="text" placeholder="Search" />
      </SideFilters>

      <ItemsListing data={data} />
    </CategoriesWrapper>
  );
};
export default Home;
