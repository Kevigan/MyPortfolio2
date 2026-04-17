import React from 'react';
import Skill from './skill';

const Skills = () => {
    return (
        <div className="skills-page">
            <h1>My Skills</h1>
            <div className='skill-content'>
                <div className="skills-list">
                    <Skill name="Unreal Engine" />
                    <Skill name="Unity" />
                    <Skill name="Godot 4" />
                    <Skill name="C++" />
                    <Skill name="C#" />
                    <Skill name="Git" />
                    <Skill name="HTML 5" />
                    <Skill name="CSS" />
                </div>
                <div className="skills-list">
                    <Skill name="JS" />
                    <Skill name="ES6" />
                    <Skill name="React" />
                    <Skill name="Bash" />
                    <Skill name="Node.js" />
                    <Skill name="PostgreSQL" />
                    <Skill name="Express.js" />
                    <Skill name="APIs" />
                </div>
            </div>
        </div>
    );
};

export default Skills;