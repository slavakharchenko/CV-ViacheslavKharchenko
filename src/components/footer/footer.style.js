import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 380px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template: 'content contact';
  background: rgb(36, 32, 43);
  padding-top: 60px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template:
      'content'
      'contact';
    padding: 30px 0px 30px 0px;
  }
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  margin-left: 100px;

  div {
    font-size: 24px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 0px;

    div {
      font-size: 16px;
      text-align: center;
    }
  }

  @media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
    margin-left: 50px;
  }
`;

export const ContactWrapper = styled.div`
  grid-area: contact;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  flex-direction: column;

  padding-top: 30px;
  margin-right: 100px;
  font-size: 18px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin-right: 0px;
    font-size: 14px;
  }
`;

export const Email = styled.div`
  padding-bottom: 10px;
  padding-left: 5px;
`;

export const Phone = styled.div`
  padding-bottom: 24px;
  padding-left: 5px;
`;

export const Location = styled.div`
  padding-bottom: 60px;
  padding-left: 5px;
`;

export const Icons = styled.div`
  display: flex;
  @media (max-width: 768px) {
  }
`;
