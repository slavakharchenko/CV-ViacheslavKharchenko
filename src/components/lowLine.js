import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const LowLineWrapper = styled.span`
  font-size: ${({ size }) => size };
  color: rgb(239, 70, 63);

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    font-size: 40px;
  }

  @media only screen and (min-device-width: 1281px) and (max-device-width: 1555px) {
    font-size: 80px;
  }
  
  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    font-size: 70px;
  }
`;

const LowLine = ({ size }) => {
  return (
      <LowLineWrapper size={size}>_</LowLineWrapper>
  );
}

LowLine.propTypes = {
  size: PropTypes.string,
};

export default LowLine;