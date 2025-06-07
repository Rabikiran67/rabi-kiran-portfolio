export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                    <p className="text-gray-600">Feel free to reach out for collaborations or just a friendly hello</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-indigo-600 text-xl mr-4"></i>
                                <a href="mailto:rabikiran0406@gmail.com" className="text-gray-700 hover:text-indigo-600">rabikiran0406@gmail.com</a>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-phone text-indigo-600 text-xl mr-4"></i>
                                <a href="tel:+918073628233" className="text-gray-700 hover:text-indigo-600">+91 8073628233</a>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-instagram text-indigo-600 text-xl mr-4"></i>
                                <a href="https://www.instagram.com/gipsy.exe/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">@gipsy.exe</a>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-github text-indigo-600 text-xl mr-4"></i>
                                <a href="https://github.com/Rabikiran67" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">github.com/Rabikiran67</a>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-linkedin text-indigo-600 text-xl mr-4"></i>
                                <a href="https://www.linkedin.com/in/rabi-kiran-824881239/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">linkedin.com/in/rabi-kiran</a>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="Tell me about your project or inquiry..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}