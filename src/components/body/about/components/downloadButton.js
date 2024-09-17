import React from 'react';
import styled from 'styled-components';

const downloadLink = 'https://drive.google.com/uc?export=download&id=1iOadq1bWpV5W6vduxyt8fwn3k1-q00FO';

const Button = styled.button`
  background-color: rgb(239, 70, 63);
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 12px 30px;
  margin: 15px;
  max-width: 300px;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
  }

  :hover {
    background-color: rgb(236, 26, 19);
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    margin: 15px 0px 0px 0px;
  }
`;

const DownloadButton = () => {
  return (
    <Button>
      <a href={downloadLink} download>
        DOWNLOAD RESUME
      </a>
    </Button>
  );
};

export default DownloadButton;
