export interface Question_Evasco {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const questions_Evasco: Question_Evasco[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Machine Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which language is used to style a web page?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    id: 3,
    question: "Which language is mainly used to add interactivity to web pages?",
    options: ["CSS", "HTML", "JavaScript", "SQL"],
    answer: "JavaScript",
  },
  {
    id: 4,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 5,
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: "//",
  },
  {
    id: 6,
    question: "Which React hook is commonly used to manage state?",
    options: ["useState", "useStyle", "usePage", "useData"],
    answer: "useState",
  },
  {
    id: 7,
    question: "Which command starts a Vite development server?",
    options: ["npm start", "npm run dev", "npm run start", "vite start"],
    answer: "npm run dev",
  },
  {
    id: 8,
    question: "What is React mainly used for?",
    options: [
      "Creating user interfaces",
      "Managing databases",
      "Creating operating systems",
      "Editing images",
    ],
    answer: "Creating user interfaces",
  },
  {
    id: 9,
    question: "Which file usually contains the main React component?",
    options: ["App.jsx", "package.json", "index.html", "vite.config.js"],
    answer: "App.jsx",
  },
  {
    id: 10,
    question: "Which method is commonly used to render a list in React?",
    options: ["filter()", "forEach()", "map()", "push()"],
    answer: "map()",
  },
];

export default questions_Evasco;