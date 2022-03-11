import styled from "styled-components";

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

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
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
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: white; 
  font-size: 30px;
  padding-right: 60px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding: 10px;
    font-size: 20px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    padding: 15px;
    font-size: 24px;
  }
`

export const Icons = styled.div`
  grid-area: icons;
  display: flex;  
  justify-content: center;
  align-items: center;
  margin-right: 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    margin-right: 0px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    margin-right: 50px;
  }
`

export const BrandContainer = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    justify-content: flex-end;
    min-height: 75px;
    margin-left: 0px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    justify-content: flex-start;
    min-height: 75px;
    margin-left: 40px;
  }
`