import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EstilosGlobais from './components/EstilosGlobais';
import { ProvedorDeBusca } from './context/SearchContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import FormularioPagina from './pages/Form';
import 'regenerator-runtime/runtime';

function App() {
  return (
    <ProvedorDeBusca>
      <Router>
        <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/form" element={<FormularioPagina />} /> 
        </Routes>
      </Router>
    </ProvedorDeBusca>
  );
}

export default App;
