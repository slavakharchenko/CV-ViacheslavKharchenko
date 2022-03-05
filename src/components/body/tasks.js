import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TasksList = styled.ul`
  list-style-type: circle;
  li::marker {
    color: dimgray;
  }
`;

const Tasks = ({ tasks }) => {
  const taskItems = tasks.map((task, index) =>
    <li key={`${index}-${task}`}>{task}</li>
  );

  return (
      <TasksList>{taskItems}</TasksList>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
};

export default Tasks;