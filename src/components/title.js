import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import LowLine from "./lowLine";

const Header = styled.h1`
  font-size: 100px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom };
  span {
    color: rgb(239, 70, 63);
  } 
`;

const Title = ({ title, paddingBottom = '120px' }) => {
  return (
    <Header paddingBottom={paddingBottom}>
      {title}
      <LowLine size={'100px'}/>
    </Header>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  paddingBottom: PropTypes.string
};

export default Title;