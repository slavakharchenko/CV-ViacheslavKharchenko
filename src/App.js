import Header from './components/header/header';
import AboutMe from './components/body/aboutMe';
import Experiences from './components/body/experiences';
import Skill from './components/body/skill';
import cv from './data/curriculumVitae.data';
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const Container = styled.div`
  margin-top: 60px;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-left: 20px;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <Header/>
      <Container>
        <Routes>
          <Route path="/aboutMe" element={<AboutMe aboutMe={cv.aboutMe}/>}/>
          <Route path="/skills" element={<Skill skills={cv.skill}/>}/>
          <Route path="/experience" element={<Experiences experience={cv.experiences}/>}/>
          <Route path="*" element={<Navigate replace to="/aboutMe" />} />
        </Routes>
       </Container>
    </BrowserRouter>
  );
}

export default App;
