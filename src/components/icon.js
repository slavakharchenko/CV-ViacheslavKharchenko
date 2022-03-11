import styled from 'styled-components';
import linkedIn from '../images/linkedIn.svg';
import email from '../images/email.svg';
import telegram from '../images/telegram.svg';
import github from '../images/github.svg';

const Container = styled.div`
  height: 44px;
  width: 43px;
  margin: 14px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    height: 36px;
    width: 36px;
    margin: 13px;
  }
  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    height: 36px;
    width: 36px;
    margin: 13px;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

function getIcon(iconName) {
  switch (iconName) {
    case 'linkedIn':
      return {
        link: 'https://www.linkedin.com/in/slavakharchenko/',
        svg: linkedIn,
      };
    case 'email':
      return {
        link: 'mailto:slava.charodey@gmail.com',
        svg: email,
      };
    case 'github':
      return {
        link: 'https://github.com/slavakharchenko',
        svg: github,
      };
    case 'telegram':
      return {
        link: 'https://t.me/charodeyyy',
        svg: telegram,
      };
    default:
      throw new Error(`The icon: ${iconName} does not exist`);
  }
}

const Icon = ({ name }) => {
  const { link, svg } = getIcon(name);
  return (
    <Container>
      <a target='_blank' rel='noreferrer' href={link}>
        <Image src={svg} alt={name} />
      </a>
    </Container>
  );
};

export default Icon;
