import styled from 'styled-components';
import brand from '../../../images/brand.svg';

const Container = styled.div`
  max-height: 100px;
  max-width: 100px;
  margin: 14px;
`

const Image = styled.img`
  max-width: 100%
`

const Brand = () => {
  return (
    <Container>
      <Image src={brand} alt={'brand'}/>
    </Container>
  );
}

export default Brand;