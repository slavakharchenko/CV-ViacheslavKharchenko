import PropTypes from 'prop-types';
import styled from "styled-components";
import {ListGroup} from "react-bootstrap";

const LinksWrapper = styled(ListGroup)`
  font-size: 24px;
  padding-bottom: 16px;
  letter-spacing: 1px; 
`;

const LinkWrapper = styled(ListGroup.Item)`
  padding-bottom: 16px;
  
  a {
    text-decoration: none;
    color: black;
  }
`;

const Link = ({ links }) => {
  const linksList = links.map((link, index) =>
    <LinkWrapper key={index}>
      <a target="_blank" rel="noreferrer" href={link}>
        {link.toUpperCase()}
      </a>
    </LinkWrapper>
  );

  return (
    <LinksWrapper>{linksList}</LinksWrapper>
  );
}

Link.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Link;
