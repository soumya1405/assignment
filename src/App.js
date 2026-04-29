import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Journals from './components/Journals';
import EbooksConferences from './components/EbooksConferences';
import About from './components/About';
import Submit from './components/Submit';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Articles />
      <Journals />
      <EbooksConferences />
      <About />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;
