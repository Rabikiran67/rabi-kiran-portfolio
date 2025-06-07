import { useState } from 'react';

export default function Projects({ projects, onProjectSelect }) {
    const [filter, setFilter] = useState('all');
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'machinelearning', label: 'Machine Learning' },
        { id: 'ai', label: 'AI' },
        { id: 'extension', label: 'Extensions' }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Projects</h2>
                <p className="text-gray-600">Selected work showcasing my skills and experience</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            filter === category.id
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map(project => (
                    <div 
                        key={project.id}
                        onClick={() => onProjectSelect(project)}
                        className="project-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map(skill => (
                                    <span 
                                        key={skill}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}