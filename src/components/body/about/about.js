import PropTypes from 'prop-types';
import React from 'react';
import { AboutWrapper, ContentWrapper, ImageWrapper, DownloadWrapper } from './about.style';
import DownloadButton from './components/downloadButton';
import Photo from './components/photo';
import Title from '../../title';
import Content from './components/content';

const About = ({ aboutMe }) => {
  return (
    <AboutWrapper id='aboutMe'>
      <ContentWrapper>
        <Title paddingBottom='60px' title='HELLO WORLD' />
        <Content content={aboutMe.content} />
        <DownloadWrapper>
          {aboutMe.position}
          <DownloadButton />
        </DownloadWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Photo />
      </ImageWrapper>
    </AboutWrapper>
  );
};

About.propTypes = {
  position: PropTypes.string,
  content: PropTypes.string,
};

export default About;
