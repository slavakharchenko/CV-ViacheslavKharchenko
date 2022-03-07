import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title';
import Skill from './component/skill';
import {Container, SkillWrapper, Tech} from './skills.style';

const Skills = ({ skills }) => {
  const { automation, manual, technology } = skills;

  return (
    <Container>
      <Title title='SKILLS AND EXPERTISE'/>
        <SkillWrapper>
          <Skill skills = {automation} headerText="AUTOMATION TESTING" gridArea="automation"/>
          <Skill skills = {manual} headerText="MANUAL TESTING" gridArea="manual"/>
          <Tech>
            <Skill skills = {technology} headerText="TECHNOLOGICAL STACK" gridArea="tech"/>
          </Tech>
      </SkillWrapper>
    </Container>
  );
}

Skills.propTypes = {
  automation: PropTypes.array,
  manual: PropTypes.array,
  technology: PropTypes.array,
};

export default Skills;