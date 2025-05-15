import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './assets/components/PaginaInicial';
import ConsultaNotaFiscal from './assets/components/consultaNF';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/consulta" element={<ConsultaNotaFiscal />} />
      </Routes>
    </Router>
  );
}

export default App;
