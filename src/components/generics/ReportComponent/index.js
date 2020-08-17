import React from 'react';
import './style.css';

function ReportComponent({ message, page }) {
  const { status: { success }, setStatus } = message;
  console.log(message, 'redirect')
  setTimeout(() => {
    setStatus({ error: false, success: false, message: '' });
  }, 3000);
  return (
    <div className="ReportComponent">
      <div data-testid="message-report" className={`text-report`}>
        {message.status.message ? <h2>{message.status.message}</h2> : null}
        {success && page === 'Login' && <h3>Login Realizado!</h3>}
        {success && page === 'Register' && <h3>Cadastrado com Sucesso!</h3>}
      </div>
    </div>
  );
}

export default ReportComponent;
