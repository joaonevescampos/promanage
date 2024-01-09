import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contacts from './components/pages/Contacts';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container'


function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Container customClass='min-height'>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
