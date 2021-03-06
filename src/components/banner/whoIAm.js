import React from 'react';
import styled from 'styled-components';
import LowLine from '../lowLine';
import hobbyOne from '../../images/hobby.png';
import hobbyTwo from '../../images/hobby2.png';
import hobbyThree from '../../images/hobby3.png';

export const BannerWrapper = styled.div`
  height: 700px;
  font-size: 140px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 70px;

  @media only screen and (min-device-width: 769px) and (max-device-width: 1555px) {
    height: 500px;
    font-size: 60px;
    margin: 40px 10px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 768px) {
    font-size: 40px;
    margin: 40px 10px;
  }
`;

export const FirstPhrase = styled.div`
  height: 200px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: rgb(239, 70, 63);

  @media only screen and (min-device-width: 769px) and (max-device-width: 1555px) {
    height: 100px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 768px) {
    height: 100px;
  }
`;

export const Images = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 95%;
    max-height: 95%;
  }
  img:nth-child(odd) {
    transform: rotate(-4.95deg);
  }
  img:nth-child(even) {
    transform: rotate(4.95deg);
  }

  @media only screen and (min-device-width: 1281px) and (max-device-width: 1440px) {
    height: 300px;
    img {
      max-height: 500px;
      max-width: 400px;
    }
  }

  @media only screen and (min-device-width: 769px) and (max-device-width: 1280px) {
    height: 300px;
    img {
      max-height: 325px;
      max-width: 250px;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 768px) {
    height: 500px;
    flex-direction: column;
    img {
      max-height: 350px;
      max-width: 250px;
    }
  }
`;

export const SecondPhrase = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: right;
  color: black;
  display: -webkit-flex;
  -webkit-justify-content: flex-end;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1555px) {
    height: 100px;
  }
`;

const WhoIAm = () => {
  return (
    <BannerWrapper>
      <FirstPhrase>IT'S WHO I AM</FirstPhrase>
      <Images>
        <img src={hobbyOne} alt='hobbies' />
        <img src={hobbyTwo} alt='hobbies' />
        <img src={hobbyThree} alt='hobbies' />
      </Images>
      <SecondPhrase>
        MY HOBBIES <LowLine size={'140px'} />
      </SecondPhrase>
    </BannerWrapper>
  );
};

export default WhoIAm;
