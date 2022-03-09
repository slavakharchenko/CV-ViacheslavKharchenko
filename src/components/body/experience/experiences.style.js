import styled from "styled-components";

export const Container = styled.section`
  color: black;
  
  background-size: 100%;
  background-color: rgb(245,247,249);
`;

export const ExperiencesWrapper = styled.div`
  padding-top: 160px;

  margin-left: 70px;
  margin-right: 70px;
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas: "project project" 
                       "position duration"
                       "task task"
                       "chips link";
  grid-column-gap: 80px;
`;

export const ExperienceWrapper = styled.div`
  margin-bottom: 100px;
`;

export const Project = styled.div`
  grid-area: project;
  color: rgb(239, 70, 63);
  font-size: 24px;
`

export const Position = styled.div`
  grid-area: position;
  margin-top: 20px;
  margin-bottom: 5px;
  color: black;
  font-size: 40px;
`

export const Duration = styled.div`
  grid-area: duration;
  margin-bottom: 40px;
  color: rgb(36,32,43);
  font-size: 14px;
  opacity: .5;
`
