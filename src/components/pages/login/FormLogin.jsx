import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Inputs from '../../generics/Inputs';
import { SiteContext } from '../../../context';
import { fetchApi, saveToken } from '../../../services';
import ButtonCheckout from '../../generics/ButtonCheckout/index';
import ReportComponent from '../../generics/ReportComponent/index';

const objEmail = {
  label: null,
  type: "email",
  placeholder: "Digite o seu Email",
  required: true,
  name: "iptEmail",
}

const objPassword = {
  label: null,
  type: "password",
  placeholder: "Digite sua senha",
  required: true,
  name: "iptPassword",
  minLength: 6,
}

async function userLogin(event, setStatus, setUser, setIsFetching) {
  event.preventDefault();
  const { iptEmail, iptPassword } = event.target;
  const body = {
    email: iptEmail.value,
    password: iptPassword.value,
  };
  setIsFetching(true);
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/user/login',
    method: 'POST',
    body,
  });
  setIsFetching(false);
  if (data.success) {
    setUser({ email: data.data.email, name: data.data.name })
    saveToken(data.data.token)
    return setStatus({ error: false, success: true, message: 'Sucesso' })
  };
  if (!data.success) return setStatus({ error: true, success: false, message: data.message });
}

export default function FormLogin() {
  const { user, setUser } = useContext(SiteContext);
  const [status, setStatus] = useState({ error: false, success: false, message: '' });
  const [isFetching, setIsFetching] = useState(false);
  return (
    <div className="Main-Form">
      <h2>Login</h2>
      {!status.message || <ReportComponent message={{ status, setStatus }} page="Login" />}
      {!user ?
        <form className="Form" onSubmit={(e) => userLogin(e, setStatus, setUser, setIsFetching)}>
          {[objEmail, objPassword].map((inputs) => (
            <Inputs att={inputs} />
          ))}
          <input className="btn-submit" type="submit" disabled={isFetching} value={isFetching ? 'Carregando' : 'Entrar'} />
          <Link className="link-login" to="/Register">Criar nova conta</Link>
        </form>
        : <div className="nav-login">
          <Link className="link-login" to="/">Pagina Inicial</Link>
          <Link className="link-login" to="/Perfil">Perfil</Link>
          <ButtonCheckout />
        </div>
      }
    </div>
  );
}
