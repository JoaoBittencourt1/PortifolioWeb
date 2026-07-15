import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="side-lines" aria-hidden="true">
        <span className="side-line side-line-1" />
        <span className="side-line side-line-2" />
      </div>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
