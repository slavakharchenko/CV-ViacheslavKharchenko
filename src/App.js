import Header from './components/header/header';
import About from './components/body/about/about';
import Experiences from './components/body/experiences';
import Skills from './components/body/skills/skills';
import cv from './data/curriculumVitae.data';

function App() {
  return (
    <div>
      <Header/>
      <About aboutMe={cv.aboutMe}/>
      <Skills skills={cv.skill}/>
      <Experiences experience={cv.experiences}/>
    </div>
  );
}

export default App;
