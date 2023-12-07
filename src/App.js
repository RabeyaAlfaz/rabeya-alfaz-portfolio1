import './App.scss';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
function App() {
  return (
    <div className="App">
            <section id='HomePage'>
              <Navbar></Navbar>
              <Hero></Hero>
            </section>
            <section>
              <Parallax type="services"></Parallax>
            </section>
            <section id='Services'>
              <Services></Services>
            </section>
            <section>
              <Parallax type="portfolio"></Parallax>
            </section>
            <Portfolio></Portfolio>
            <section id='contact'>
               <Contact></Contact>
            </section>
    </div>
  );
}

export default App;
