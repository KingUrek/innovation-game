import React from 'react';
import './style.css';
import PieChallenge from '../../generics/PieChallenge/index.jsx';
import ProgressChallenge from '../../generics/ProgressChallenge';
import { SiteContext } from '../../../context';

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

export default function Challenge() {
  // const { user } = useContext(SiteContext)
  const { id, name, description, objectives } = challengeDefault
  return (
    <div className="container Challenge">
      <div className="container-challenge">
        <h1>Desafio do Mês: {name}</h1>
        <h3>{description}</h3>
        <h4>Seu Progresso</h4>
        <PieChallenge objectives={objectives} legend={true}/>
        <ProgressChallenge objectives={objectives} />
      </div>
    </div>
  );
}
