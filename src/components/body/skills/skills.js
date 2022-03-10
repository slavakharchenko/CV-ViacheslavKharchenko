import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../title';
import Skill from './component/skill';
import Chips from "../../chips";
import EnglishLevel from "./component/english";
import { Auto, Container, Manual, SkillWrapper, Tech } from './skills.style';

const Skills = ({ skills }) => {
  const { automation, manual, technology } = skills;

  return (
    <Container id='skills'>
      <Title title='SKILLS'/>
      <SkillWrapper>
        <Auto>
          <Skill skills = {automation.skills} headerText="AUTOMATION TESTING"/>
          <Chips chips={automation.chips}/>
        </Auto>
        <Manual>
          <Skill skills = {manual.skills} headerText="MANUAL TESTING"/>
          <Chips chips={manual.chips}/>
          <EnglishLevel/>
        </Manual>
        <Tech>
          <Skill skills = {technology.skills} headerText="TECHNOLOGICAL STACK"/>
          <Chips chips={technology.chips}/>
        </Tech>
      </SkillWrapper>
    </Container>
  );
}

Skills.propTypes = {
  automation: PropTypes.object,
  manual: PropTypes.object,
  technology: PropTypes.object,
};

export default Skills;