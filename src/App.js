import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Projects from './pages/Projects';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <h1 className='bg-blue-300'>Jai Shree Ram</h1> */}
      <Header/>
      <BrowserRouter>
      <Projects/>
      </BrowserRouter>
      {/* <ProjectCard/> */}
      <Footer/>
    </div>
  );
}

export default App;
