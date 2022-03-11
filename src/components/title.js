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

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    font-size: 40px;
    padding-bottom: 10px;
  }

  @media only screen and (min-device-width: 1281px) and (max-device-width: 1555px) {
    font-size: 80px;
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    font-size: 70px;
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