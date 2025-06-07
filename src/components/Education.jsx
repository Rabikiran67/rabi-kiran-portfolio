export default function Education() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Education</h2>
                <p className="text-gray-600">My academic background and qualifications</p>
            </div>

            <div className="space-y-8">
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900">Bachelor of Technology (B Tech) in Electrical & Electronics</h3>
                    <p className="text-gray-700 font-medium">NATIONAL INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                    <p className="text-gray-500">May 2024 | Odisha, Berhampur</p>
                    <p className="text-gray-600 mt-2">
                        Specialized in electrical systems with coursework in programming and software development.
                        Developed strong problem-solving skills through engineering projects.
                    </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900">Additional Certifications</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li className="text-gray-600">Full Stack Development Certification (2023)</li>
                        <li className="text-gray-600">Data Structures & Algorithms Specialization (2022)</li>
                        <li className="text-gray-600">Cloud Computing Fundamentals (2021)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}