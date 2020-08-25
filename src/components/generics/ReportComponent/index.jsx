import React from 'react';
import './style.css';

function ReportComponent({ message, page }) {
  const { status: { success, error }, setStatus } = message;
  console.log(message, 'redirect')
  setTimeout(() => {
    setStatus({ error: false, success: false, message: '' });
  }, 4000);
  return (
    <div className={`ReportComponent ${success ? 'success' : 'error'}`}>
      <div className={`text-report`}>
        {error && page === 'Login' && <h3>Algo deu errado!</h3>}
        {error && page === 'Register' && <h3>Algo deu errado!</h3>}
        {message.status.message ? <h2>{message.status.message}</h2> : null}
        {success && page === 'Login' && <h3>Login Realizado!</h3>}
        {success && page === 'Register' && <h3>Cadastrado com Sucesso!</h3>}
        <button className="btn-close" onClick={() => setStatus({ error: false, success: false, message: '' })}>Fechar</button>
      </div>
    </div>
  );
}

export default ReportComponent;
