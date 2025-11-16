// Dummy content for portfolio sections. Update these objects/arrays later with your real data.

export const about = {
  name: "Aman Ranjan",
  role: "B.Tech CSE Student at University of Science",
  bio: "I'm a passionate developer and problem solver who loves building web apps, exploring cybersecurity, and sharing knowledge.",
  strengths: [
    "Problem-solving",
    "Teamwork",
    "Adaptability",
    "Communication",
  ],
  funFact: "I love hiking and competitive coding!",
  profileImage: "/assets/profile.jpg", // Place a placeholder image in assets
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "Python"]
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "Frameworks & Tools",
    items: ["Django", "Tailwind CSS", "Grommet", "Framer Motion", "Git"]
  },
  {
    category: "Other",
    items: ["Cybersecurity"]
  }
];

export const projects = [
  {
    name: "Portfolio Website",
    description: "A modern, animated portfolio built with React and Tailwind CSS.",
    tags: ["Web", "React", "Tailwind"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    details: "Features dark/light mode, Framer Motion animations, and responsive design.",
    image: "/assets/project1.png"
  },
  {
    name: "Chat App",
    description: "A real-time chat application using Socket.io and Node.js.",
    tags: ["Web", "JavaScript"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://yourchatapp.com",
    details: "Supports group chat, emojis, and notifications.",
    image: "/assets/project2.png"
  },
  // Add more projects as needed
];

export const resume = {
  // Public, shareable resume - use a hosted URL. For Google Drive embed, use the export link format.
  // Original share link: https://drive.google.com/file/d/1QBoy5zF9M-JcsP-LJqDQIkP7_pUkhq-c/view?usp=sharing
  // Embeddable / direct preview URL (works in iframe):
  url: "https://drive.google.com/file/d/1QBoy5zF9M-JcsP-LJqDQIkP7_pUkhq-c/preview"
};

export const blogPosts = [
  {
    title: "Getting Started with React",
    preview: "A beginner's guide to building your first React app.",
    content: "# Getting Started with React\nReact is a powerful library...",
    slug: "getting-started-with-react"
  },
  {
    title: "Cybersecurity Basics",
    preview: "Essential tips to keep your web apps secure.",
    content: "# Cybersecurity Basics\nSecurity is crucial...",
    slug: "cybersecurity-basics"
  },
  // Add more posts as needed
];

export const contact = {
  email: "your.email@example.com",
  location: "Your City, State",
  socials: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aman-ranjan-477534291/" },
    { label: "Twitter", url: "https://twitter.com/yourusername" },
  ]
};
