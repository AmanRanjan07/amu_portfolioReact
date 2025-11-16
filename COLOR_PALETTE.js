/* 
   TAILWIND GRADIENT COLOR PALETTE FOR TECHNOLOGIES
   Use these color combinations for your technology badges
   Format: "from-COLOR-500 to-COLOR-600" or similar
   
   Copy-paste any gradient to your technology objects!
*/

// ============ COMPLETE COLOR PALETTE ============

// BLUE COLORS (5 variations)
const blueGradients = [
  "from-blue-500 to-blue-600",        // Primary Blue
  "from-blue-600 to-blue-700",        // Dark Blue
  "from-cyan-500 to-cyan-600",        // Cyan (React, Web)
  "from-cyan-600 to-cyan-700",        // Dark Cyan
  "from-sky-500 to-sky-600",          // Sky Blue
];

// GREEN COLORS (5 variations)
const greenGradients = [
  "from-green-500 to-green-600",      // Green (Node, Backend)
  "from-green-600 to-green-700",      // Dark Green (MongoDB)
  "from-emerald-500 to-emerald-600",  // Emerald
  "from-emerald-600 to-emerald-700",  // Dark Emerald
  "from-teal-500 to-teal-600",        // Teal (Tailwind)
];

// ORANGE/YELLOW COLORS (6 variations)
const orangeGradients = [
  "from-orange-500 to-orange-600",    // Orange (HTML, Tools)
  "from-orange-600 to-orange-700",    // Dark Orange
  "from-yellow-400 to-yellow-500",    // Yellow (JavaScript)
  "from-yellow-500 to-yellow-600",    // Dark Yellow
  "from-yellow-500 to-orange-500",    // Gold (Firebase)
  "from-amber-500 to-amber-600",      // Amber
];

// PURPLE COLORS (5 variations)
const purpleGradients = [
  "from-purple-500 to-purple-600",    // Purple (TypeScript)
  "from-purple-600 to-purple-700",    // Dark Purple
  "from-indigo-500 to-indigo-600",    // Indigo
  "from-indigo-600 to-indigo-700",    // Dark Indigo
  "from-violet-500 to-violet-600",    // Violet
];

// PINK/RED COLORS (6 variations)
const pinkRedGradients = [
  "from-pink-500 to-pink-600",        // Pink (Design)
  "from-pink-500 to-red-500",         // Pink-Red (Premium)
  "from-red-500 to-red-600",          // Red (Alert/Security)
  "from-orange-600 to-red-600",       // Orange-Red (D3.js)
  "from-rose-500 to-rose-600",        // Rose
  "from-fuchsia-500 to-fuchsia-600",  // Fuchsia
];

// GRAY COLORS (4 variations)
const grayGradients = [
  "from-gray-500 to-gray-700",        // Gray (Tools, Other)
  "from-slate-500 to-slate-600",      // Slate
  "from-stone-500 to-stone-600",      // Stone
  "from-neutral-500 to-neutral-600",  // Neutral
];

// ============ TECHNOLOGY RECOMMENDATIONS ============

const techColorMap = {
  // FRONTEND TECHNOLOGIES
  React: "from-cyan-500 to-cyan-600",
  "React Native": "from-cyan-600 to-cyan-700",
  Vue: "from-green-500 to-green-600",
  "Vue.js": "from-green-500 to-green-600",
  Angular: "from-red-500 to-red-600",
  "Next.js": "from-gray-500 to-gray-700",
  Svelte: "from-orange-600 to-red-600",
  HTML5: "from-orange-500 to-orange-600",
  CSS3: "from-blue-500 to-blue-600",
  Tailwind: "from-teal-500 to-teal-600",
  "Tailwind CSS": "from-teal-500 to-teal-600",
  Bootstrap: "from-purple-500 to-purple-600",
  Material: "from-indigo-500 to-indigo-600",
  Sass: "from-pink-500 to-rose-600",
  Less: "from-blue-600 to-blue-700",

  // BACKEND TECHNOLOGIES
  Node: "from-green-500 to-green-600",
  "Node.js": "from-green-500 to-green-600",
  Python: "from-blue-500 to-yellow-500",
  Django: "from-green-600 to-green-700",
  Flask: "from-gray-500 to-gray-700",
  Express: "from-gray-600 to-gray-700",
  Java: "from-orange-500 to-orange-600",
  Spring: "from-green-600 to-green-700",
  "Spring Boot": "from-green-500 to-green-600",
  PHP: "from-purple-500 to-purple-600",
  Laravel: "from-red-500 to-red-600",
  Ruby: "from-red-600 to-red-700",
  "Ruby on Rails": "from-red-600 to-red-700",
  Go: "from-cyan-500 to-cyan-600",
  Rust: "from-orange-600 to-red-600",
  C: "from-blue-500 to-blue-600",
  "C++": "from-blue-600 to-blue-700",
  CSharp: "from-purple-600 to-purple-700",
  ".NET": "from-purple-500 to-purple-600",
  Kotlin: "from-purple-600 to-purple-700",
  Swift: "from-orange-500 to-red-500",

  // DATABASES
  MongoDB: "from-green-600 to-green-700",
  MySQL: "from-blue-600 to-blue-700",
  PostgreSQL: "from-blue-600 to-blue-700",
  Firebase: "from-yellow-500 to-orange-500",
  Redis: "from-red-500 to-red-600",
  Elasticsearch: "from-yellow-500 to-yellow-600",
  Cassandra: "from-blue-500 to-blue-600",
  DynamoDB: "from-orange-600 to-orange-700",
  Oracle: "from-red-600 to-red-700",
  SQLite: "from-blue-500 to-blue-600",
  MariaDB: "from-blue-600 to-blue-700",
  CouchDB: "from-orange-600 to-red-600",

  // TOOLS & PLATFORMS
  Git: "from-gray-500 to-gray-700",
  GitHub: "from-gray-600 to-gray-700",
  Docker: "from-cyan-500 to-cyan-600",
  Kubernetes: "from-blue-500 to-blue-600",
  AWS: "from-orange-500 to-orange-600",
  Azure: "from-blue-500 to-blue-600",
  "Google Cloud": "from-yellow-500 to-blue-600",
  Heroku: "from-purple-600 to-purple-700",
  Vercel: "from-gray-700 to-gray-800",
  Netlify: "from-cyan-500 to-cyan-600",
  Jenkins: "from-gray-600 to-gray-700",
  GitLab: "from-orange-600 to-red-600",
  Figma: "from-purple-500 to-pink-500",
  Photoshop: "from-blue-600 to-blue-700",
  Sketch: "from-yellow-500 to-orange-500",
  VSCode: "from-blue-600 to-blue-700",
  Sublime: "from-orange-600 to-red-600",

  // API & SERVICES
  GraphQL: "from-pink-500 to-pink-600",
  REST: "from-green-500 to-green-600",
  Socket: "from-gray-600 to-gray-700",
  "Socket.io": "from-gray-600 to-gray-700",
  Webhook: "from-blue-500 to-blue-600",
  JWT: "from-purple-500 to-purple-600",
  OAuth: "from-blue-500 to-blue-600",

  // LIBRARIES & FRAMEWORKS
  "Framer Motion": "from-pink-500 to-pink-600",
  Plotly: "from-blue-600 to-blue-700",
  "Chart.js": "from-orange-500 to-orange-600",
  D3: "from-orange-600 to-red-600",
  "D3.js": "from-orange-600 to-red-600",
  Recharts: "from-blue-500 to-blue-600",
  Redux: "from-purple-600 to-purple-700",
  Mobx: "from-orange-500 to-orange-600",
  Axios: "from-blue-600 to-blue-700",
  Fetch: "from-green-500 to-green-600",
  Lodash: "from-blue-500 to-blue-600",
  Moment: "from-green-600 to-green-700",
  Webpack: "from-cyan-500 to-cyan-600",
  Babel: "from-yellow-500 to-yellow-600",
  ESLint: "from-purple-500 to-purple-600",
  Jest: "from-red-500 to-red-600",
  Mocha: "from-orange-600 to-red-600",
  Cypress: "from-gray-500 to-gray-700",

  // AUTHENTICATION & SECURITY
  Auth0: "from-red-500 to-red-600",
  Passport: "from-blue-600 to-blue-700",
  "Two-Factor": "from-red-600 to-red-700",
  SSL: "from-green-500 to-green-600",
  CORS: "from-blue-500 to-blue-600",
  Cybersecurity: "from-red-500 to-red-600",
  Security: "from-red-600 to-red-700",
  Encryption: "from-purple-500 to-purple-600",

  // SPECIALIZED
  ML: "from-purple-500 to-blue-600",
  "Machine Learning": "from-purple-500 to-blue-600",
  AI: "from-purple-600 to-pink-600",
  "Artificial Intelligence": "from-purple-600 to-pink-600",
  TensorFlow: "from-orange-500 to-orange-600",
  PyTorch: "from-red-500 to-orange-500",
  Scikit: "from-orange-500 to-orange-600",
  NumPy: "from-blue-500 to-blue-600",
  Pandas: "from-blue-600 to-blue-700",
  DSA: "from-cyan-500 to-cyan-600",
  "Problem Solving": "from-purple-500 to-purple-600",
  Algorithms: "from-blue-500 to-cyan-600",
  "Data Structures": "from-cyan-500 to-cyan-600",
  "Responsive Design": "from-purple-500 to-purple-600",
  "Web Design": "from-pink-500 to-pink-600",
  "UI/UX": "from-pink-500 to-pink-600",
  "API Integration": "from-green-500 to-green-600",
  REST: "from-green-500 to-green-600",
  "Web APIs": "from-cyan-500 to-cyan-600",
};

// ============ QUICK REFERENCE BY CATEGORY ============

const colorsByCategory = {
  FRONTEND: [
    "from-cyan-500 to-cyan-600",      // React, Vue, React Native
    "from-blue-500 to-blue-600",      // HTML5
    "from-teal-500 to-teal-600",      // Tailwind CSS
    "from-purple-500 to-purple-600",  // Bootstrap, Material
  ],

  BACKEND: [
    "from-green-500 to-green-600",    // Node.js, Go
    "from-blue-500 to-yellow-500",    // Python
    "from-green-600 to-green-700",    // Django, Spring
  ],

  DATABASE: [
    "from-green-600 to-green-700",    // MongoDB
    "from-blue-600 to-blue-700",      // MySQL, PostgreSQL
    "from-yellow-500 to-orange-500",  // Firebase
  ],

  DEVOPS: [
    "from-cyan-500 to-cyan-600",      // Docker
    "from-blue-500 to-blue-600",      // Kubernetes, AWS
    "from-gray-500 to-gray-700",      // Git, GitHub
  ],

  DESIGN: [
    "from-purple-500 to-pink-500",    // Figma
    "from-blue-600 to-blue-700",      // Photoshop
  ],
};

// ============ USAGE EXAMPLES ============

// EXAMPLE 1: Special Foodie Website
const specialFoodie = {
  technologies: [
    { name: "HTML5", color: "from-orange-500 to-orange-600" },
    { name: "CSS3", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
    { name: "Responsive Design", color: "from-purple-500 to-purple-600" }
  ]
};

// EXAMPLE 2: Modern Web App
const modernWebApp = {
  technologies: [
    { name: "React", color: "from-cyan-500 to-cyan-600" },
    { name: "Node.js", color: "from-green-500 to-green-600" },
    { name: "MongoDB", color: "from-green-600 to-green-700" },
    { name: "Tailwind CSS", color: "from-teal-500 to-teal-600" }
  ]
};

// EXAMPLE 3: Machine Learning Project
const mlProject = {
  technologies: [
    { name: "Python", color: "from-blue-500 to-yellow-500" },
    { name: "TensorFlow", color: "from-orange-500 to-orange-600" },
    { name: "Scikit-learn", color: "from-orange-500 to-orange-600" },
    { name: "Data Analysis", color: "from-blue-600 to-blue-700" }
  ]
};

// ============ COLOR HARMONY COMBINATIONS ============

// Monochromatic (Single color family)
const monochromatic = [
  "from-blue-500 to-blue-600",
  "from-blue-600 to-blue-700",
  "from-cyan-500 to-cyan-600",
];

// Complementary (Opposite colors)
const complementary = [
  "from-blue-500 to-blue-600",      // Blue
  "from-orange-500 to-orange-600",  // Orange
];

// Triadic (Three colors equally spaced)
const triadic = [
  "from-cyan-500 to-cyan-600",      // Cyan
  "from-red-500 to-red-600",        // Red
  "from-yellow-500 to-yellow-600",  // Yellow
];

// Analogous (Colors next to each other)
const analogous = [
  "from-blue-500 to-blue-600",
  "from-cyan-500 to-cyan-600",
  "from-teal-500 to-teal-600",
];

// ============ EXPORT ALL ============

export {
  blueGradients,
  greenGradients,
  orangeGradients,
  purpleGradients,
  pinkRedGradients,
  grayGradients,
  techColorMap,
  colorsByCategory,
  monochromatic,
  complementary,
  triadic,
  analogous,
};

// HOW TO USE:
// 1. Import in your component: import { techColorMap } from './colorPalette.js'
// 2. Use directly: { name: "React", color: techColorMap.React }
// 3. Or copy-paste specific colors into projectsData.js
