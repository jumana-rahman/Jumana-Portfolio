const projects = [
  {
    id: "job-application-tracker",
    title: "Job Application Tracker",
    category: "Tracking Websites",
    image: "/projects/project1.png",
    description:
      "A clean and responsive job application tracker built to manage and organize job search activities efficiently.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://jumana-rahman.github.io/A04-Job-Application-Tracker/",
    github: "https://github.com/jumana-rahman/A04-Job-Application-Tracker",
    challenges:
      "Managing state across multiple components and implementing a clean, intuitive UI for tracking job statuses without a backend was a key challenge.",
    improvements:
      "Add backend integration with user authentication, data persistence with localStorage or a database, and filters for sorting applications by date or status.",
  },
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    category: "Tracking Websites",
    image: "/projects/project2.png",
    description:
      "A modern issue management application designed to simplify bug tracking, task organization and project workflow management with login system.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://jumana-rahman.github.io/A05-GitHub-Issues_Tracker/",
    github: "https://github.com/jumana-rahman/A05-GitHub-Issues_Tracker",
    challenges:
      "Building a functional login system and implementing issue filtering, priority assignment, and status tracking with only client-side technologies.",
    improvements:
      "Integrate with the GitHub API for real issue tracking, add team collaboration features, and implement real-time notifications.",
  },
  {
    id: "techwave-landing-page",
    title: "TechWave Landing Page",
    category: "Figma to HTML",
    image: "/projects/project3.png",
    description:
      "Converted a professional Figma landing page into a fully responsive pixel-perfect website.",
    tech: ["HTML5", "Tailwind CSS", "Figma"],
    live: "https://jumana-rahman.github.io/A02-TechWave/",
    github: "https://github.com/jumana-rahman/A02-TechWave",
    challenges:
      "Achieving pixel-perfect accuracy from the Figma design while ensuring the layout remained fully responsive across all breakpoints.",
    improvements:
      "Add smooth scroll animations, dark mode toggle, and optimize for Core Web Vitals and accessibility.",
  },
  {
    id: "drivefleet",
    title: "DriveFleet",
    category: "Full Stack Development",
    image: "/projects/project4.png",
    description:
      "A full-stack task management application with CRUD operations and authentication system.",
    tech: ["Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    live: "https://a09-drive-fleet-client.vercel.app/",
    github: "https://github.com/jumana-rahman/A09-DriveFleet-Client",
    challenges:
      "Implementing secure authentication, managing CRUD operations across frontend and backend, and handling data validation and error states.",
    improvements:
      "Add role-based access control, file upload support, dashboard analytics, and deployment optimization.",
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    category: "Frontend Development",
    image: "/projects/project5.png",
    description:
      "A modern Next.js application that helps users track friendships, monitor interactions, and stay connected through meaningful communication.",
    tech: ["Next.js", "Tailwind CSS"],
    live: "https://keenkeeper007.vercel.app/",
    github: "https://github.com/jumana-rahman/A07-Keen-Keeper",
    challenges:
      "Learning and implementing Next.js features like server-side rendering and dynamic routing while designing an intuitive user experience.",
    improvements:
      "Add notification system, calendar integration for tracking interactions, and social media linking features.",
  },
];

export default projects;
