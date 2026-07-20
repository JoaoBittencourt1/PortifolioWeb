import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import GradientOrbs from './components/effects/GradientOrbs.jsx';
import ParticlesLayer from './components/effects/ParticlesLayer.jsx';
import './components/effects/experimental.css';
import './App.css';

function App() {
  return (
    <>
      <GradientOrbs />
      <ParticlesLayer />
      <div className="app-content">
        <div className="side-lines" aria-hidden="true">
          <span className="side-line side-line-1" />
          <span className="side-line side-line-2" />
        </div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
