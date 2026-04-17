import React from 'react';
import './index.scss';

const Skill = ({ name }) => {
    return (
        <div className="skill">
            <div className="skill-name">{name}</div>
        </div>
    );
};

export default Skill;