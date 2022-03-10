import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const LowLineWrapper = styled.span`
  font-size: ${({ size }) => size };
  color: rgb(239, 70, 63);

  @media(max-width : 768px) {
    font-size: 40px;
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