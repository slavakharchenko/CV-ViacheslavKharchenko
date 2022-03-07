import styled from 'styled-components';
import brand from '../../images/brand.svg';

const Container = styled.div`
  height: 28px;
  width: 55px;
  margin: 14px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 36px;
    width: 36px;  
    margin: 13px;
  }
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