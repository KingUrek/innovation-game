import React from 'react';

export default function DescriptionModal({ text, desafio, done }) {
  return (
    <div className="DescriptionModal">
      <h4>{`Descrição (${desafio}):`}{done ? <span className="span-done">✔</span> : null}</h4>
      <p>{text}</p>
    </div>
  );
}
