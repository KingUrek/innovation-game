import React from 'react';
import './style.css';
import ProgressBar from './ProgressBar';

// {
//   name: "Post foto",
//   description: "Compartilhe para os seus amigos, marcando DESAFIOBOX",
//   points: 100,
//   qtd: 2,
//   completed: 3,
//   done: false,
// },

export default function ProgressChallenge({ objectives }) {
  return (
    <div className="ProgressChallenge">
      {objectives.map((item, index)=><ProgressBar data={item} key={item.id} index={index} />)}
    </div>
  );
}
