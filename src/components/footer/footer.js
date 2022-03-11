import React from 'react';
import { ContactWrapper, ContentWrapper, FooterWrapper, Icons, Email, Phone, Location } from './footer.style';
import Title from '../title';
import PropTypes from 'prop-types';
import Icon from '../icon';

const Footer = ({ info }) => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <Title title='HIRE ME' paddingBottom='60px' />
        <div>Want to work together? Contact me & tell about your project.</div>
      </ContentWrapper>
      <ContactWrapper>
        <Email>{info.email}</Email>
        <Phone>{info.phone}</Phone>
        <Location>{info.location}</Location>

        <Icons>
          <Icon name='email' />
          <Icon name='linkedIn' />
          <Icon name='telegram' />
          <Icon name='github' />
        </Icons>
      </ContactWrapper>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  info: PropTypes.objectOf(PropTypes.string),
};

export default Footer;
