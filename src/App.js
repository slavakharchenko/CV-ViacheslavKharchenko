import Header from './components/header/header';
import About from './components/body/about/about';
import Experiences from './components/body/experiences';
import Skill from './components/body/skill/skill';
import cv from './data/curriculumVitae.data';

function App() {
  return (
    <div>
      <Header/>
      <About aboutMe={cv.aboutMe}/>
      <Skill skills={cv.skill}/>
      <Experiences experience={cv.experiences}/>
    </div>
  );
}

export default App;
