import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="h-96 overflow-hidden rounded-lg">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                            
                            <ul className="space-y-3">
                                {project.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheck className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-0.5" />
                                        <span className="ml-2 text-gray-700">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map(skill => (
                                        <span 
                                            key={skill}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Project Links</h4>
                                <div className="space-y-2">
                                    <a 
                                        href={project.link} 
                                        className="flex items-center text-indigo-600 hover:text-indigo-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                                        Live Demo
                                    </a>
                                    <a 
                                        href={project.link} 
                                        className="flex items-center text-indigo-600 hover:text-indigo-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaCode className="w-5 h-5 mr-2" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}