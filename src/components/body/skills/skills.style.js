import styled from "styled-components";

export const Container = styled.section`
  margin-top: 160px;
  margin-left: 100px;
  margin-right: 100px;
  color: black;

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
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

  @media (max-width: 768px) {
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