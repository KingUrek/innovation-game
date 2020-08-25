import React, { useState } from 'react';
import './style.css';
import DescriptionModal from './DescriptionModal';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ProgressBar({ data, index }) {
  const { name, go, qtd, description, done } = data
  const [showDetails, setShowDetails] = useState(false)
  const porc = qtd / go * 100;
  return (
    <div className="ProgressBar" onMouseOver={()=>setShowDetails(true)} onMouseLeave={()=>setShowDetails(false)}>
      <text>{name}</text>
      <div className="body-bar">
        <div className="progress-bar">
          <div className="sub-progress-bar" style={{ width: `${porc}%`, background: COLORS[index] }} />
        </div>
        <text>{`${qtd}/${go}`}</text>
      </div>
      {showDetails?<DescriptionModal text={description} desafio={name} done={done}/>:null}
    </div>
  );
}
