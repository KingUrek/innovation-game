import React, { useContext, useState } from 'react';
import ShowData from './ShowData';
import StatusRequest from '../../generics/StatusRequest';
import { SiteContext } from '../../../context';
import './style.css';

export default function Review() {
  const { messageRequest } = useContext(SiteContext);
  return (
    <div className="container Review">
      <div className="container-review">
        <ShowData />
        {messageRequest ? <StatusRequest /> : null}
      </div>
    </div>
  );
}
