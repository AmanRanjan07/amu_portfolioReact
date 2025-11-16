// Certifications Data - Dynamic management for easy scalability
// Add new certificates here without modifying the UI component

export const certificationsData = [
  {
    id: 1,
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    date: "2024",
    icon: "🍃",
    category: "Database",
    certificateLink: "https://drive.google.com/file/d/1n-fSmEoMHTprl46bHVhrLGMqbpLU7SaF/view?usp=drive_link",
    verified: true,
    color: "from-green-600 to-green-500"
  },
  {
    id: 2,
    title: "Automation Anywhere",
    issuer: "Automation Anywhere",
    date: "2025",
    icon: "🤖",
    category: "RPA & Automation",
    certificateLink: "https://drive.google.com/file/d/1wN-vAbsbusHKhWezMPn9Ul68DhKm_ZTs/view?usp=drive_link",
    verified: true,
    color: "from-purple-600 to-purple-500"
  },
  {
    id: 3,
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "2024",
    icon: "☁️",
    category: "Cloud Infrastructure",
    certificateLink: "https://drive.google.com/file/d/153iLdX__60aOOkIIscjSs8EBqOAwMwWC/view?usp=drive_link",
    verified: true,
    color: "from-cyan-600 to-cyan-500"
  },
  {
    id: 4,
    title: "Data Engineering Virtual Internship",
    issuer: "Accenture",
    date: "2024",
    icon: "📊",
    category: "Data Science",
    certificateLink: "https://drive.google.com/file/d/1NBv1jLeY-Ve6OOxyPlCDlMJmnCMQZDp4/view?usp=drive_link",
    verified: true,
    color: "from-orange-600 to-orange-500"
  },
  {
    id: 5,
    title: "AI Associate",
    issuer: "AI Institute",
    date: "2024",
    icon: "🧠",
    category: "Artificial Intelligence",
    certificateLink: "https://drive.google.com/file/d/1dmh8Z2zTOmGbyil8CM3AACMx-cfRAkZO/view?usp=sharing",
    verified: true,
    color: "from-blue-600 to-blue-500"
  },
  {
    id: 6,
    title: "Linguaskill",
    issuer: "Cambridge Assessment",
    date: "2024",
    icon: "🗣️",
    category: "Language Proficiency",
    certificateLink: "https://drive.google.com/file/d/1NUODaOM91bwle_hFx8vRaYULahUM12P9/view?usp=drive_link",
    verified: true,
    color: "from-yellow-600 to-yellow-500"
  },
  {
    id: 7,
    title: "Oracle Certified Professional",
    issuer: "Oracle",
    date: "2024",
    icon: "🔴",
    category: "Database",
    certificateLink: "https://drive.google.com/file/d/183c8wJ95atu5uHaPSzMXcN1EIYczjBDO/view?usp=drive_link",
    verified: true,
    color: "from-red-600 to-red-500"
  },
  {
    id: 8,
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TechCorp",
    date: "2024",
    icon: "📈",
    category: "Data Science",
    certificateLink: "https://drive.google.com/file/d/1BxYECbc4ZAnZLvTsmL-wmaaV-LPKS2iW/view?usp=drive_link",
    verified: true,
    color: "from-indigo-600 to-indigo-500"
  },
  {
    id: 9,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    icon: "🔐",
    category: "Security",
    certificateLink: "https://drive.google.com/file/d/1eZdNNHi3fSTLxWKZUMMnEaInOE7ogIa9/view?usp=sharing",
    verified: true,
    color: "from-orange-600 to-orange-500"
  }
];

// Helper function to get certifications by category
export const getCertificationsByCategory = (category) => {
  return certificationsData.filter(cert => cert.category === category);
};

// Helper function to get all categories
export const getAllCategories = () => {
  const categories = new Set(certificationsData.map(cert => cert.category));
  return Array.from(categories);
};

// Helper function to get verified certifications only
export const getVerifiedCertifications = () => {
  return certificationsData.filter(cert => cert.verified);
};

// Get total certifications count
export const getTotalCertifications = () => certificationsData.length;

// Get verified count
export const getVerifiedCount = () => getVerifiedCertifications().length;
