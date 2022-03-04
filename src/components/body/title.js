import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Header = styled.h3`
  padding-top: 40px;
  padding-bottom: 20px;

`;

const Title = ({ title }) => {
  return (
    <Header>{title}</Header>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;