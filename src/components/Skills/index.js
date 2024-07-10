import React from 'react';
import Skill from './skill';

const Skills = () => {
    return (
        <div className="skills-page">
            <h1>My Skills</h1>
            <div className='skill-content'>
                <div className="skills-list">
                    <Skill name="Unreal Engine" level={4} />
                    <Skill name="Unity" level={3} />
                    <Skill name="Godot 4" level={3} />
                    <Skill name="C++" level={3} />
                    <Skill name="C#" level={3} />
                    <Skill name="Git" level={3} />
                    <Skill name="HTML 5" level={3} />
                    <Skill name="CSS" level={3} />
                </div>
                <div className="skills-list">
                    <Skill name="JS" level={3} />
                    <Skill name="ES6" level={3} />
                    <Skill name="React" level={3} />
                    <Skill name="Bash" level={3} />
                    <Skill name="Node.js" level={3} />
                    <Skill name="PostgreSQL" level={3} />
                    <Skill name="Express.js" level={2} />
                    <Skill name="APIs" level={2} />
                </div>
            </div>
        </div>
    );
};

export default Skills;