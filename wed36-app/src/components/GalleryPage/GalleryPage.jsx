import React from "react";
import styled from "styled-components";
import ItemsListing from "./ItemsListing";

const CategoriesWrapper = styled.div`
  display: flex;
 /* margin-top:10rem; */
  margin-bottom: 4rem; 
  justify-content: center;
`;

const SideFilters = styled.div`
  display: flex;
  flex-direction: column; 
  margin-right: 2rem; 
  flex-wrap: wrap;
    flex: 0 15%;
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
const GalleryPage = () => { 

  return ( 
  <div className="grid-row">
    <CategoriesWrapper>
      <SideFilters>
        <ButtonGroup>
          <button>Filter</button>
          <button>Search</button>
        </ButtonGroup>
        <SearchInput type="text" placeholder="Search" />
      </SideFilters>

      <ItemsListing  />
    </CategoriesWrapper> 
    </div>
  );
};
export default GalleryPage;
