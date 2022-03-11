import styled from "styled-components";

export const ContainerWrapper = styled.div`
  color: black;
  background-color: rgb(245,247,249);
  padding: 160px 100px 0px 100px;
  
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding: 60px 20px 0px 20px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    padding: 60px 50px 0px 50px;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr; 
    grid-column-gap: 0px;
  }
`;

export const ExperienceWrapper = styled.div`
  padding-bottom: 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Project = styled.div`
  color: rgb(239, 70, 63);
  font-size: 24px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding-top: 20px;
    font-size: 20px;
  }
`

export const Position = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  color: black;
  font-size: 40px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    font-size: 24px;
  }
`

export const Duration = styled.div`
  margin-bottom: 40px;
  color: rgb(36,32,43);
  font-size: 14px;
  opacity: .5;
`
