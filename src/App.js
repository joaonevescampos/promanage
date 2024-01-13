import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container'
<<<<<<< HEAD
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
=======
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
>>>>>>> 01ea8ba (atualização)
import Projects from './components/pages/Projects';

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar />
=======
     <Navbar />
>>>>>>> 01ea8ba (atualização)
      <Container customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
