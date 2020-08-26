import React, { useContext, useState } from 'react';
import { SiteContext } from '../../../context';
import 'react-credit-cards/es/styles-compiled.css';
import { Redirect, Link } from 'react-router-dom';
import './style.css';
import routes from '../../../routes';

export default function StatusRequest() {
  const { messageRequest, setMessageRequest } = useContext(SiteContext);
  setTimeout(() => {
    setMessageRequest()
  }, 4000);
  return (
    <div className={`StatusRequest ${messageRequest.status}`}>
      <h2>{messageRequest.message}</h2>
    </div>
  );
}
