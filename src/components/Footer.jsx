import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                            <FaCode className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            RK
                        </h2>
                    </div>
                    
                    <div className="flex space-x-6">
                        <a href="mailto:rabikiran0406@gmail.com" className="text-gray-600 hover:text-indigo-600">
                            <FaEnvelope className="text-xl" />
                        </a>
                        <a href="tel:+918073628233" className="text-gray-600 hover:text-indigo-600">
                            <FaPhone className="text-xl" />
                        </a>
                        <a href="https://www.instagram.com/gipsy.exe/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a href="https://github.com/Rabikiran67" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                            <FaGithub className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/rabi-kiran-824881239/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Rabi Kiran. All rights reserved.</p>
                    <p className="mt-1">"Strive to build things that make a difference!"</p>
                </div>
            </div>
        </footer>
    );
}