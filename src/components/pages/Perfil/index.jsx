import React from 'react';
import ResumeChallenge from '../../generics/ResumeChallenge.jsx';
import ResumeCombo from '../../generics/ResumeCombo/index.jsx';
import './style.css';
import PerfilImage from '../../generics/PerfilImage/index.jsx';


export default function Perfil() {
  return (
    <div className="container Perfil">
      <div className="container-perfil">
        <PerfilImage />
        <ResumeCombo />
        <ResumeChallenge />
      </div>
    </div>
  );
}
