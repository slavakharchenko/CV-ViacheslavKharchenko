import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {ListGroup} from "react-bootstrap";
import Slash from '../../../slashes';


const TasksList = styled(ListGroup)`
  font-size: 20px;
  padding-bottom: 16px;
`;

const TaskList = styled(ListGroup.Item)`
  padding-bottom: 16px;
`;

const Tasks = ({ tasks }) => {
  const taskItems = tasks.map((task, index) =>
    <TaskList key={`${index}-${task}`}>
      <Slash/> {task}
    </TaskList>
  );

  return (
      <TasksList>{taskItems}</TasksList>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
};

export default Tasks;