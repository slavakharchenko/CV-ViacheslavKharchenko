import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const SlashWrapper = styled.span`
  font-size: ${({ size }) => size };
  color: rgb(239, 70, 63);
`;

const Slash = ({ size }) => {
  return (
      <SlashWrapper size={size}>_</SlashWrapper>
  );
}

Slash.propTypes = {
  size: PropTypes.string,
};

export default Slash;