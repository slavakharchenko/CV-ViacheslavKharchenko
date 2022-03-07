import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Tasks from './tasks';
import Title from "./title";

const ExperiencesWrapper = styled.div`
  color: black;
`;

const SpanName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`

const SpanTime = styled.span`
  font-weight: lighter;
  font-size: smaller;
  margin-left: 5px;
`

const Experiences = ({ experience }) => {
  return (
    <ExperiencesWrapper>
      <Title title='Experience'/>
      <div>
        {
          experience.map((e, i) =>
            <div key={i}>
              <div>
                <SpanName>Position:</SpanName>src/components/body/experiences.js
                <span>{e.position}</span>
              </div>
              <div>
                <SpanName>Company:</SpanName>
                <span>{e.company}</span>
                <SpanTime>({e.duration})</SpanTime>
              </div>
              <div>
                <SpanName>Projects:</SpanName>
                <span>{e.projectLinks}</span>
              </div>
              <Tasks tasks={e.tasks}/>
              <div>
                <SpanName>Technological stack:</SpanName>
                <span>{e.technologicalStack}</span>
              </div>
              {
                experience.length - 1 === i ? undefined : <hr/>
              }
            </div>
          )
        }
      </div>
    </ExperiencesWrapper>
  );
}

Experiences.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.string,
    company: PropTypes.string,
    duration: PropTypes.string,
    projectLinks: PropTypes.arrayOf(PropTypes.string),
    tasks: PropTypes.arrayOf(PropTypes.string),
    technologicalStack: PropTypes.string
  }))
};

export default Experiences;