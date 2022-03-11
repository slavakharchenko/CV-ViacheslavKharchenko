import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ChipWrapper = styled.div`
  display: inline-block;
  font-size: 14px;
  background-color: ${({ background }) => (background ? background : `rgb(245,247,249)`)};
  color: ${({ color }) => (color ? color : `black`)};
  line-height: 42px;
  margin-right: 12px;
  margin-bottom: 12px;
  height: 42px;
  padding: 0 25px;
`;

const Chip = ({ text, color, background }) => {
  return (
    <ChipWrapper color={color} background={background}>
      {text}
    </ChipWrapper>
  );
};

Chip.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

export default Chip;
