import styled from 'styled-components'
import linkedIn from '../../images/linkedIn.svg'
import email from '../../images/email.svg'
import telegram from '../../images/telegram.svg'
import github from '../../images/github.svg'

const Container = styled.div`
  height: 45px;
  width: 45px;
  margin: 15px;
  @media (max-width: 768px) {
    height: 36px;
    width: 36px;  
    margin: 15px;
  }
`

const Image = styled.img`
  max-width: 100%
`

function getIcon(iconName) {
  switch (iconName) {
    case 'linkedIn':
      return {
        link: 'https://www.linkedin.com/in/slavakharchenko/',
        svg: linkedIn
      }
    case 'email':
      return {
        link: 'mailto:slava.charodey@gmail.com',
        svg: email
      }
    case 'github':
      return {
        link: 'https://github.com/slavakharchenko',
        svg: github
      }
    case 'telegram':
      return {
        link: 'https://t.me/charodeyyy',
        svg: telegram
      }
    default:
      throw new Error(`The icon: ${iconName} does not exist`);
  }
}

const Icon = ({ name }) => {
  const { link, svg } = getIcon(name);
  return (
    <Container>
      <a target="_blank" href={link}>
        <Image src={svg} alt={name}/>
      </a>
    </Container>
  );
}

export default Icon;