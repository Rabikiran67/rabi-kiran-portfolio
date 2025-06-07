import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

// Import data
import { projects } from './data/projects';
import { skills } from './data/skills';
import { hobbies, teamSkills } from './data/constants';

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);
    const [showResume, setShowResume] = useState(false);

    const renderCurrentView = () => {
        switch (currentView) {
            case 'home':
                return <HeroSection setCurrentView={setCurrentView} />;
            case 'about':
                // Pass skills, hobbies, and teamSkills as props here
                return <AboutMe skills={skills} hobbies={hobbies} teamSkills={teamSkills} />;
            case 'projects':
                return <Projects projects={projects} onProjectSelect={setSelectedProject} />;
            case 'education':
                return <Education />;
            case 'contact':
                return <Contact />;
            default:
                return <HeroSection setCurrentView={setCurrentView} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
            <Header 
                currentView={currentView} 
                setCurrentView={setCurrentView} 
                setShowResume={setShowResume}
            />
            
            <main className="container mx-auto px-4 py-8">
                {renderCurrentView()}
            </main>

            {/* Modals */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            {showResume && (
                <ResumeModal 
                    onClose={() => setShowResume(false)}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;
