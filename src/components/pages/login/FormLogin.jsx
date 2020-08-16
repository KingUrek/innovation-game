import React, { useState, useContext } from 'react';
import Inputs from './Inputs';
import { SiteContext } from '../../../context';
import { fetchApi } from '../../../services';
import ButtonCheckout from '../../generics/ButtonCheckout';

// const objName = {
//   label: null,
//   type: "text",
//   placeholder: "Digite o seu nome",
//   required: true,
//   name: "iptName",
//   title: "Apenas letras e espaço são permitidos",
// }

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

async function userLogin(event, cb) {
  event.preventDefault();
  const { iptEmail, iptPassword } = event.target;
  const body = {
    email: iptEmail.value,
    password: iptPassword.value,
  };
  console.log(body)
  const data = await fetchApi({
    endpoint: 'https://localhost:3001/user/login',
    method: 'POST',
    body,
  });
  console.log(data, 'data');
  cb(data);
}

export default function FormLogin() {
  const { user, setUser } = useContext(SiteContext);
  return (
    <div className="Main-Form">
      <h2>Login</h2>
      {!user ?
        <form className="Form" onSubmit={(e) => userLogin(e, setUser)}>
          {[objEmail, objPassword].map((inputs) => (
            <Inputs att={inputs} />
          ))}
          <input type="submit" value="Enviar" />
        </form>
        : <ButtonCheckout />}
    </div>
  );
}


