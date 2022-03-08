import Header from './components/header/header';
import About from './components/body/about/about';
import Experiences from './components/body/experience/experiences';
import Skills from './components/body/skills/skills';
import cv from './data/curriculumVitae.data';
import Banner from "./components/banner/banner";
import WhoIAm from "./components/banner/whoIAm";

function App() {
  return (
    <div>
      <Header/>
      <About aboutMe={cv.aboutMe}/>
      <Skills skills={cv.skill}/>
      <Banner/>
      <Experiences experience={cv.experiences}/>
      <WhoIAm/>
    </div>
  );
}

export default App;
