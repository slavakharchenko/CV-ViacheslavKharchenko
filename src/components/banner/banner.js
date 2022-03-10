import React from 'react';
import styled from "styled-components";
import LowLine from "../lowLine";

export const BannerWrapper = styled.div`
  height: 700px;
  font-size: 140px;
  margin-right: 100px;
  margin-left: 100px;

  @media (max-width: 768px) {
    height: 350px;
    font-size: 40px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const FirstPhrase = styled.div`
  height: 350px;

  display: flex;
  align-items: flex-end;
  justify-content: left;
  color: rgb(239, 70, 63);

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 175px;
  }
`;

export const SecondPhrase = styled.div`
  height: 350px;

  display: flex;
  align-items: flex-start;
  justify-content: right;
  color: black;
  
  @media (max-width: 768px) {
    height: 175px;
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