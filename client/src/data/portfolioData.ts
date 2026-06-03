import syrenadateImage from "@/assets/images/syrenadate.png";
import chillnparkImage from "@/assets/images/chillnpark.png";
import cardiiImage from "@/assets/images/cardii.png";
import resumeAiImage from "@/assets/images/resume-ai.png";

export const profileData = {
  name: "Zaeem Uz Zafar",
  title: "FullStack Engineer | Backend Engineer | MERN & PERN + Python Stack | Remote & Freelance | AI Tools",
  bio: "Backend Engineer with expertise in MERN and PERN stack applications. Specialized in building robust backend systems using Node.js, Express.js, Python , FastApi  with MongoDB, MySQL, and PostgreSQL. Skilled in implementing both HTTP and WebSocket for real-time applications. Open to remote, part-time, and freelance opportunities across Europe and the USA, delivering scalable, efficient, and high-quality backend solutions.",
  email: "zafarzaeemmern@gmail.com",
  phone: "+49 178 336 72 52",
  location: "Berlin, Germany",
  socialLinks: {
    github: "https://github.com/Sam1001-stack",
    linkedin: "https://www.linkedin.com/in/zaeem-uz-zafar-02bb01190",
    twitter: "https://x.com/zaeemuzzafar/status/1528627024046264320"
  }
};

export const skillsData = [
  {
    title: "Backend Development",
    description: "Node.js, Express.js, Python , FastApi , RESTful APIs, WebSockets for real-time applications, MongoDB, MySQl, PostgreSQL."
  },
  {
    title: "Frontend Development",
    description: "React.js, Next.js , Redux , ReduxToolKit , Redux Query, JavaScript ES6+, API integrations in frontend applications."
  },
  {
    title: "Database Management",
    description: "MongoDB (NoSQL), PostgreSQL , MySql (SQL), Mongoose and Prisma ORM."
  },
  {
    title: "API Development",
    description: "Developing and integrating RESTful APIs, Open AI , Gemini AI , HTTP protocols, real-time communication."
  },
  {
    title: "Deployment & DevOps",
    description: "Heroku, Vercel , cPanel, Render , Railway , Git version control, CI/CD workflows."
  },
  {
    title: "Software Development",
    description: "Full-stack application architecture, dashboard development, theme integration , webApp and website integrations, API integrations, SEO optimization, performance optimization, security optimization, scalability optimization, etc."
  },
  {
    title: "AI Tools",
    description: "Cursor, Claude, Gemini, OpenAI,  Google AI, Lovable AI, Antigravity , etc. for code generation and development."
  }
];

export const educationData = [
  {
    degree: "Master in Artificial Intelligence",
    year: "2026 - Nov 2027",
    institution: "Berlin School of Business and Innovation (BSBI) | Berlin, Germany",
    description: "Enrolled in Master's degree in Artificial Intelligence in November 2027."
  },
  {
    degree: "Bachelor in Software Engineering",
    year: "2017 - 2021",
    institution: "Hamdard University | Karachi, Pakistan",
    description: "Completed Software Engineering degree in 2021."
  }
];

export const certificationData = [
  {
    degree: "Javascript and Ecmascript",
    year: "Jan 2020 - Apr 2020",
    institution: "Udemy",
    description: "Learning JavaScript fundamentals and modern ECMAScript features."
  },
  {
    degree: "React",
    year: "Jan 2021 - Feb 2024",
    institution: "Udemy",
    description: "In-depth React.js learning focused on modern front-end development techniques."
  },
  {
    degree: "MERN Stack App",
    year: "Jan 2022 - Feb 2023",
    institution: "Udemy",
    description: "In-depth Node js with framework Express js and Mongodb."
  },
  {
    degree: "Ai Complete Course",
    year: "Jun 2026 - Dec 2026",
    institution: "Udemy",
    description: "Including Generative and Agentic AI"
  },
]

export const projectsData = [
  {
    title: "TalentSync AI",
    description: "An AI-powered resume platform where candidates build ATS-friendly resumes with coverletter from their details and export PDFs in one go in English and Dutch, with European language support planned. Candidates paste a job description with their profile to generate and save a tailored resume. HR pastes a job description with job details, uploads bulk candidate resumes, and AI ranks the top 10 matches by skills, experience, and education scoring—then sends Zoom interview invites to selected candidates. also show rejecetd candidates and show rejected reasons. Subscription-based access for HR and candidates.",
    image: resumeAiImage,
    technologies: ["Next.js", "Redux RTK Query", "Node.js", "Express", "MongoDB", "Pinecone", "RAG", "OpenAI", "Gemini AI"],
    demoLink: "https://german-resume-ai-builder.vercel.app/de",
    codeLink: "https://github.com",
  },
  {
    title: "Syrena Date",
    description: "A global dating platform connecting verified singles from 150+ countries with AI-powered matching, HD video calls via Agora, real-time chat and messaging, push notifications, Stripe-powered gift purchases for matched recommendations, and paid subscription plans.",
    image: syrenadateImage,
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "Agora", "Stripe"],
    demoLink: "https://react.customdev.solutions/syrenadate/",
    codeLink: "https://github.com",
  },
  {
    title: "Chill N Park",
    description: "A location-based platform that uses your GPS coordinates to find public parking, private parking, food trucks, gas stations, EV stations, Tesla stations, and notifications within a 5km radius on Google Maps. Admin manages all location types and content; the user app shows only searched categories with map markers and GPS-guided navigation for nearby places.",
    image: chillnparkImage,
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Google Maps API", "WebSockets"],
    demoLink: "https://react.customdev.solutions/chill_n_park/admin/signin",
    codeLink: "https://github.com",
  },
  {
    title: "Cardii",
    description: "A complete mobility platform with three roles: vendors sign up separately with Smile ID verification and post self-drive, professional driver, and buy & sell ads, tracking ad details and monthly/yearly revenue in their portal; users sign up, check availability, place orders, and complete activities end-to-end until the vendor files a dispute; admins manage users and vendors (suspend/activate accounts), active/inactive ads, orders, payments, vendor payouts, commission settings, disputes, reviews, settings, and location zones.",
    image: cardiiImage,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe", "Smile ID"],
    demoLink: "https://react.customdev.solutions/cardii/",
    codeLink: "https://github.com",
  },
  {
    title: "100Square Games",
    description: "An online gaming platform offering casual and multiplayer games with user profiles, leaderboards, and in-app rewards.",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=100Square+Games",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    demoLink: "https://100squaregames.example.com/",
    codeLink: "https://github.com",
  },
  {
    title: "Petwarehouse",
    description: "An e-commerce platform for pet supplies with product catalog, inventory management, order tracking, and admin dashboard.",
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Petwarehouse",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    demoLink: "https://petwarehouse.example.com/",
    codeLink: "https://github.com",
  },
  {
    title: "Genematric",
    description: "A genomics analytics platform for managing genetic test results, patient reports, and lab workflow automation for healthcare providers.",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Genematric",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    demoLink: "https://genematric.example.com/",
    codeLink: "https://github.com",
  },
  {
    title: "Eve Doctor",
    description: "A telemedicine app connecting patients with doctors for online consultations, appointment booking, prescriptions, and medical records.",
    image: "https://placehold.co/600x400/ec4899/ffffff?text=Eve+Doctor",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    demoLink: "https://evedoctor.example.com/",
    codeLink: "https://github.com",
  },
  {
    title: "The BMET Medical Posting Community",
    description: "A medical community platform for BMET professionals to share posts, publish blogs, and engage in discussions, with a full admin panel for content moderation and user management.",
    image: "https://placehold.co/600x400/0284c7/ffffff?text=BMET+Medical+Community",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    demoLink: "https://bmetmedical.example.com/",
    codeLink: "https://github.com",
  },
  {
    title: "Center Piece",
    description: "🚀 E-Commerce Cards Purchasing Platform – A scalable web app for seamless card purchasing, role-based management, real-time chat, and future-ready bidding system.",
    image: "https://res.cloudinary.com/dyimz6wal/image/upload/v1755452839/Capture321_zqy4w2.jpg",
    technologies: ["React", "Express" , "Redux", "Node.js", "MongoDB"],
    demoLink: "https://react.customdev.solutions/centerpiece/",
    codeLink: "https://github.com",

  },
    {
    title: "168 Store",
    description: "A chinese ecommerce Marketplace platform with user authentication, product management, and payment processing using stripe.",
    image: "https://res.cloudinary.com/dyimz6wal/image/upload/v1755452660/Capture11_xdl9lh.jpg",
    technologies: ["React", "Express" , "Redux", "Node.js", "MongoDB"],
    demoLink: "https://react.customdev.solutions/168ecommerce/",
    codeLink: "https://github.com",

  },
  {
    title: "Predivauth",
    description: "A ecommerce Marketplace platform with user authentication, product management, and payment processing using stripe.",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747120848704/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/ab623e64-95cc-4193-b40a-09b308b2f1f0/original.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://predivauthmarketplace.com/",
    codeLink: "https://github.com",

  },
  {
    title: "Instapet",
    description: "A pet delievering platform containg driver , user and admin panel with real-time tracking.",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747120883079/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/669aa122-6137-4894-9fd2-453ea0ba3a8c/original.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    demoLink: "https://instapet.co/",
    codeLink: "https://github.com"
  },
  {
    title: "Pet Care",
    description: "A pet care management system with user authentication, pet profiles, assiging Employees and appointment scheduling.",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747120998995/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/4d7cde34-0fd4-49c4-836e-dc0a546cdac8/original.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    demoLink: "https://react.customdev.solutions/dogcare/",
    codeLink: "https://github.com"
  },
  {
    title: "Laundry",
    description: "A laundry management system with user authentication, category , subCategory , products , Google Map apis and order tracking, and payment processing.",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747065059962/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/fbe64e9f-c985-447d-b774-f5021d776e52/original.octet-stream",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    demoLink: "https://react.customdev.solutions/laundry/",
    codeLink: "https://github.com"
  },
  {
    title: "Golden Love",
    description: "A webApp dating sites",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747065348349/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/12f15841-c0d9-4466-aa0e-a5228138cff9/original.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://goldenloveconnections.com/",
    codeLink: "https://github.com"
  },
  {
    title: "Parvin",
    description: "A mobile app dating app",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121028556/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/8264a1e1-0ecd-49e7-9ece-29cd1031724d/original.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://play.google.com/store/apps/details?id=com.parvindatingapp&hl=en",
    codeLink: "https://github.com"
  },
  {
    title: "Cry o Guys",
    description: "An offline survey app , for franchise , superAdmin and users",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121065995/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/ddbd6a27-617b-405d-b474-7763e0b67f54/original.octet-stream",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://play.google.com/store/apps/details?id=com.cryoguys&hl=en",
    codeLink: "https://github.com"
  },
  {
    title: "Kori Hintin",
    description: "A saloon mobile app for hair styler registered and customer appointments.",
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121332960/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/7277f7ab-f544-4800-a4e2-2420e4f65ae1/original.octet-stream",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://react.customdev.solutions/koriHintin/admin/signin",
    codeLink: "https://github.com"
  },
];
