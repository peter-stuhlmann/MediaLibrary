import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import nav from '../data/nav';

export default function Header(props) {
  const { content } = props;

  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <Logo src={content.logo} alt="Logo" />
        </Link>
        <Nav open={open}>
          {nav.map((navItem) => (
            <NavItem
              key={navItem.href}
              to={navItem.href}
              icon={navItem.icon}
              onClick={() => setOpen(false)}
            >
              <span>{navItem.linkText}</span>
            </NavItem>
          ))}
        </Nav>
      </div>
      <MobileMenuButton onClick={() => setOpen(!open)}>Menu</MobileMenuButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
  box-sizing: border-box;
  letter-spacing: 2px;
  z-index: 10;

  div {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  margin-left: 25px;
  display: flex;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: ${(props) => (props.open ? '0' : '-100vw')};
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: #090b13;
    padding-top: 20px;
    transition: 0.3s ease-out;
    z-index: -1;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  margin-right: 25px;
  padding: 6px 12px;

  @media (max-width: 768px) {
    margin-right: 0;
    font-size: 20px;
  }

  &:before {
    display: block;
    content: '';
    background-image: url(${(props) => props.icon});
    background-size: 22px 22px;
    background-repeat: no-repeat;
    height: 22px;
    width: calc(22px + 7px);
  }

  span {
    &:before {
      content: '';
      display: block;
      background-color: #fff;
      border-radius: 0 0 4px 4px;
      bottom: 2px;
      right: 12px;
      left: calc(22px + 7px + 12px);
      height: 2px;
      opacity: 0;
      position: absolute;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width: auto;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  &:hover span:before {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const MobileMenuButton = styled.button`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px 17px;
  color: #fff;
  background-color: #090b13;
  outline: none;
  cursor: pointer;
  transition: 0.1s;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 769px) {
    display: none;
  }
`;
