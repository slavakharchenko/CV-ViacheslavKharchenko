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

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding-top: 0px;
  }
`