import React from "react";
import Header from "../Common/Header";
import Footer from  "../Common/Footer";
import styled from "styled-components";
const MainLayout = (props) => { 
  const LayoutWrapper = styled.div` 
    display:flex; 
    justify-content:center;
  `
  return (
    <LayoutWrapper>
      <Header />
      {props.children}  
      <Footer />
    </LayoutWrapper>
  );
};
export default MainLayout;
