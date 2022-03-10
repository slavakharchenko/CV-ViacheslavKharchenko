import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Text = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
  }
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