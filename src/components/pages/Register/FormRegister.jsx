import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../../generics/Inputs';
import { SiteContext } from '../../../context';
import { fetchApi, saveToken } from '../../../services';
import ButtonCheckout from '../../generics/ButtonCheckout/index';
import ReportComponent from '../../generics/ReportComponent/index';

const objName = {
  label: null,
  type: "text",
  placeholder: "Digite o seu Nome",
  required: true,
  minLength: 3,
  name: "iptName",
}

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

async function userRegister(event, setStatus, setUser) {
  event.preventDefault();
  const { iptName, iptEmail, iptPassword } = event.target;
  const body = {
    name: iptName.value,
    email: iptEmail.value,
    password: iptPassword.value,
  };
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/user/create',
    method: 'POST',
    body,
  });
  console.log(data, 'data');
  if (data.success) {
    setUser({ email: data.data.email, name: data.data.name })
    saveToken(data.data.token)
    return setStatus({ error: false, success: true, message: 'Sucesso' })
  };
  if (!data.success) return setStatus({ error: true, success: false, message: data.message });
}

export default function FormRegister() {
  const { user, setUser } = useContext(SiteContext);
  const [status, setStatus] = useState({ error: false, success: false, message: '' });
  return (
    <div className="Main-Form">
      <h2>Cadastro</h2>
      {!status.message || <ReportComponent message={{ status, setStatus }} page="Register" />}
      {!user ?
        <form className="Form" onSubmit={(e) => userRegister(e, setStatus, setUser)}>
          {[objName, objEmail, objPassword].map((inputs) => (
            <Inputs att={inputs} />
          ))}
          <input type="submit" value="Enviar" />
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
