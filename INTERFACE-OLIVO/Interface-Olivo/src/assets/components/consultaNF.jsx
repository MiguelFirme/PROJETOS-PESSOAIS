import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ConsultaNotaFiscal() {
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro(null);
    setResultado(null);

    try {
      const response = await fetch('http://localhost:8080/api/notas/consultar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cpfCnpj }),
      });

      if (!response.ok) throw new Error('Erro na consulta');

      const data = await response.json();
      setResultado(data);
    } catch (err) {
      setErro('Erro ao consultar nota fiscal.');
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Página Inicial</Link>
        </nav>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="CPF ou CNPJ"
          value={cpfCnpj}
          onChange={(e) => setCpfCnpj(e.target.value)}
          required
        />
        <button type="submit">Consultar</button>
      </form>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {resultado && (
        <div>
          <p>Nota Fiscal: {resultado.numeroNF}</p>
          <p>Status: {resultado.status}</p>
        </div>
      )}
    </div>
  );
}
