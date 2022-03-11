import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chip from './chip';

const ChipWrapper = styled.div`
  margin-top: 20px;
  margin-right: 10px;
`;

const Chips = ({ chips, color, background }) => {
  const chipItems = chips.map((chip, index) => (
    <Chip key={`${index}`} text={chip} color={color} background={background} />
  ));

  return <ChipWrapper>{chipItems}</ChipWrapper>;
};

Chips.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  background: PropTypes.string,
};

export default Chips;
