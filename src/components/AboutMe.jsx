import { useState } from 'react';
import { skills } from '../data/skills';
import { hobbies, teamSkills } from '../data/constants';

export default function AboutMe() {
    const skillCategories = [
        { id: 'frontend', label: 'Frontend', color: 'blue' },
        { id: 'backend', label: 'Backend', color: 'green' },
        { id: 'database', label: 'Database', color: 'purple' },
        { id: 'design', label: 'Design', color: 'pink' },
        { id: 'other', label: 'Other', color: 'yellow' }
    ];

    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    A true team player capable of applying engineering methods to design and research projects.
                    Skilled in both technical implementation and effective communication.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                activeCategory === 'all'
                                    ? 'bg-gray-800 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            All Skills
                        </button>
                        {skillCategories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    activeCategory === category.id
                                        ? `bg-${category.color}-600 text-white`
                                        : `bg-${category.color}-100 text-${category.color}-700 hover:bg-${category.color}-200`
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredSkills.map(skill => (
                            <div
                                key={skill.name}
                                className={`project-card bg-white p-4 rounded-lg shadow-md skill-${skill.category}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <i className={`${skill.icon} mr-2 text-lg`}></i>
                                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                                    </div>
                                    <span className="text-sm text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className={`h-2.5 rounded-full ${
                                            skill.category === 'frontend' ? 'bg-blue-500' :
                                            skill.category === 'backend' ? 'bg-green-500' :
                                            skill.category === 'database' ? 'bg-purple-500' :
                                            skill.category === 'design' ? 'bg-pink-500' : 'bg-yellow-500'
                                        }`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Team & Soft Skills</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex flex-wrap gap-3">
                                {teamSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Hobbies & Interests</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {hobbies.map((hobby, index) => (
                                    <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                                        <i className={`${hobby.icon} text-3xl text-indigo-600 mb-2`}></i>
                                        <span className="text-gray-700">{hobby.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
