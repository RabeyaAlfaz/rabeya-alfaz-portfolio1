import './App.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
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
            <section id='Services'>services</section>
            <section>
              <Parallax type="portfolio"></Parallax>
            </section>
            <section>portfolio1</section>
            <section>portfolio2</section>
            <section>portfolio3</section>
            <section>contact</section>
    </div>
  );
}

export default App;
