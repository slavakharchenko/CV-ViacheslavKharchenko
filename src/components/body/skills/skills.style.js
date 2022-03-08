import styled from "styled-components";

export const Container = styled.div`
  margin-top: 160px;

  margin-left: 70px;
  margin-right: 70px;
  
  color: black;
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