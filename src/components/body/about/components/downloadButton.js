import styled from 'styled-components';

const downloadLink = 'https://drive.google.com/uc?export=download&id=1Pfy_QLV6aD8eOBPsO2qRO3qwYu2NRks0';

const Button = styled.button`
  background-color: rgb(239, 70, 63);
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 12px 30px;
  margin: 15px;
  
  a {
    text-decoration: none;
    color: white;
  }
  
  :hover {
    background-color: rgb(236, 26, 19);
  }
`

const DownloadButton = () => {
  return (
    <Button>
      <a href={downloadLink} download>DOWNLOAD RESUME</a>
    </Button>
  );
}

export default DownloadButton;