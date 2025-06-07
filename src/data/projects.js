export const projects = [
    {
        id: 1,
        title: "HelpDesk Pro - Ticket Raising Platform",
        description: "Built a user-friendly interface with role-agnostic features, facilitating efficient issue reporting for both technical and non-technical users across departments.",
        details: [
            "Developed a full-featured ticket management web app using React.js and Tailwind CSS with local storage for data persistence.",
            "Implemented ticket creation, status tracking, priority filtering, and comment functionality with a responsive UI.",
            "Designed an interactive dashboard with statistics visualization and real-time updates for efficient issue tracking."
        ],
        category: "fullstack",
        skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        link: "#",
        githubLink: "#",
        liveDemo: "#"
    },
    {
        id: 2,
        title: "Fake News Detection",
        description: "Machine learning project to classify news articles as genuine or fake.",
        details: [
            "Performed text cleaning and preprocessing on a fake vs real news dataset using the NLTK library.",
            "Transformed cleaned text data into TF-IDF vectors for feature extraction.",
            "Trained and evaluated a Passive Aggressive Classifier to classify news as fake or real."
        ],
        category: "machinelearning",
        skills: ["Python", "NLP", "Machine Learning", "NLTK"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        link: "#",
        githubLink: "#",
        liveDemo: "#"
    },
    {
        id: 3,
        title: "Smart Attendance System",
        description: "Automated attendance tracking system using facial recognition technology.",
        details: [
            "Developed a machine learning-based smart attendance system using face recognition with OpenCV.",
            "Implemented real-time attendance tracking via webcam, detecting and recognizing faces with Haar Cascade and the face_recognition library.",
            "Automated attendance recording and exported results to an Excel sheet using Pandas."
        ],
        category: "ai",
        skills: ["Python", "OpenCV", "Face Recognition", "Pandas"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        link: "#",
        githubLink: "#",
        liveDemo: "#"
    },
    {
        id: 4,
        title: "Google Chrome Extension To-Do Application",
        description: "Productivity extension for managing tasks directly in the browser.",
        details: [
            "Developed a Chrome extension for task management with local storage persistence.",
            "Implemented features like task creation, completion tracking, and priority setting.",
            "Designed a clean UI with real-time updates and notification system."
        ],
        category: "extension",
        skills: ["JavaScript", "Chrome API", "HTML/CSS", "Local Storage"],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        link: "#",
        githubLink: "#",
        liveDemo: "#"
    }
];

export const projectCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'machinelearning', label: 'Machine Learning' },
    { id: 'ai', label: 'AI' },
    { id: 'extension', label: 'Extensions' }
];