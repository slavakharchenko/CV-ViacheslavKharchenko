import styled from "styled-components";

export const AboutWrapper = styled.div`
  // Split on two columns
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-areas: "content photo";
  grid-column-gap: 20px;
  
  // Styles
  background-color: rgb(36,32,43);
  max-width: 3000px;
  width: auto;
  padding: 240px 100px 120px 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    // Split on two rows
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.5fr;
    grid-template-areas: "photo" 
                          "content";
    // Styles
    padding: 180px 10px 60px 10px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    padding: 60px 50px;
  }
`

export const ContentWrapper = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 60px;
    text-align:center;
  }
`

export const ImageWrapper = styled.div`
  grid-area: photo;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
    
  padding-top: 60px;
  font-size: 24px;
  color: rgb(239, 70, 63);
  
  button {
    margin-left: 140px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding-top: 20px;
    flex-direction: column;
    font-size: 20px;

    button {
      margin-left: 0px;
    }
  }
`



