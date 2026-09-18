import { FaBriefcase } from "react-icons/fa";

// Define work experience data based on the resume
const experienceData = [
  {
    title: "AI Software Engineer",
    company: "Freelance",
    location: "Berlin / Remote",
    duration: "May 2026 — Present",
    description: "Building full-stack products on MERN and PERN stacks with Node.js, Express.js, Python, and PHP. Implementing AI workflows and RAG pipelines, and working across ORMs including Mongoose, Prisma, and Eloquent. Delivering React.js dashboards and React Native mobile apps with real-time APIs over HTTP and WebSockets.",
  },
  {
    title: "Backend Engineer",
    company: "Salsoft Pvt Ltd",
    location: "Karachi",
    duration: "May 2024 — April 2026",
    description: "Working on MERN and PERN stack backend technologies using Node.js with Express.js framework. Implementing solutions with both NoSQL (MongoDB) and SQL (PostgreSQL) databases using Mongoose and Prisma ORMs. Building real-time applications with HTTP and WebSocket protocols. Integrating APIs with React.js for multiple dashboards and websites.",
    experienceLetter : "https://drive.google.com/file/d/13eakbyVBf-W6VkXk0iOzKNBai_ilRaO6/view?usp=drive_link"
  },
  {
    title: "Software Engineer",
    company: "GFX WebStudio",
    location: "Karachi",
    duration: "May 2022 — April 2024",
    description: "Developed backend solutions using MERN stack with Node.js and Express.js framework. Implemented MongoDB database solutions using Mongoose ORM. Created real-time applications with HTTP and WebSocket protocols. Integrated APIs with React.js for multiple dashboards and websites.",
    experienceLetter : "https://drive.google.com/file/d/1gAumV2oUy31VQgP9tbPYUoFrwaRIRvun/view"
  },
  {
    title: "Jr MERN Developer",
    company: "MiniBig Technology",
    location: "Karachi",
    duration: "August 2021 — April 2022",
    description: "Worked on React.js for HTTP and third-party API integrations in frontend applications.",
    experienceLetter : "https://drive.google.com/file/d/1GLMaOZsCaA6J8tM6ETlNQP2qJj8Pju0E/view"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <FaBriefcase className="text-primary text-xl mr-2" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-lg mt-1">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-primary font-medium mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <p className="text-gray-700">{exp.description}</p>
              <br></br>
             
              {
                exp.experienceLetter?
                 (
                 <p className="text-gray-700" onClick={() =>  window.open(exp?.experienceLetter, '_blank')}>Experience Letter#</p>
                ) : 
                (
                  null
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}