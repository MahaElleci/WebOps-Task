import React from 'react'
import styled from 'styled-components'; 

const FooterWrapper = styled.div`
  background-color: #000;
  width: 100%;
  height:200px; 
  position: relative; 
  bottom:0;  
  right: 0;
  left: 0;

`
const Footer = () => {
    return ( 
    <footer>
        <FooterWrapper>

        </FooterWrapper> 
        </footer>
    )
}
export default Footer;