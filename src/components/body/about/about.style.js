import styled from "styled-components";

export const ScrollContainer = styled.div`
  overflow-y: scroll;
`;

export const Container = styled.section`
  margin-top: 120px;
  background-color: rgb(36,32,43);
  background-size: 100%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  grid-template-columns: 1.5fr 1fr;
  grid-template-areas: "content photo";
  grid-column-gap: 20px;
  
  padding-top: 120px;
  padding-bottom: 120px;
  
  margin-left: 100px;
  margin-right: 100px;
`

export const ImageWrapper = styled.div`
  grid-area: photo;
  width: 850px;
`

export const DownloadWrapper = styled.div`
  padding-top: 60px;
  font-size: 24px;
  color: rgb(239, 70, 63);
  
  button {
    margin-left: 140px;
  }
`

export const ContentWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 950px;
`


