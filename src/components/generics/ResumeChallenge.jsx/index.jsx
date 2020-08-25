import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PieChallenge from '../PieChallenge';

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
      completed: 3,
      done: false,
    },
    {
      name: "twitee",
      description: "Twitee uma frase com a #desafioBOX",
      points: 50,
      qtd: 1,
      completed: 1,
      done: true,
    },
    {
      name: "Facebook",
      description: "Twitee uma frase com a #desafioBOX",
      points: 80,
      qtd: 1,
      completed: 1,
      done: true,
    },
    {
      name: "TikTok",
      description: "Twitee uma frase com a #desafioBOX",
      points: 80,
      qtd: 1,
      completed: 1,
      done: true,
    },
  ]
}

export default function ResumeChallenge({ challenge = challengeDefault }) {
  const { id, name, objectives } = challenge
  return (
    <div className="ResumeChallenge">
      <h2>Desafio: <Link to={`/challenge`}>{name}</Link></h2>
      <PieChallenge objectives={objectives} />
    </div>
  );
}


