export default function HeroSection({ setCurrentView }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="space-y-6 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Rabi Kiran</span>
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-600">
                    Graduate Engineer | Full Stack Developer
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                    "Strive to build things that make a difference!"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                    Aspiring Graduate Engineer skilled in software engineering practices, including coding and testing. 
                    Proficient in client communication and able to convey technical ideas clearly and concisely.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button 
                        onClick={() => setCurrentView('projects')}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
                    >
                        View My Work
                    </button>
                    <a
                        href="#"
                        download="MRabiKiran_Resume.pdf"
                        className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-lg"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}