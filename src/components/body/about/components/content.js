import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Text = styled.h1`
  font-size: 24px;
  padding-top: 60px;
`;

const Content = ({ content }) => {
  return (
    <Text>
      {content}
    </Text>
  );
}

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;