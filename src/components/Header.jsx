import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';

export default function Header({ currentView, setCurrentView, setShowResume }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const handleClick = (id) => {
    setCurrentView(id);
    setMenuOpen(false); // close menu on mobile
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
            <FaCode className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            RK
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
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
          <button
            onClick={() => setShowResume(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Resume
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-indigo-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3 border-t border-gray-100">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="w-full text-left text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg flex items-center space-x-2"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => {
              setShowResume(true);
              setMenuOpen(false);
            }}
            className="w-full text-left bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            📄 Resume
          </button>
        </div>
      )}
    </header>
  );
}
