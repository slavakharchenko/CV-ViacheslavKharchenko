import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FooterWrapper = styled.footer`
  height: 380px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: rgb(36,32,43);
  padding-top: 60px;
`

export const ContentWrapper = styled.div` 
  width: 550px;
  display: block;
  margin-left: 100px;

  div {
    font-size: 24px;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  flex-direction: column;

  padding-top: 30px;
  margin-right: 100px;
  font-size: 18px;
`

export const Email = styled.div`
  padding-bottom: 10px;
  padding-left: 5px;
`

export const Phone = styled.div`
  padding-bottom: 24px;
  padding-left: 5px;

`

export const Location = styled.div`
  padding-bottom: 60px;
  padding-left: 5px;

`

export const Icons = styled.div`
  display: flow;
`
