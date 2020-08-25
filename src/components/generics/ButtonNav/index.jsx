import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";


export default function NavButton({ goTo }) {
  const history = useHistory();
  console.log(history)
  return (
    <>
      {goTo
        ? <Link className="NavButton" to={goTo} >◄</Link>
        : <button className="NavButton" onClick={() => history.goBack()}>◄</button>}
    </>
  );
}
