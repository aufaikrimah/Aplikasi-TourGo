import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const NavLink = styled(Link)`
  color: #10A3B3;

  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #10A3B3;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: grid;
  }
  font-family: 'Oxygen';
  font-weight: 700;
  font-size: 20px;
  font-style: normal;
`;

export const NavBtn = styled.nav`
  display: flex;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: grid;
    
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 0;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
