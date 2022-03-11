import React from 'react';
import styled from 'styled-components';

const EnglishWrapper = styled.div`
  font-size: 32px;
  padding-top: 50px;
  font-weight: bold;

  span:first-child {
    color: rgb(239, 70, 63);
  }
  span:nth-child(2) {
    color: black;
  }
  span:last-child {
    color: rgb(239, 70, 63);
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    font-size: 24px;
    padding: 50px 0px;
  }
`;

const EnglishLevel = () => {
  return (
    <EnglishWrapper>
      <span>{`{ ENGLISH - `}</span>
      <span>B1-B2</span>
      <span> }</span>
    </EnglishWrapper>
  );
};

export default EnglishLevel;
