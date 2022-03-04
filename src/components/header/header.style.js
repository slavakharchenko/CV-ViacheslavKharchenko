import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavHeader = styled.nav`
  top: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100px;
  background: white;
  @media (max-width: 768px) {
    display: block;
    height: 100px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin-left: 60px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0px;
    margin-top: 15px;
  }
`

export const Icons = styled.div`
  display: flex;  
  justify-content: right;
  align-items: center;
  width: 50%;
  margin-right: 60px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    width: 100%;
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: grey; 
  font-size: 30px;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    padding-right: 0px;
    margin: 0 10px;
  }
`