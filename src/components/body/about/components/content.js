import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 24px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    font-size: 16px;
    padding: 20px;
  }
`;

const Content = ({ content }) => {
  return <Text>{content}</Text>;
};

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
