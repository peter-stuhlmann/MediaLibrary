import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import nav from '../data/nav';

export default function Header(props) {
  const { content } = props;

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <Logo src={content.logo} alt="Logo" />
        </Link>
        <Nav>
          {nav.map((navItem) => (
            <NavItem key={navItem.href} to={navItem.href} icon={navItem.icon}>
              <span>{navItem.linkText}</span>
            </NavItem>
          ))}
        </Nav>
      </div>
      <div></div>
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
    }
  }

  &:hover span:before {
    transform: scaleX(1);
    opacity: 1;
  }
`;
