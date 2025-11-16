// Dynamic Projects Data - Add new projects here without changing the UI code
export const projectsData = [
  {
    id: 1,
    title: "Special Foodie Website",
    shortDescription: "A modern food discovery platform with interactive UI",
    fullDescription: "Special Foodie is a dynamic food discovery website showcasing various cuisines and recipes. Built with modern web technologies, it features smooth animations, responsive design, and an intuitive user interface for food enthusiasts.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop",
    technologies: [
      { name: "HTML5", color: "from-orange-500 to-orange-600" },
      { name: "CSS3", color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
      { name: "Responsive Design", color: "from-purple-500 to-purple-600" }
    ],
    category: "Frontend",
    demoLink: "https://ranjanaman007.github.io/SpecialFoodie-website/",
    sourceLink: null,
    stats: {
      views: "2.5K",
      likes: "180"
    },
    featured: true,
    year: 2024
  },
  {
    id: 2,
    title: "LED Project",
    shortDescription: "Interactive LED control system with real-time visualization",
    fullDescription: "An innovative LED control project with real-time visualization and interactive controls. This project demonstrates advanced DOM manipulation and event handling with a modern, responsive interface for controlling LED patterns and colors.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    technologies: [
      { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
      { name: "HTML5", color: "from-orange-500 to-orange-600" },
      { name: "CSS3", color: "from-blue-500 to-blue-600" },
      { name: "Web APIs", color: "from-cyan-500 to-cyan-600" }
    ],
    category: "Frontend",
    demoLink: "https://ranjanaman007.github.io/Led_Project/",
    sourceLink: null,
    stats: {
      views: "1.8K",
      likes: "142"
    },
    featured: true,
    year: 2024
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDescription: "Real-time weather tracking with beautiful visualizations",
    fullDescription: "A comprehensive weather dashboard that displays real-time weather data with beautiful visualizations and forecasts. Features location-based weather updates, hourly forecasts, and weather alerts.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    technologies: [
      { name: "React", color: "from-cyan-500 to-cyan-600" },
      { name: "API Integration", color: "from-blue-500 to-blue-600" },
      { name: "Tailwind CSS", color: "from-teal-500 to-teal-600" },
      { name: "Chart.js", color: "from-orange-500 to-orange-600" }
    ],
    category: "Frontend",
    demoLink: "https://weather-forcast-cdxa.vercel.app/",
    sourceLink: "#",
    stats: {
      views: "4.1K",
      likes: "312"
    },
    featured: false,
    year: 2024
  }
];

// Project categories for filtering
export const projectCategories = [
  { id: "all", label: "All Projects", count: 3 },
  { id: "frontend", label: "Frontend", count: 3 }
];

// Featured projects (shown first)
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "all") return projectsData;
  return projectsData.filter(project => project.category.toLowerCase() === category.toLowerCase());
};

// Get total project count
export const getTotalProjects = () => projectsData.length;
