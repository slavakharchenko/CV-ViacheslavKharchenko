import React from 'react';
import styled from "styled-components";
import LowLine from "../lowLine";
import hobbyOne from "../../images/hobby.png";
import hobbyTwo from "../../images/hobby2.png";
import hobbyThree from "../../images/hobby3.png";

export const BannerWrapper = styled.div`
  height: 700px;
  font-size: 140px;
  margin-right: 70px;
  margin-left: 70px;
`;

export const FirstPhrase = styled.div`
  height: 200px;

  display: flex;
  align-items: flex-end;
  justify-content: left;
  color: rgb(239, 70, 63);
`;

export const Images = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagesWrapperOne = styled.div`
  img {
    max-width: 75%;
    max-height: 75%;
    transform: rotate(-4.95deg);
  }
`
export const ImagesWrapperTwo = styled.div`
  img {
    max-width: 75%;
    max-height: 75%;
    transform: rotate(4.95deg);
  }

`
export const ImagesWrapperThree = styled.div`
  img {
    max-width: 75%;
    max-height: 75%;
    transform: rotate(-4.95deg);
  }
`

export const SecondPhrase = styled.div`
  height: 200px;

  display: flex;
  align-items: flex-start;
  justify-content: right;
  color: black;
`;


const WhoIAm = () => {
  return (
    <BannerWrapper>
      <FirstPhrase>
        IT'S WHO I AM
      </FirstPhrase>
      <Images>
        <ImagesWrapperOne>
          <img src={hobbyOne} alt='hobbies'/>
        </ImagesWrapperOne>

        <ImagesWrapperTwo>
          <img src={hobbyTwo} alt='hobbies'/>
        </ImagesWrapperTwo>

        <ImagesWrapperThree>
          <img src={hobbyThree} alt='hobbies'/>
        </ImagesWrapperThree>
      </Images>
      <SecondPhrase>
        MY HOBBIES <LowLine size={'140px'}/>
      </SecondPhrase>
    </BannerWrapper>
  );
}

export default WhoIAm;