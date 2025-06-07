// Personal Information
export const personalInfo = {
    name: "M RABI KIRAN",
    shortName: "RK",
    title: "Graduate Engineer | Full Stack Developer",
    tagline: "Strive to build things that make a difference!",
    description: "Aspiring Graduate Engineer skilled in software engineering practices, including coding and testing. Proficient in client communication and able to convey technical ideas clearly and concisely.",
    email: "rabikiran0406@gmail.com",
    phone: "+91 8073628233",
    location: "Bengaluru, KA 560037",
    instagram: "https://www.instagram.com/gipsy.exe/",
    github: "https://github.com/Rabikiran67",
    linkedin: "https://www.linkedin.com/in/rabi-kiran-824881239/"
};

// Education Information
export const education = {
    degree: "Bachelor of Technology (B Tech) in Electrical & Electronics",
    institution: "NATIONAL INSTITUTE OF SCIENCE AND TECHNOLOGY",
    graduationDate: "May 2024",
    location: "Odisha, Berhampur",
    description: "Specialized in electrical systems with coursework in programming and software development. Developed strong problem-solving skills through engineering projects."
};

// Additional Certifications
export const certifications = [
    "Full Stack Development Certification (2023)",
    "Data Structures & Algorithms Specialization (2022)",
    "Cloud Computing Fundamentals (2021)"
];

// Navigation Items
export const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
];

// Social Media Links
export const socialLinks = [
    {
        name: "Email",
        icon: "fas fa-envelope",
        url: `mailto:${personalInfo.email}`,
        display: personalInfo.email
    },
    {
        name: "Phone",
        icon: "fas fa-phone",
        url: `tel:${personalInfo.phone}`,
        display: personalInfo.phone
    },
    {
        name: "Instagram",
        icon: "fab fa-instagram",
        url: personalInfo.instagram,
        display: "@gipsy.exe"
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        url: personalInfo.github,
        display: "github.com/Rabikiran67"
    },
    {
        name: "LinkedIn",
        icon: "fab fa-linkedin",
        url: personalInfo.linkedin,
        display: "linkedin.com/in/rabi-kiran"
    }
];

// Theme Colors
export const themeColors = {
    primary: "indigo",
    secondary: "purple",
    accent: "cyan",
    success: "green",
    warning: "yellow",
    error: "red"
};

// Animation Configurations
export const animations = {
    cardHover: "transition: all 0.3s ease",
    pageTransition: "transition-all duration-200",
    modalAnimation: "transition-all duration-300"
};

// Team Skills
export const teamSkills = [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Adaptability",
    "Time Management"
];

// Hobbies
export const hobbies = [
    { name: "Gaming", icon: "fas fa-gamepad" },
    { name: "Music", icon: "fas fa-music" },
    { name: "Traveling", icon: "fas fa-plane" }
];
