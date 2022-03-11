import styled from 'styled-components'
import photo from '../../../../images/photo.png'

const Image = styled.img`
  max-height: 350px;
  max-width: 350px;
  width: 100%;
  height: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    max-height: 250px;
    max-width: 250px;
  }
`

const Photo = () => {
  return (
    <Image src={photo} alt='Photo'/>
  );
}

export default Photo;