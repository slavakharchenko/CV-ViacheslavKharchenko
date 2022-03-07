import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Header = styled.h1`
  font-size: 100px;
  span {
    color: rgb(239, 70, 63);
  }
`;

const Title = ({ title }) => {
  return (
    <Header>
      {title}
      <span>_</span>
    </Header>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;