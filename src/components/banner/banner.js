import React from 'react';
import styled from "styled-components";
import Slash from "../slash";

export const BannerWrapper = styled.div`
  height: 700px;
  //display: flex;
  //flex-direction: column;
  font-size: 140px;
  margin-right: 70px;
  margin-left: 70px;
`;

export const FirstPhrase = styled.div`
  height: 350px;

  display: flex;
  align-items: flex-end;
  justify-content: left;
  color: rgb(239, 70, 63);
`;

export const SecondPhrase = styled.div`
  height: 350px;

  display: flex;
  align-items: flex-start;
  justify-content: right;
  color: black;
`;


const Banner = () => {
  return (
    <BannerWrapper>
      <FirstPhrase>
        KEEP CALM &
      </FirstPhrase>
      <SecondPhrase>
        WRITE CODE <Slash size={'140px'}/>
      </SecondPhrase>
    </BannerWrapper>
  );
}

export default Banner;