import PropTypes from 'prop-types';
import Tasks from './components/tasks';
import Title from "../../title";
import {Container, ExperiencesWrapper, SpanName, SpanTime} from "./experiences.style";

const Experiences = ({ experience }) => {
  return (
    <Container>
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
    </Container>
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