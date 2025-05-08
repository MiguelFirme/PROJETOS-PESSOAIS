import './ClientFrorm.css'

export default function ProductForm({name, contactNum, contactEmail, empresa, motivo, handleName, handlecontactNum, handlecontactEmail, handleempresa, handlemotivo, saveClient}) {
    return (
        <div className= 'container'>
            <h2>Peça seu Orçamento</h2>
            <form onSubmit={(e) => saveClient(e)}>
                <label className='form-label' htmlFor="nome">Nome:</label>
                <input className='form-input' value={name} type='text' name="nome" onChange={(e) => handleName(e)} required/>
                <label className='form-label' htmlFor="numero">Numero de telefone:</label>
                <input className='form-input' value={contactNum} type='number' name="numero" onChange={(e) => handlecontactNum(e)} required/>
                <label className='form-label' htmlFor="email">E-mail:</label>
                <input className='form-input' value={contactEmail} type='text' name="text" onChange={(e) => handlecontactEmail(e)} required/>
                <label className='form-label' htmlFor="empresa">Nome Fantasia:</label>
                <input className='form-input' value={empresa} type='text' name="empresa" onChange={(e) => handleempresa(e)} required/>
                <label className='form-label' htmlFor="Motivo">Descreva o motivo do contato:</label>
                <input className='form-input' value={motivo} type='text' name="motivo" onChange={(e) => handlemotivo(e)} required/>
                <input className='form-submit' type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}