import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap'
import Title from "../title";
import { Container } from "./skill.style";

const DivContainer = styled.div`
  padding: 5px;
  min-height: 2vh;
`;

const Skill = ({ skills }) => {
  const { automation, manual, technology } = skills;

  const Automation = ({ automation }) => {
    return (
      <DivContainer>
        <h4>Automation testing< /h4>
        <ListGroup variant="flush">
          {
            automation.map((text, i) =>
              <ListGroup.Item key={i}>
                {text}
              </ListGroup.Item>
            )
          }
        </ListGroup>
      </DivContainer>
    );
  }

  const Manual = ({ manual }) => {
    return (
      <DivContainer>
        <h4>Manual testing</h4>
        <ListGroup variant="flush">
          {
            manual.map((text, i) =>
              <ListGroup.Item key={i}>
                {text}
              </ListGroup.Item>
            )
          }
        </ListGroup>
      </DivContainer>
    )
  }

  const Technology = ({ technology }) => {
    return (
      <DivContainer>
        <h4>Technological stack</h4>
        <ListGroup variant="flush">
          {
            technology.map((text, i) =>
              <ListGroup.Item key={i}>
                {text}
              </ListGroup.Item>
            )
          }
        </ListGroup>
      </DivContainer>
    );
  }


  return (
    <Container>
      <Title title='Skills and expertise'/>
      <div>
          <Automation automation = {automation}/>
          <Manual manual = {manual}/>
          <Technology technology = {technology}/>
      </div>
    </Container>
  );
}

Skill.propTypes = {
  automation: PropTypes.array,
  manual: PropTypes.array,
  technology: PropTypes.array,
};

export default Skill;