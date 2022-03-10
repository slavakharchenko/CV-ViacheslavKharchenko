import styled from "styled-components";
import {ListGroup} from "react-bootstrap";
import '../skills.style'

const isTechStack = (props) => props.headertext === 'TECHNOLOGICAL STACK';

export const ListWrapper = styled(ListGroup)`
  font-size: 20px;
  padding-bottom: 16px;
  
  ${props => isTechStack(props) ? `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 80px;
  ` : undefined};

  @media (max-width: 768px) {
    font-size: 16px;
    padding-bottom: 16px;

    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
  }
`

export const ListItem = styled(ListGroup.Item)`
  padding-bottom: 16px;
`

export const SkillWrapper = styled.div`
  padding-top: ${props => isTechStack(props) ? '100px' : '0px'};

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`