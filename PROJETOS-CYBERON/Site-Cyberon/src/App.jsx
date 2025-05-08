import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleContactNum = (e) => setContactNum(e.target.value);
  const handleContactEmail = (e) => setContactEmail(e.target.value);
  const handleEmpresa = (e) => setEmpresa(e.target.value);
  const handleMotivo = (e) => setMotivo(e.target.value);

  const saveClient = (e) => {
    e.preventDefault();
    const clientData = { name, contactNum, contactEmail, empresa, motivo };
    console.log('Cliente cadastrado:', clientData);
    setName('');
    setContactNum('');
    setContactEmail('');
    setEmpresa('');
    setMotivo('');
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Cadastro de Produto</h2>
        <form onSubmit={saveClient}>
          <label className="form-label" htmlFor="nome">Nome:</label>
          <input
            className="form-input"
            value={name}
            type="text"
            name="nome"
            onChange={handleName}
            required
          />
          <br />
          <label className="form-label" htmlFor="numero">Número de telefone:</label>
          <input
            className="form-input"
            value={contactNum}
            type="number"
            name="numero"
            onChange={handleContactNum}
            required
          />
          <br />
          <label className="form-label" htmlFor="email">E-mail:</label>
          <input
            className="form-input"
            value={contactEmail}
            type="text"
            name="email"
            onChange={handleContactEmail}
            required
          />
          <br />
          <label className="form-label" htmlFor="empresa">Nome Fantasia:</label>
          <input
            className="form-input"
            value={empresa}
            type="text"
            name="empresa"
            onChange={handleEmpresa}
            required
          />
          <br />
          <label className="form-label" htmlFor="motivo">Descreva o motivo do contato:</label>
          <textarea
            className="form-textarea"
            value={motivo}
            name="motivo"
            onChange={handleMotivo}
            required
          />
          <input className="form-submit" type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
}

export default App;