import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const comboDefault = {
  id: 1,
  name: "Chás plus",
  description: "Compartilhe para os seus amigos",
}

export default function ResumeCombo({ combo = comboDefault }) {
  const { id, name } = combo
  return (
    <div className="ResumeCombo">
      <div>
        <h2>Seu Pacote: <Link to={`/combo/${id}`}>{name}</Link></h2>

      </div>
    </div>
  );
}


