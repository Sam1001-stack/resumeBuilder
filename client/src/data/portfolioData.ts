import syrenadateImage from "@/assets/images/syrenadate.png";
import chillnparkImage from "@/assets/images/chillnpark.png";
import cardiiImage from "@/assets/images/cardii.png";
import resumeAiImage from "@/assets/images/resume-ai.png";
import financialDashboardImage from "@/assets/images/financial-dashboard.png";
import aiCrmImage from "@/assets/images/ai-crm.png";
import warehouseLogisticsImage from "@/assets/images/warehouse-logistics.png";
import aiEcommerceImage from "@/assets/images/ai-ecommerce-enterprise.png";
import marketplaceAdminImage from "@/assets/images/marketplace-admin.png";
import marketplaceVendorImage from "@/assets/images/marketplace-vendor.png";
import marketplaceAndroidImage from "@/assets/images/marketplace-android.png";
import marketplaceIosImage from "@/assets/images/marketplace-ios.png";
import automatedAccountingImage from "@/assets/images/automated-accounting.png";
import fieldOpsImage from "@/assets/images/fieldops.png";
import type { LocalizedString } from "@/i18n/types";

export const profileData = {
  name: "Zaeem Uz Zafar",
  title: {
    en: "FullStack Engineer | Backend Engineer | MERN & PERN + Php , Python Stack | React Native | Remote & Freelance | AI Tools",
    de: "Full-Stack-Engineer | Backend-Engineer | MERN & PERN + PHP, Python-Stack | React Native | Remote & Freelance | KI-Tools",
  } satisfies LocalizedString,
  bio: {
    en: "Backend Engineer with expertise in MERN and PERN stack applications. Specialized in building robust backend systems using Node.js, Express.js, Python , Php , Laravel , FastApi  with MongoDB, MySQL, and PostgreSQL. Skilled in React Native mobile apps for iOS and Android, and implementing both HTTP and WebSocket for real-time applications. Open to remote, part-time, and freelance opportunities across Europe and the USA, delivering scalable, efficient, and high-quality backend solutions.",
    de: "Backend-Engineer mit Expertise in MERN- und PERN-Stack-Anwendungen. Spezialisiert auf robuste Backend-Systeme mit Node.js, Express.js, Python, PHP, Laravel und FastAPI sowie MongoDB, MySQL und PostgreSQL. Erfahrung mit React-Native-Apps für iOS und Android sowie HTTP und WebSockets für Echtzeitanwendungen. Offen für Remote-, Teilzeit- und Freelance-Möglichkeiten in Europa und den USA – skalierbar, effizient und hochwertig.",
  } satisfies LocalizedString,
  email: "zaeem.zafar.ai@gmail.com",
  phone: "+49 178 336 72 52",
  location: {
    en: "Berlin, Germany",
    de: "Berlin, Deutschland",
  } satisfies LocalizedString,
  socialLinks: {
    github: "https://github.com/Sam1001-stack",
    linkedin: "https://www.linkedin.com/in/zaeem-uz-zafar-02bb01190",
    youtube: "https://youtu.be/uJQh7ww6L7k?si=n6nvtpNIKvTMsABh",
    upwork: "https://www.upwork.com/freelancers/~019a841faa9754d774",
    twitter: "https://x.com/zaeemuzzafar/status/1528627024046264320",
  },
};

export const skillsData = [
  {
    id: "backend",
    title: { en: "Backend Development", de: "Backend-Entwicklung" },
    description: {
      en: "Node.js, Express.js, Python , FastApi , PHP, Laravel , RESTful APIs, WebSockets for real-time applications, MongoDB, MySQl, PostgreSQL.",
      de: "Node.js, Express.js, Python, FastAPI, PHP, Laravel, RESTful APIs, WebSockets für Echtzeitanwendungen, MongoDB, MySQL, PostgreSQL.",
    },
  },
  {
    id: "frontend",
    title: { en: "Frontend Development", de: "Frontend-Entwicklung" },
    description: {
      en: "React.js, Next.js , Redux , ReduxToolKit , Redux Query, JavaScript ES6+, API integrations in frontend applications.",
      de: "React.js, Next.js, Redux, Redux Toolkit, RTK Query, JavaScript ES6+, API-Integrationen in Frontend-Anwendungen.",
    },
  },
  {
    id: "mobile",
    title: { en: "Mobile Development", de: "Mobile Entwicklung" },
    description: {
      en: "React Native (CLI) for iOS and Android — field technician and customer apps, multi-vendor marketplace native apps, API integrations, and mobile UX with real-time features.",
      de: "React Native (CLI) für iOS und Android — Monteurs- und Kunden-Apps, Multi-Vendor-Marketplace-Native-Apps, API-Integrationen und mobiles UX mit Echtzeitfunktionen.",
    },
  },
  {
    id: "database",
    title: { en: "Database Management", de: "Datenbankverwaltung" },
    description: {
      en: "MongoDB (NoSQL), PostgreSQL , MySql (SQL), Mongoose and Prisma ORM.",
      de: "MongoDB (NoSQL), PostgreSQL, MySQL (SQL), Mongoose und Prisma ORM.",
    },
  },
  {
    id: "api",
    title: { en: "API Development", de: "API-Entwicklung" },
    description: {
      en: "Developing and integrating RESTful APIs, Open AI , Gemini AI , HTTP protocols, real-time communication.",
      de: "Entwicklung und Integration von RESTful APIs, OpenAI, Gemini AI, HTTP-Protokolle, Echtzeitkommunikation.",
    },
  },
  {
    id: "devops",
    title: { en: "Deployment & DevOps", de: "Deployment & DevOps" },
    description: {
      en: "Heroku, Vercel , cPanel, Render , Railway , Git version control, CI/CD workflows.",
      de: "Heroku, Vercel, cPanel, Render, Railway, Git-Versionskontrolle, CI/CD-Workflows.",
    },
  },
  {
    id: "software",
    title: { en: "Software Development", de: "Softwareentwicklung" },
    description: {
      en: "Full-stack application architecture, dashboard development, theme integration , webApp and website integrations, API integrations, SEO optimization, performance optimization, security optimization, scalability optimization, etc.",
      de: "Full-Stack-Architektur, Dashboard-Entwicklung, Theme-Integration, WebApp- und Website-Integrationen, API-Integrationen, SEO-, Performance-, Sicherheits- und Skalierungsoptimierung u. a.",
    },
  },
  {
    id: "ai",
    title: { en: "AI Tools", de: "KI-Tools" },
    description: {
      en: "Cursor, Claude, Gemini, OpenAI,  Google AI, Lovable AI, Antigravity , etc. for code generation and development.",
      de: "Cursor, Claude, Gemini, OpenAI, Google AI, Lovable AI, Antigravity u. a. für Codegenerierung und Entwicklung.",
    },
  },
];

export const educationData = [
  {
    degree: {
      en: "Master in Artificial Intelligence",
      de: "Master in Künstlicher Intelligenz",
    },
    year: "2026 - Nov 2027",
    institution: {
      en: "Berlin School of Business and Innovation (BSBI) | Berlin, Germany",
      de: "Berlin School of Business and Innovation (BSBI) | Berlin, Deutschland",
    },
    description: {
      en: "Enrolled in Master's degree in Artificial Intelligence in November 2027.",
      de: "Eingeschrieben im Masterstudiengang Künstliche Intelligenz ab November 2027.",
    },
  },
  {
    degree: {
      en: "Bachelor in Software Engineering",
      de: "Bachelor in Software Engineering",
    },
    year: "2017 - 2021",
    institution: {
      en: "Hamdard University | Karachi, Pakistan",
      de: "Hamdard University | Karachi, Pakistan",
    },
    description: {
      en: "Completed Software Engineering degree in 2021.",
      de: "Abschluss des Software-Engineering-Studiums im Jahr 2021.",
    },
  },
];

export const certificationData = [
  {
    degree: { en: "Javascript and Ecmascript", de: "JavaScript und ECMAScript" },
    year: "Jan 2020 - Apr 2020",
    institution: { en: "Udemy", de: "Udemy" },
    description: {
      en: "Learning JavaScript fundamentals and modern ECMAScript features.",
      de: "JavaScript-Grundlagen und moderne ECMAScript-Features.",
    },
  },
  {
    degree: { en: "React", de: "React" },
    year: "Jan 2021 - Feb 2024",
    institution: { en: "Udemy", de: "Udemy" },
    description: {
      en: "In-depth React.js learning focused on modern front-end development techniques.",
      de: "Vertieftes React.js-Lernen mit Fokus auf moderne Frontend-Techniken.",
    },
  },
  {
    degree: { en: "MERN Stack App", de: "MERN-Stack-App" },
    year: "Jan 2022 - Feb 2023",
    institution: { en: "Udemy", de: "Udemy" },
    description: {
      en: "In-depth Node js with framework Express js and Mongodb.",
      de: "Vertieftes Node.js mit Express.js und MongoDB.",
    },
  },
  {
    degree: { en: "Ai Complete Course", de: "KI-Komplettkurs" },
    year: "Jun 2026 - Dec 2026",
    institution: { en: "Udemy", de: "Udemy" },
    description: {
      en: "Including Generative and Agentic AI",
      de: "Inklusive Generativer und Agentischer KI",
    },
  },
];

export const experienceData = [
  {
    title: { en: "AI Software Engineer", de: "AI Software Engineer" },
    company: { en: "Freelance", de: "Freelance" },
    location: { en: "Berlin / Remote", de: "Berlin / Remote" },
    duration: {
      en: "May 2026 — Present",
      de: "Mai 2026 — heute",
    },
    description: {
      en: "Building full-stack products on MERN and PERN stacks with Node.js, Express.js, Python, and PHP. Implementing AI workflows and RAG pipelines, and working across ORMs including Mongoose, Prisma, and Eloquent. Delivering React.js dashboards and React Native mobile apps with real-time APIs over HTTP and WebSockets.",
      de: "Entwicklung von Full-Stack-Produkten auf MERN- und PERN-Stacks mit Node.js, Express.js, Python und PHP. Umsetzung von KI-Workflows und RAG-Pipelines sowie Arbeit mit ORMs wie Mongoose, Prisma und Eloquent. Lieferung von React.js-Dashboards und React-Native-Apps mit Echtzeit-APIs über HTTP und WebSockets.",
    },
  },
  {
    title: { en: "Backend Engineer", de: "Backend Engineer" },
    company: { en: "Salsoft Pvt Ltd", de: "Salsoft Pvt Ltd" },
    location: { en: "Karachi", de: "Karachi" },
    duration: {
      en: "May 2024 — April 2026",
      de: "Mai 2024 — April 2026",
    },
    description: {
      en: "Working on MERN and PERN stack backend technologies using Node.js with Express.js framework. Implementing solutions with both NoSQL (MongoDB) and SQL (PostgreSQL) databases using Mongoose and Prisma ORMs. Building real-time applications with HTTP and WebSocket protocols. Integrating APIs with React.js for multiple dashboards and websites.",
      de: "Backend-Entwicklung mit MERN- und PERN-Stack auf Basis von Node.js und Express.js. Lösungen mit NoSQL (MongoDB) und SQL (PostgreSQL) über Mongoose und Prisma. Aufbau von Echtzeitanwendungen mit HTTP und WebSockets. API-Integration mit React.js für Dashboards und Websites.",
    },
    experienceLetter:
      "https://drive.google.com/file/d/13eakbyVBf-W6VkXk0iOzKNBai_ilRaO6/view?usp=drive_link",
  },
  {
    title: { en: "Software Engineer", de: "Software Engineer" },
    company: { en: "GFX WebStudio", de: "GFX WebStudio" },
    location: { en: "Karachi", de: "Karachi" },
    duration: {
      en: "May 2022 — April 2024",
      de: "Mai 2022 — April 2024",
    },
    description: {
      en: "Developed backend solutions using MERN stack with Node.js and Express.js framework. Implemented MongoDB database solutions using Mongoose ORM. Created real-time applications with HTTP and WebSocket protocols. Integrated APIs with React.js for multiple dashboards and websites.",
      de: "Backend-Lösungen mit MERN-Stack (Node.js, Express.js). MongoDB mit Mongoose ORM. Echtzeitanwendungen mit HTTP und WebSockets. API-Integration mit React.js für Dashboards und Websites.",
    },
    experienceLetter:
      "https://drive.google.com/file/d/1gAumV2oUy31VQgP9tbPYUoFrwaRIRvun/view",
  },
  {
    title: { en: "Jr MERN Developer", de: "Jr. MERN Developer" },
    company: { en: "MiniBig Technology", de: "MiniBig Technology" },
    location: { en: "Karachi", de: "Karachi" },
    duration: {
      en: "August 2021 — April 2022",
      de: "August 2021 — April 2022",
    },
    description: {
      en: "Worked on React.js for HTTP and third-party API integrations in frontend applications.",
      de: "Arbeit mit React.js für HTTP- und Drittanbieter-API-Integrationen in Frontend-Anwendungen.",
    },
    experienceLetter:
      "https://drive.google.com/file/d/1GLMaOZsCaA6J8tM6ETlNQP2qJj8Pju0E/view",
  },
];

export const projectsData = [
  {
    title: { en: "Automated Accounting", de: "Automated Accounting" },
    description: {
      en: "German DATEV pre-booking platform for buyback and marketplace businesses. Imports Bank, PayPal, JTL, Amazon, Back Market, and Refurbed data into MongoDB, runs system policies and human rules with open/conflict HITL queues, then exports reviewed bookings as DATEV EXTF. Includes accrual journals, payout reconciliation, ECB FX, and dual Admin/User portals with a German UI.",
      de: "Deutsche DATEV-Vorbuchungsplattform für Buyback- und Marketplace-Unternehmen. Import von Bank-, PayPal-, JTL-, Amazon-, Back-Market- und Refurbed-Daten nach MongoDB, Systemrichtlinien und menschliche Regeln mit Open-/Konflikt-HITL-Warteschlangen, Export geprüfter Buchungen als DATEV EXTF. Inklusive Abgrenzungsjournale, Auszahlungsabstimmung, EZB-FX sowie Admin-/User-Portale mit deutscher UI.",
    },
    image: automatedAccountingImage,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux RTK Query", "Zustand", "Node.js", "Express", "MongoDB", "Redis", "JWT", "Socket.IO"],
    demoLink: "https://automated-accounting-and-datev-pre.vercel.app/",
    codeLink: "https://github.com/annikasassistant-byte/Automated-Accounting-And-DATEV-Pre-Booking-System-Frontend",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "FieldOps", de: "FieldOps" },
    description: {
      en: "Multi-tenant SaaS for DACH Handwerk field service: Anfrage → Plantafel → Einsatz → Rechnung. Super Admin manages tenants across the platform; office staff plan jobs and billing; Monteur and Kunde use dedicated React Native apps for field work and customer tracking. Includes role-based portals (Super Admin, Büro, Buchhaltung, Monteur, Kunde), emergency service monitoring, Stripe subscription billing, and German UI.",
      de: "Multi-Tenant-SaaS für DACH-Handwerk Außendienst: Anfrage → Plantafel → Einsatz → Rechnung. Super Admin verwaltet Mandanten; Büro plant Einsätze und Abrechnung; Monteur und Kunde nutzen eigene React-Native-Apps. Rollenbasierte Portale (Super Admin, Büro, Buchhaltung, Monteur, Kunde), Notdienst-Monitoring, Stripe-Abos und deutsche UI.",
    },
    image: fieldOpsImage,
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Laravel", "PHP", "PostgreSQL", "Laravel Sanctum", "Stripe", "React Native"],
    demoLink: "https://field-ops-main-web-app-iapv.vercel.app/",
    codeLink: "https://github.com/Sam1001-stack/FieldOps-Main-Web-App",
    staffLink: "https://field-ops-main-web-app-iapv.vercel.app/apps/field",
    customerLink: "https://field-ops-main-web-app-iapv.vercel.app/apps/customer",
    isFeatured: false,
    isMobile: true,
  },
  {
    title: { en: "Marketplace Multi Vendor App", de: "Marketplace Multi-Vendor-App" },
    description: {
      en: "A full multi-vendor marketplace merging Admin, Vendor, and native mobile apps (iOS & Android). Admins manage vendors, products, orders, payments, and commissions; vendors run their store with inventory, shipping, and earnings; customers shop via React Native apps with cart, checkout, wallet, and order tracking.",
      de: "Vollständiger Multi-Vendor-Marketplace aus Admin-, Vendor- und nativen Mobile-Apps (iOS & Android). Admins verwalten Vendoren, Produkte, Bestellungen, Zahlungen und Provisionen; Vendoren führen Shop, Lager und Versand; Kunden shoppen per React Native mit Warenkorb, Checkout, Wallet und Sendungsverfolgung.",
    },
    image: marketplaceAdminImage,
    images: [marketplaceAdminImage, marketplaceVendorImage, marketplaceAndroidImage, marketplaceIosImage],
    technologies: ["React", "React Native", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
    demoLink: "https://market-place-admin-orcin.vercel.app/",
    v_demoLink: "https://market-place-vendor-mauve.vercel.app/",
    codeLink: "https://github.com/Sam1001-stack/Market_Place_User_Mobile_App",
    v_codeLink: "https://github.com/Sam1001-stack/Market_Place_Vendor",
    a_codeLink: "https://github.com/Sam1001-stack/Market_Place_Admin",
    customerLink: "https://market-place-admin-orcin.vercel.app/app-screenshots",
    isFeatured: true,
    isMobile: true,
  },
  {
    title: { en: "Financial Dashboard", de: "Financial Dashboard" },
    description: {
      en: "A real-time financial analytics dashboard for tracking revenue, expenses, cash flow, and KPIs with interactive charts, role-based access, and exportable reports for finance teams.",
      de: "Echtzeit-Finanzanalyse-Dashboard für Umsatz, Ausgaben, Cashflow und KPIs mit interaktiven Charts, rollenbasierter Zugriffskontrolle und exportierbaren Berichten für Finanzteams.",
    },
    image: financialDashboardImage,
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Chart.js"],
    demoLink: "https://private-debt-investor-frontend.vercel.app/",
    codeLink: "https://github.com/annikasassistant-byte/Private-Debt-Investor-Frontend",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "AI CRM", de: "AI CRM" },
    description: {
      en: "An AI-powered CRM that manages leads, contacts, and pipelines with smart lead scoring, automated follow-ups, email insights, and predictive recommendations for sales teams.",
      de: "KI-gestütztes CRM für Leads, Kontakte und Pipelines mit smartem Lead-Scoring, automatischen Follow-ups, E-Mail-Insights und prognostischen Empfehlungen für Vertriebsteams.",
    },
    image: aiCrmImage,
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "OpenAI", "Redux RTK Query"],
    demoLink: "https://ai-crm-puce-psi.vercel.app/",
    codeLink: "https://github.com/Sam1001-stack/AI-CRM",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "AI Ecommerce Enterprise", de: "AI Ecommerce Enterprise" },
    description: {
      en: "An enterprise e-commerce platform with AI product recommendations, smart inventory forecasting, multi-vendor support, order management, and Stripe-powered payments at scale.",
      de: "Enterprise-E-Commerce-Plattform mit KI-Produktempfehlungen, intelligenter Bestandsprognose, Multi-Vendor-Support, Auftragsverwaltung und Stripe-Zahlungen in großem Maßstab.",
    },
    image: aiEcommerceImage,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "OpenAI", "Redis"],
    demoLink: "https://ai-ecommerce-enterprices.vercel.app",
    codeLink: "https://github.com/Sam1001-stack/Ai-Ecommerce-Enterprices",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Warehouse Logistics", de: "Warehouse Logistics" },
    description: {
      en: "A warehouse logistics system for inventory tracking, inbound/outbound shipments, barcode scanning, route planning, and real-time stock visibility across multiple warehouses.",
      de: "Lagerlogistik-System für Bestandsverfolgung, Ein-/Ausgänge, Barcode-Scanning, Routenplanung und Echtzeit-Bestandsübersicht über mehrere Lager.",
    },
    image: warehouseLogisticsImage,
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "WebSockets"],
    demoLink: "https://warehouse-logistics-two.vercel.app",
    codeLink: "https://github.com/Sam1001-stack/Warehouse-Logistics",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "TalentSync AI", de: "TalentSync AI" },
    description: {
      en: "An AI-powered resume platform where candidates build ATS-friendly resumes with coverletter from their details and export PDFs in one go in English and Dutch, with European language support planned. Candidates paste a job description with their profile to generate and save a tailored resume. HR pastes a job description with job details, uploads bulk candidate resumes, and AI ranks the top 10 matches by skills, experience, and education scoring—then sends Zoom interview invites to selected candidates. also show rejecetd candidates and show rejected reasons. Subscription-based access for HR and candidates.",
      de: "KI-gestützte Resume-Plattform: Kandidaten erstellen ATS-freundliche Lebensläufe mit Anschreiben und exportieren PDFs auf Englisch und Niederländisch (weitere EU-Sprachen geplant). Stellenanzeige + Profil erzeugen einen maßgeschneiderten Lebenslauf. HR lädt Stellenbeschreibung und Bewerber-CVs hoch; KI rankt die Top-10 nach Skills, Erfahrung und Ausbildung und sendet Zoom-Einladungen. Abgelehnte Kandidaten inkl. Gründen. Abo-Zugang für HR und Kandidaten.",
    },
    image: resumeAiImage,
    technologies: ["Next.js", "Redux RTK Query", "Node.js", "Express", "MongoDB", "Pinecone", "RAG", "OpenAI", "Gemini AI"],
    demoLink: "https://german-resume-ai-builder.vercel.app/de",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Syrena Date", de: "Syrena Date" },
    description: {
      en: "A global dating platform connecting verified singles from 150+ countries with AI-powered matching, HD video calls via Agora, real-time chat and messaging, push notifications, Stripe-powered gift purchases for matched recommendations, and paid subscription plans.",
      de: "Globale Dating-Plattform für verifizierte Singles aus 150+ Ländern mit KI-Matching, HD-Videoanrufen via Agora, Echtzeit-Chat, Push-Benachrichtigungen, Stripe-Geschenkkäufen und bezahlten Abos.",
    },
    image: syrenadateImage,
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "Agora", "Stripe"],
    demoLink: "https://react.customdev.solutions/syrenadate/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Chill N Park", de: "Chill N Park" },
    description: {
      en: "A location-based platform that uses your GPS coordinates to find public parking, private parking, food trucks, gas stations, EV stations, Tesla stations, and notifications within a 5km radius on Google Maps. Admin manages all location types and content; the user app shows only searched categories with map markers and GPS-guided navigation for nearby places.",
      de: "Standortbasierte Plattform: per GPS öffentliche/private Parkplätze, Foodtrucks, Tankstellen, EV-/Tesla-Stationen und Benachrichtigungen im 5-km-Radius auf Google Maps. Admin verwaltet Standorte; die User-App zeigt gesuchte Kategorien mit Markern und GPS-Navigation.",
    },
    image: chillnparkImage,
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Google Maps API", "WebSockets"],
    demoLink: "https://react.customdev.solutions/chill_n_park/admin/signin",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Cardii", de: "Cardii" },
    description: {
      en: "A complete mobility platform with three roles: vendors sign up separately with Smile ID verification and post self-drive, professional driver, and buy & sell ads, tracking ad details and monthly/yearly revenue in their portal; users sign up, check availability, place orders, and complete activities end-to-end until the vendor files a dispute; admins manage users and vendors (suspend/activate accounts), active/inactive ads, orders, payments, vendor payouts, commission settings, disputes, reviews, settings, and location zones.",
      de: "Mobilitätsplattform mit drei Rollen: Vendoren mit Smile-ID-Verifizierung stellen Self-Drive-, Fahrer- und Kauf-/Verkaufsanzeigen ein und tracken Umsatz; Nutzer buchen und durchlaufen den Prozess bis ggf. Streitfall; Admins verwalten Nutzer, Vendoren, Anzeigen, Aufträge, Zahlungen, Auszahlungen, Provisionen, Streitfälle, Reviews und Zonen.",
    },
    image: cardiiImage,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe", "Smile ID"],
    demoLink: "https://react.customdev.solutions/cardii/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "100Square Games", de: "100Square Games" },
    description: {
      en: "An online gaming platform offering casual and multiplayer games with user profiles, leaderboards, and in-app rewards.",
      de: "Online-Gaming-Plattform mit Casual- und Multiplayer-Spielen, Profilen, Bestenlisten und In-App-Belohnungen.",
    },
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=100Square+Games",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    demoLink: "https://100squaregames.example.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Petwarehouse", de: "Petwarehouse" },
    description: {
      en: "An e-commerce platform for pet supplies with product catalog, inventory management, order tracking, and admin dashboard.",
      de: "E-Commerce-Plattform für Haustierbedarf mit Produktkatalog, Lagerverwaltung, Bestellverfolgung und Admin-Dashboard.",
    },
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Petwarehouse",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    demoLink: "https://petwarehouse.example.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Genematric", de: "Genematric" },
    description: {
      en: "A genomics analytics platform for managing genetic test results, patient reports, and lab workflow automation for healthcare providers.",
      de: "Genomik-Analyseplattform für Gentest-Ergebnisse, Patientenberichte und Labor-Workflow-Automatisierung für Gesundheitsanbieter.",
    },
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Genematric",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    demoLink: "https://genematric.example.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Eve Doctor", de: "Eve Doctor" },
    description: {
      en: "A telemedicine app connecting patients with doctors for online consultations, appointment booking, prescriptions, and medical records.",
      de: "Telemedizin-App zur Verbindung von Patienten und Ärzten für Online-Konsultationen, Termine, Rezepte und Krankenakten.",
    },
    image: "https://placehold.co/600x400/ec4899/ffffff?text=Eve+Doctor",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    demoLink: "https://evedoctor.example.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: {
      en: "The BMET Medical Posting Community",
      de: "BMET Medical Posting Community",
    },
    description: {
      en: "A medical community platform for BMET professionals to share posts, publish blogs, and engage in discussions, with a full admin panel for content moderation and user management.",
      de: "Medizinische Community-Plattform für BMET-Fachkräfte zum Teilen von Posts, Blogs und Diskussionen – inkl. Admin-Panel für Moderation und Nutzerverwaltung.",
    },
    image: "https://placehold.co/600x400/0284c7/ffffff?text=BMET+Medical+Community",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    demoLink: "https://bmetmedical.example.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Center Piece", de: "Center Piece" },
    description: {
      en: "E-Commerce Cards Purchasing Platform – A scalable web app for seamless card purchasing, role-based management, real-time chat, and future-ready bidding system.",
      de: "E-Commerce-Kartenkauf-Plattform – skalierbare Web-App für Kartenerwerb, rollenbasierte Verwaltung, Echtzeit-Chat und vorbereitetes Bietsystem.",
    },
    image: "https://res.cloudinary.com/dyimz6wal/image/upload/v1755452839/Capture321_zqy4w2.jpg",
    technologies: ["React", "Express", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://react.customdev.solutions/centerpiece/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "168 Store", de: "168 Store" },
    description: {
      en: "A chinese ecommerce Marketplace platform with user authentication, product management, and payment processing using stripe.",
      de: "Chinesische E-Commerce-Marketplace-Plattform mit Authentifizierung, Produktverwaltung und Stripe-Zahlungen.",
    },
    image: "https://res.cloudinary.com/dyimz6wal/image/upload/v1755452660/Capture11_xdl9lh.jpg",
    technologies: ["React", "Express", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://react.customdev.solutions/168ecommerce/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Predivauth", de: "Predivauth" },
    description: {
      en: "A ecommerce Marketplace platform with user authentication, product management, and payment processing using stripe.",
      de: "E-Commerce-Marketplace mit Authentifizierung, Produktverwaltung und Stripe-Zahlungen.",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747120848704/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/ab623e64-95cc-4193-b40a-09b308b2f1f0/original.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://predivauthmarketplace.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Instapet", de: "Instapet" },
    description: {
      en: "A pet delievering platform containg driver , user and admin panel with real-time tracking.",
      de: "Haustier-Lieferplattform mit Fahrer-, Nutzer- und Admin-Panel sowie Echtzeit-Tracking.",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747120883079/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/669aa122-6137-4894-9fd2-453ea0ba3a8c/original.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    demoLink: "https://instapet.co/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Pet Care", de: "Pet Care" },
    description: {
      en: "A pet care management system with user authentication, pet profiles, assiging Employees and appointment scheduling.",
      de: "Haustierpflege-System mit Authentifizierung, Tierprofilen, Mitarbeiterzuweisung und Terminplanung.",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747120998995/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/4d7cde34-0fd4-49c4-836e-dc0a546cdac8/original.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    demoLink: "https://react.customdev.solutions/dogcare/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Laundry", de: "Laundry" },
    description: {
      en: "A laundry management system with user authentication, category , subCategory , products , Google Map apis and order tracking, and payment processing.",
      de: "Wäscherei-Management mit Authentifizierung, Kategorien, Unterkategorien, Produkten, Google Maps, Auftragsverfolgung und Zahlungen.",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747065059962/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/fbe64e9f-c985-447d-b774-f5021d776e52/original.octet-stream",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    demoLink: "https://react.customdev.solutions/laundry/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Golden Love", de: "Golden Love" },
    description: {
      en: "A webApp dating site",
      de: "Dating-WebApp",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747065348349/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/12f15841-c0d9-4466-aa0e-a5228138cff9/original.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://goldenloveconnections.com/",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: false,
  },
  {
    title: { en: "Parvin", de: "Parvin" },
    description: {
      en: "A mobile dating app",
      de: "Mobile Dating-App",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121028556/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/8264a1e1-0ecd-49e7-9ece-29cd1031724d/original.png",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://play.google.com/store/apps/details?id=com.parvindatingapp&hl=en",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: true,
  },
  {
    title: { en: "Cry o Guys", de: "Cry o Guys" },
    description: {
      en: "An offline survey app for franchise, superAdmin and users",
      de: "Offline-Umfrage-App für Franchise, SuperAdmin und Nutzer",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121065995/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/ddbd6a27-617b-405d-b474-7763e0b67f54/original.octet-stream",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://play.google.com/store/apps/details?id=com.cryoguys&hl=en",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: true,
  },
  {
    title: { en: "Kori Hintin", de: "Kori Hintin" },
    description: {
      en: "A salon mobile app for hair stylists and customer appointments.",
      de: "Salon-Mobile-App für Friseure und Kundentermine.",
    },
    image: "https://res.cloudinary.com/ft-bounty/image/upload/c_fill,g_auto/v1747121332960/nvft-user-files/production/f4d68c35-0109-4d3d-a28a-7ab7f881256a/uploads/7277f7ab-f544-4800-a4e2-2420e4f65ae1/original.octet-stream",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoLink: "https://react.customdev.solutions/koriHintin/admin/signin",
    codeLink: "https://github.com",
    isFeatured: false,
    isMobile: true,
  },
];
