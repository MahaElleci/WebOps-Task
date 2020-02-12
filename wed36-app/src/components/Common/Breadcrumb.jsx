import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BreadcrumbWrapper = styled.div`
  display: flex; 
  margin: 0 4rem; 
  margin-top: 8rem;
  margin-bottom: 2rem;
`;
const BreadcrumbLink = styled.p`
 font-size: 1.5rem;
    color: #52b2c1;
    font-weight: 700; 
    text-align:left;
`;
const Breadcrumb = props => {
  const [path, setPath] = useState("/");
  const getCurrentPath = path => {
    var currentPath = "";
    switch (path) {
      case "/":
        currentPath = "Gallery";
        break;
      case "/categories":
        currentPath = "Categories";
        break; 
      case "/photo/:id" : 
        currentPath = "Photo"; break;
    }
    setPath(currentPath);
  };

  useEffect(() => {
    getCurrentPath(props.match.path);
  });
  return (
    <BreadcrumbWrapper>
      <BreadcrumbLink>{path}</BreadcrumbLink>
    </BreadcrumbWrapper>
  );
};
export default Breadcrumb;
