import './App.css';
import Nav from './component/Nav';
import Pd from './component/Pd';
import Education from './component/Education';
import Skills from './component/Skills';
import Footers from './component/Footers';
import Projectsclg from './component/Projectsclg';
import I_L from './component/I_L';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/"/>
      </Routes>
    </BrowserRouter>
      <Pd/>
      <Education/>
      <Skills/>
      <Projectsclg/>
      <I_L/>
      <Footers/>
    </>
  );
}

export default App;
