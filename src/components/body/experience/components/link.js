import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinksWrapper = styled.div`
  font-size: 24px;
  padding-bottom: 16px;
  letter-spacing: 1px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    font-size: 16px;
  }
`;

const LinkWrapper = styled.div`
  padding-bottom: 16px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Link = ({ links }) => {
  const linksList = links.map((link, index) => (
    <LinkWrapper key={index}>
      <a target='_blank' rel='noopener noreferrer' href={link}>
        {link.toUpperCase()}
      </a>
    </LinkWrapper>
  ));

  return <LinksWrapper>{linksList}</LinksWrapper>;
};

Link.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Link;
