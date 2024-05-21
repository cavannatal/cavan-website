import React from 'react';
import CImage from '../langphoto/C.png';
import TensorFlowImage from '../langphoto/TensorFlow.png';

const skills = [
    { img: CImage, label: 'C' },
    { img: TensorFlowImage, label: 'TensorFlow' }
];

function SkillGrid() {
    return (
        <div className="container mx-auto px-4 mt-10">
            <h1 className="text-4xl font-bold text-center mb-6">Skills</h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={skill.img} alt={skill.label} className="h-24 w-24 object-contain" />
                        <p className="mt-2 text-center">{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillGrid;
