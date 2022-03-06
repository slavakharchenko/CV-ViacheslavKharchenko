import photo from '../../images/photo.jpeg'
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap'
import Title from "./title";
import React from "react";

const AboutMe = ({ aboutMe }) => {
  return (
    <div>
      <Title title='About Me Test'/>
      <Container>
        <Row>
          <Col>
            <div>Who am I</div>
              <div>
                <img src={photo} alt='my photo'/>
                <div>{aboutMe.position}</div>
                <div>{aboutMe.age}</div>
                <div>{aboutMe.location}</div>
                </div>
          </Col>
          <Col>
            <div>Personal Info</div>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

AboutMe.propTypes = {
  position: PropTypes.string,
  age: PropTypes.string,
  location: PropTypes.string,
};

export default AboutMe;