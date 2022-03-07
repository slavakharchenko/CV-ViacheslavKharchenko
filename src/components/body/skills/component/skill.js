import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, ListWrapper, SkillWrapper} from './skill.style';

const Skill = ({ skills, headerText }) => {
  return (
    <SkillWrapper headerText={headerText}>
      <h4>{headerText}</h4>
      <ListWrapper headerText={headerText} variant="flush">
        {
          skills.map((text, i) =>
            <ListItem key={i}>
              <span>//</span> {text}
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