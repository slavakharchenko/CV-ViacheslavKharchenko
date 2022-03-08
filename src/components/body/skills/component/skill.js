import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListWrapper, SkillWrapper } from './skill.style';
import Slashes from "../../../slashes";

const Skill = ({ skills, headerText }) => {
  return (
    <SkillWrapper headertext={headerText}>
      <h4>{headerText}</h4>
      <ListWrapper headertext={headerText} variant="flush">
        {
          skills.map((text, i) =>
            <ListItem key={i}>
              <Slashes/> {text}
            </ListItem>
          )
        }
      </ListWrapper>
    </SkillWrapper>
  );
}

Skill.propTypes = {
  skills: PropTypes.array,
  headerText: PropTypes.string,
};

export default Skill;