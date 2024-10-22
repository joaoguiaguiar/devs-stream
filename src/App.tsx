import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EstilosGlobais from './components/EstilosGlobais';
import { SearchProvider } from './context/SearchContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import FormPage from './pages/Form';
import 'regenerator-runtime/runtime';

function App() {
  return (
    <SearchProvider>
      <Router>
        <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/form" element={<FormPage/>} /> 
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
