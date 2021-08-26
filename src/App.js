import './App.css';
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
