export default function ResumeModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">My Resume</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="p-6">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">M RABI KIRAN</h1>
                                <p className="text-gray-600">+91 8073628233 | rabikiran0406@gmail.com</p>
                                <p className="text-gray-600">Bengaluru, KA 560037</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-3">Profile</h2>
                            <p className="text-gray-700">
                                Aspiring Graduate Engineer skilled in software engineering practices, including coding and testing. 
                                Proficient in client communication and able to convey technical ideas clearly and concisely, a true team player. 
                                Capable of applying engineering methods to design and research projects.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-3">Education</h2>
                                <div className="mb-4">
                                    <h3 className="font-medium text-gray-900">Bachelor of Technology (B Tech) in Electrical & Electronics</h3>
                                    <p className="text-gray-600">NATIONAL INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                                    <p className="text-gray-500 text-sm">May 2024 | Odisha, Berhampur</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-3">Technical Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Java</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">JavaScript</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React JS</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Node.js</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">MongoDB</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">HTML/CSS</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Tailwind CSS</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Firebase</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">UI/UX</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Canva</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">AI/ML</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">NLP</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Spring Boot</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">SQL</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">GIT</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-3">Projects</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900">HelpDesk Pro - Ticket Raising Platform</h3>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Built a user-friendly interface with role-agnostic features</li>
                                        <li>Developed a full-featured ticket management web app using React.js and Tailwind CSS</li>
                                        <li>Implemented ticket creation, status tracking, priority filtering, and comment functionality</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Fake News Detection</h3>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Performed text cleaning and preprocessing using NLTK library</li>
                                        <li>Transformed cleaned text data into TF-IDF vectors</li>
                                        <li>Trained and evaluated a Passive Aggressive Classifier</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Smart Attendance System</h3>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Developed a machine learning-based system using face recognition with OpenCV</li>
                                        <li>Implemented real-time attendance tracking via webcam</li>
                                        <li>Automated attendance recording and exported results to Excel</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Google Chrome Extension To-Do Application</h3>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Developed a Chrome extension for task management with local storage persistence</li>
                                        <li>Implemented features like task creation, completion tracking, and priority setting</li>
                                        <li>Designed a clean UI with real-time updates and notification system</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-3">Team Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Project Management</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Teamwork</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Collaboration</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Problem Solving</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-between">
                    <a
                        href="#"
                        download="MRabiKiran_Resume.pdf"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Download Resume
                    </a>
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