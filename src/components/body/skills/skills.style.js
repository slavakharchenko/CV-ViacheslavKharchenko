import styled from "styled-components";

export const Container = styled.section`
  padding: 160px 100px 0px 100px;
  color: black;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding: 60px 20px 0px 20px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    padding: 60px 50px 0px 50px;
  }
`;

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas: "automation manual"
                       "tech tech";
  grid-column-gap: 80px;
  
  h4 {
    font-size: 40px;
    padding-bottom: 60px;
  }
  span {
    color: rgb(239, 70, 63);
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    grid-template-areas: "automation" 
                          "manual"
                          "tech";
    grid-column-gap: 0px;
    
    h4 {
      font-size: 24px;
      padding: 30px 0px 30px 0px;
    }
  }
`

export const Tech = styled.div`
  grid-area: tech;
`;

export const Auto = styled.div`
  grid-area: automation;
`;

export const Manual = styled.div`
  grid-area: manual;
`;