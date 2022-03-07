import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavHeader = styled.nav`
  height: 120px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-areas: "brand links icons";
  
  // Fixed header
  position: fixed;
  top: 0;
  z-index: 1;

  background: rgb(36,32,43);

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "brand icons"  
                         "links links";
  }
`

export const Links = styled.div`
  grid-area: links;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: white; 
  font-size: 20px;
  padding-right: 60px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding-right: 0px;
    margin: 0 10px;
  }
`

export const Icons = styled.div`
  grid-area: icons;
  display: flex;  
  justify-content: right;
  align-items: center;
  margin-right: 70px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    width: 100%;
  }
`

export const BrandContainer = styled.div`
  grid-area: brand;
  display: flex;  
  justify-content: center;
  align-items: center;
  margin-right: 70px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    width: 100%;
  }
`