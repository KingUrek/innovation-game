import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../../generics/Inputs';
import { SiteContext } from '../../../context';
import { fetchApi, saveToken } from '../../../services';
import ReportComponent from '../../generics/ReportComponent';
import TreeOfLinks from '../../generics/TreeOfLinks';
import { objEmail, objPassword } from './utils/inputs';

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
      {status.message ? <ReportComponent message={{ status, setStatus }} page="Login" /> : null}
      {!user ?
        <form className="Form" onSubmit={(e) => userLogin(e, setStatus, setUser, setIsFetching)}>
          {[objEmail, objPassword].map((inputs) => (
            <Inputs att={inputs} />
          ))}
          <input className="btn-submit" type="submit" disabled={isFetching} value={isFetching ? 'Carregando' : 'Entrar'} />
          <Link className="link-redirect" to="/Register">Criar nova conta</Link>
        </form>
        : <TreeOfLinks />
      }
    </div>
  );
}
