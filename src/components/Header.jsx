import { FaCode } from 'react-icons/fa';

export default function Header({ currentView, setCurrentView, setShowResume }) {
    return (
        <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                            <FaCode className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            RK
                        </h1>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        <nav className="hidden md:flex space-x-6">
                            {[
                                { id: 'home', label: 'Home', icon: '🏠' },
                                { id: 'about', label: 'About', icon: '👋' },
                                { id: 'projects', label: 'Projects', icon: '💻' },
                                { id: 'education', label: 'Education', icon: '🎓' },
                                { id: 'contact', label: 'Contact', icon: '📧' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentView(item.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                                        currentView === item.id 
                                            ? 'bg-indigo-100 text-indigo-700 shadow-md' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <span>{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                        
                        <button
                            onClick={() => setShowResume(true)}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}