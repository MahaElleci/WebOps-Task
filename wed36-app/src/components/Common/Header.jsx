import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100000; 
  width: 100%; 
`;
const NavHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  margin-top: 2rem;
`;
const NavCenter = styled.div`
  img {
    max-height: 80px;
  }
`;
const Dropdown = styled.div`
  background-color: #fff;
  position: absolute;
  top: 2rem;
  left: 0rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  width: max-content;
  display: flex;
  flex-direction: column; 
  a {
    padding: 1rem;
    border-bottom: 1px solid #000;
    font-weight: 600;
    background-color: #fff;
  }
`;
const MenuLinkWrapper = styled.div`
  display: flex;
  padding: 0.8rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000; 
  flex-wrap: wrap;
`;
const MenuLink = styled.div`
  margin-left: 3rem;
  margin-right: 3rem; 
  padding-bottom: 0.5rem;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  text-align: center;
  position: relative;
  font-size: 0.9rem;
  white-space: pre; 
  display:flex;
  &:hover {
    cursor: pointer; 
    text-decoration: underline;
    opacity:0.9;
  }
`;

const Header = () => {
  const [dropdownShown, showDropdown] = useState(false);
  const dropdownHandler = (e, isShown) => {
    e.stopPropagation();
    showDropdown(isShown);
  };

  return (
    <Nav>
      <NavHeader>
        <MenuLinkWrapper>
          <MenuLink
            onMouseOverCapture={e => dropdownHandler(e, true)}
            onMouseOut={e => dropdownHandler(e, false)}
          >
            360 PLANNER
            {dropdownShown && (
              <Dropdown>
                <a>Page 1</a>
                <a>Page 2</a>
                <a>Page 3</a>
              </Dropdown>
            )}
          </MenuLink>
          <MenuLink>HIM</MenuLink>
          <MenuLink>HER</MenuLink>
        </MenuLinkWrapper>
        <NavCenter>
          <img src="https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png" />
        </NavCenter>
        <MenuLinkWrapper>
          <MenuLink>VENDORS</MenuLink>
          <MenuLink>GALLERY</MenuLink>
          <MenuLink>IDEAS & MORE</MenuLink>
        </MenuLinkWrapper>
      </NavHeader>
    </Nav>
  );
};
export default Header;
