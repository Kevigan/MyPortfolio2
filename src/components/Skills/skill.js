import React from 'react';
import './index.scss';

const Skill = ({ name, level }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={`star ${index < level ? 'filled' : ''}`}>★</span>
  ));

  return (
    <div className="skill">
      <div className="skill-name">{name}</div>
      <div className="skill-stars">{stars}</div>
    </div>
  );
};

export default Skill;