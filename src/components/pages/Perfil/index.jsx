import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import ResumeChallenge from '../../generics/ResumeChallenge.jsx';
import ResumeCombo from '../../generics/ResumeCombo/index.jsx';
import './style.css';
import PerfilImage from '../../generics/PerfilImage/index.jsx';
import ButtonCheckout from '../../generics/ButtonCheckout';

const challengeDefault = {
  id: 1,
  name: "Desafio 1",
  description: "Compartilhe para os seus amigos",
  id_combo: 5,
  objectives: [
    {
      name: "Post foto",
      description: "Compartilhe para os seus amigos, marcando DESAFIOBOX",
      points: 100,
      qtd: 2,
      go: 3,
      done: false,
    },
    {
      name: "twitee",
      description: "Twitee uma frase com a #desafioBOX",
      points: 50,
      qtd: 1,
      go: 1,
      done: true,
    },
    {
      name: "Facebook",
      description: "Twitee uma frase com a #desafioBOX",
      points: 80,
      qtd: 1,
      go: 1,
      done: true,
    },
    {
      name: "TikTok",
      description: "Twitee uma frase com a #desafioBOX",
      points: 80,
      qtd: 1,
      go: 1,
      done: true,
    },
  ]
}

export default function Perfil() {
  // const { user } = useContext(SiteContext)
  return (
    <div className="container Perfil">
      <div className="container-perfil">
        <PerfilImage />
        <ResumeCombo />
        <ResumeChallenge challenge={challengeDefault} />
        <ButtonCheckout />
      </div>
    </div>
  );
}
