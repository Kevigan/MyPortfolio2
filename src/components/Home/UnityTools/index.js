import React, { useState } from 'react';
import RhythmTool from './RhythmTool';
import HexLevelEditor from './HexLevelEditor';
import JigsawPuzzle from './JigsawPuzzle';
import DialogueSystem from './DialogueSystem';
import './index.scss';

const UnityToolsChanger = () => {
    const tools = [
        <RhythmTool />,
        <HexLevelEditor />,
        <JigsawPuzzle />,
        <DialogueSystem />
    ];

    const [activeToolIndex, setActiveToolIndex] = useState(0);

    const handleNextTool = () => {
        setActiveToolIndex((prevIndex) => (prevIndex + 1) % tools.length);
    };

    const handlePreviousTool = () => {
        setActiveToolIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length);
    };

    const showTool = (index) => {
        setActiveToolIndex(index);
    };

    return (
        <div className='top-game-container'>
            <nav>
                <button className={activeToolIndex === 0 ? 'active' : ''} onClick={() => showTool(0)}>
                    RhythmTool
                </button>
                <button className={activeToolIndex === 1 ? 'active' : ''} onClick={() => showTool(1)}>
                    HexLevelEditor
                </button>
                <button className={activeToolIndex === 2 ? 'active' : ''} onClick={() => showTool(2)}>
                    JigsawPuzzle
                </button>
                <button className={activeToolIndex === 3 ? 'active' : ''} onClick={() => showTool(3)}>
                    DialogueSystem
                </button>
            </nav>

            <div className="Gamecontainer">
                <nav className="navigator">
                    <button className='navigator-button' onClick={handlePreviousTool}>
                        ? Previous
                    </button>
                </nav>

                {tools[activeToolIndex]}

                <nav className="navigator">
                    <button className='navigator-button' onClick={handleNextTool}>
                        Next ?
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default UnityToolsChanger;