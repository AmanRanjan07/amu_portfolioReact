/**
 * PROJECTS DATA - QUICK ADD GUIDE
 * 
 * How to add new projects to your portfolio:
 * 1. Copy the template below
 * 2. Fill in your project details
 * 3. Add to projectsData array in projectsData.js
 * 4. Save and refresh your browser - Done!
 * 
 * No UI code changes needed - Just update the data!
 */

// ============ PROJECT TEMPLATE ============
const projectTemplate = {
  id: 999,  // Use unique number (auto-increment)
  title: "Project Name",
  shortDescription: "One-liner description (max 120 chars)",
  fullDescription: "Detailed description of what the project does and technologies used",
  image: "https://images.unsplash.com/photo-XXXXXXXXX?w=600&h=400&fit=crop",
  technologies: [
    { name: "React", color: "from-cyan-500 to-cyan-600" },
    { name: "Node.js", color: "from-green-500 to-green-600" },
    { name: "MongoDB", color: "from-green-600 to-green-700" },
    { name: "Tailwind CSS", color: "from-teal-500 to-teal-600" }
  ],
  category: "Full Stack",  // "Frontend" or "Full Stack"
  demoLink: "https://your-project.com",
  sourceLink: "https://github.com/username/project",  // Optional
  stats: {
    views: "1.5K",
    likes: "120"
  },
  featured: false,  // true for featured badge
  year: 2024
};

// ============ EXAMPLES - Copy and modify ============

// Example 1: Frontend Project (No GitHub link)
const projectExample1 = {
  id: 7,
  title: "Portfolio Dashboard",
  shortDescription: "Interactive analytics dashboard with real-time data visualization",
  fullDescription: "A comprehensive portfolio management dashboard built with React and Chart.js, featuring real-time portfolio tracking, performance metrics, and asset allocation visualization.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  technologies: [
    { name: "React", color: "from-cyan-500 to-cyan-600" },
    { name: "Chart.js", color: "from-orange-500 to-orange-600" },
    { name: "Tailwind CSS", color: "from-teal-500 to-teal-600" },
    { name: "Firebase", color: "from-yellow-500 to-orange-500" }
  ],
  category: "Frontend",
  demoLink: "https://portfolio-dashboard.vercel.app",
  sourceLink: null,  // No GitHub link
  stats: {
    views: "2.1K",
    likes: "185"
  },
  featured: false,
  year: 2024
};

// Example 2: Full Stack Project (With GitHub)
const projectExample2 = {
  id: 8,
  title: "Social Media Platform",
  shortDescription: "Full-featured social networking platform with real-time messaging",
  fullDescription: "A comprehensive social platform featuring user authentication, real-time messaging, post feeds, user profiles, and notification system. Built with modern tech stack for scalability.",
  image: "https://images.unsplash.com/photo-1611095856369-f967276ebe4d?w=600&h=400&fit=crop",
  technologies: [
    { name: "React", color: "from-cyan-500 to-cyan-600" },
    { name: "Node.js", color: "from-green-500 to-green-600" },
    { name: "MongoDB", color: "from-green-600 to-green-700" },
    { name: "Socket.io", color: "from-gray-500 to-gray-700" }
  ],
  category: "Full Stack",
  demoLink: "https://social-app.herokuapp.com",
  sourceLink: "https://github.com/yourusername/social-platform",
  stats: {
    views: "3.5K",
    likes: "287"
  },
  featured: true,  // Mark as featured!
  year: 2024
};

// Example 3: Simple Frontend Project
const projectExample3 = {
  id: 9,
  title: "Todo App Pro",
  shortDescription: "Advanced todo application with categories, priorities, and reminders",
  fullDescription: "A feature-rich todo application with task categories, priority levels, due date reminders, and local storage persistence. Clean and intuitive UI with smooth animations.",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  technologies: [
    { name: "React", color: "from-cyan-500 to-cyan-600" },
    { name: "Local Storage", color: "from-purple-500 to-purple-600" },
    { name: "Tailwind CSS", color: "from-teal-500 to-teal-600" }
  ],
  category: "Frontend",
  demoLink: "https://todo-app-pro.vercel.app",
  sourceLink: null,
  stats: {
    views: "1.2K",
    likes: "94"
  },
  featured: false,
  year: 2024
};

// ============ HOW TO ADD TO projectsData.js ============
/*

1. Open src/data/projectsData.js

2. Find the projectsData array:
   export const projectsData = [ ... ];

3. Add your project before the closing bracket:
   
   export const projectsData = [
     {
       id: 1,
       title: "Special Foodie Website",
       // ... other projects ...
     },
     // ADD YOUR PROJECT HERE:
     {
       id: 7,
       title: "Your New Project",
       shortDescription: "...",
       // ... rest of your project data
     }
   ];

4. Save the file

5. Your project will automatically appear on the portfolio!

*/

// ============ UNSPLASH IMAGE URLS (For placeholders) ============
/*

Use these free stock image services for project images:

Unsplash (Free, no attribution required):
- Dashboard: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop
- Social: https://images.unsplash.com/photo-1611095856369-f967276ebe4d?w=600&h=400&fit=crop
- E-commerce: https://images.unsplash.com/photo-1460925895917-adf4e565db42?w=600&h=400&fit=crop
- Weather: https://images.unsplash.com/photo-1532006435990-4f51069749d2?w=600&h=400&fit=crop
- Analytics: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop
- Project Mgmt: https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop

Replace w=600&h=400 with your preferred dimensions (keep aspect ratio)

*/

// ============ TAILWIND COLOR COMBINATIONS ============
/*

Use these for technology badges:

BLUE SHADES:
"from-blue-500 to-blue-600"        // Primary Blue
"from-cyan-500 to-cyan-600"        // Cyan (React, Web)

GREEN SHADES:
"from-green-500 to-green-600"      // Green (Node, Backend)
"from-green-600 to-green-700"      // Dark Green (MongoDB)
"from-emerald-500 to-emerald-600"  // Emerald

ORANGE/YELLOW SHADES:
"from-orange-500 to-orange-600"    // Orange (HTML, Tools)
"from-yellow-400 to-yellow-500"    // Yellow (JavaScript)
"from-yellow-500 to-orange-500"    // Gold (Firebase)

PURPLE/PINK SHADES:
"from-purple-500 to-purple-600"    // Purple (TypeScript)
"from-pink-500 to-pink-600"        // Pink (Design)
"from-pink-500 to-red-500"         // Pink-Red

RED SHADES:
"from-red-500 to-red-600"          // Red (Alert/Security)
"from-orange-600 to-red-600"       // Orange-Red (D3.js)

TEAL/CYAN SHADES:
"from-teal-500 to-teal-600"        // Teal (Tailwind)
"from-teal-600 to-teal-700"        // Dark Teal

GRAY SHADES:
"from-gray-500 to-gray-700"        // Gray (Tools, Other)
"from-slate-500 to-slate-600"      // Slate

*/

export { projectTemplate, projectExample1, projectExample2, projectExample3 };
