import styled from 'styled-components'
import photo from '../../../../images/photo.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  height: 390px;
  width: 390px;
`

const Photo = () => {
  return (
    <Wrapper>
      <Image src={photo} alt='Photo'/>
    </Wrapper>
  );
}

export default Photo;