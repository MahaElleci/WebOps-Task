import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #fff;
  position: fixed;
  top:0;
`;
const NavHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
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
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const MenuLink = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  text-align: center;
  position: relative;  
  font-size: 0.9rem;
  white-space: pre;
  &:hover {
      cursor: pointer;
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
            onMouseOver={e => dropdownHandler(e, true)}
            onMouseLeave={e => dropdownHandler(e, false)}>
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
