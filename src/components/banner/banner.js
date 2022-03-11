import React from 'react';
import styled from "styled-components";
import LowLine from "../lowLine";

export const BannerWrapper = styled.div`
  height: 700px;
  font-size: 140px;
  margin-right: 100px;
  margin-left: 100px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    height: 350px;
    font-size: 40px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media only screen and (min-device-width: 1025px) and (max-device-width: 1555px) {
    height: 700px;
    font-size: 80px;
    margin-right: 50px;
    margin-left: 50px;
  }
`;

export const FirstPhrase = styled.div`
  height: 350px;

  display: flex;
  align-items: flex-end;
  justify-content: left;
  color: rgb(239, 70, 63);

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 175px;
  }
  @media only screen and (min-device-width: 1025px) and (max-device-width: 1555px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 350px;
  }
`;

export const SecondPhrase = styled.div`
  height: 350px;

  display: flex;
  align-items: flex-start;
  justify-content: right;
  display: -webkit-flex;
  -webkit-justify-content: flex-end;
  
  color: black;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    height: 175px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1555px) {
    height: 350px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;


const Banner = () => {
  return (
    <BannerWrapper>
      <FirstPhrase>
        KEEP CALM &
      </FirstPhrase>
      <SecondPhrase>
        WRITE CODE <LowLine size={'140px'}/>
      </SecondPhrase>
    </BannerWrapper>
  );
}

export default Banner;