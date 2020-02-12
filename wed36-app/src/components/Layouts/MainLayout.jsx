import React from "react";
import Header from "../Common/Header";
import Footer from  "../Common/Footer"; 
import BreadCrumb from "../Common/Breadcrumb";
import styled from "styled-components";
const MainLayout = (props) => { 
  const LayoutWrapper = styled.div` 
    display:flex; 
    justify-content:center; 
    flex-direction:column;
  `
  return (
    <LayoutWrapper>
      <Header /> 
      <BreadCrumb {...props}/>
      {props.children}  
      <Footer />
    </LayoutWrapper>
  );
};
export default MainLayout;
