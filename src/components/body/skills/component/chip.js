import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const ChipWrapper = styled.div`
  display: inline-block;
  font-size: 14px;
  background-color: rgb(245,247,249);
  line-height: 42px;
  margin-right: 12px;
  
  height: 42px;
  padding: 0 25px;
`

const Chip = ({ text }) => {
  return (
    <ChipWrapper>
      {text}
    </ChipWrapper>
  );
}

Chip.propTypes = {
  text: PropTypes.string
};

export default Chip;