import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './components/tasks';
import Title from '../../title';
import Link from './components/link';
import Chips from '../../chips';
import { Duration, ContainerWrapper, ExperienceWrapper, GridWrapper, Position, Project } from './experiences.style';

const Experiences = ({ experience }) => {
  return (
    <ContainerWrapper id='experience'>
      <Title title='EXPERIENCE' />
      <GridWrapper>
        {experience.map((e, i) => (
          <ExperienceWrapper key={i}>
            <Project>{e.company.toUpperCase()}</Project>
            <Position>{e.position}</Position>
            <Duration>{e.duration}</Duration>
            <Tasks tasks={e.tasks} />
            <Link links={e.projectLinks} />
            <Chips chips={e.technologicalStack} background={`rgb(239, 70, 63)`} color='white' />
          </ExperienceWrapper>
        ))}
      </GridWrapper>
    </ContainerWrapper>
  );
};

Experiences.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      company: PropTypes.string,
      duration: PropTypes.string,
      projectLinks: PropTypes.arrayOf(PropTypes.string),
      tasks: PropTypes.arrayOf(PropTypes.string),
      technologicalStack: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default Experiences;
