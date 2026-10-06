import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  profileData,
  skillsData,
  experienceData,
  educationData,
  certificationData,
  projectsData,
} from "@/data/portfolioData";
import type { Lang } from "@/i18n/types";
import { pick } from "@/i18n/types";

const labels = {
  en: {
    summary: "Professional Summary",
    experience: "Work Experience",
    skills: "Technical Skills",
    education: "Education",
    projects: "Selected Projects",
    certifications: "Certifications",
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portfolio",
  },
  de: {
    summary: "Profil",
    experience: "Berufserfahrung",
    skills: "Technische Fähigkeiten",
    education: "Ausbildung",
    projects: "Ausgewählte Projekte",
    certifications: "Zertifikate",
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portfolio",
  },
} as const;

/** Impact-focused bullets for recruiters (EN/DE) */
const experienceHighlights: Record<string, { en: string; de: string }> = {
  "AI Software Engineer": {
    en: "Shipped AI/RAG and full-stack products for EU clients; cut manual ops by ~40% via automation; delivered 4+ production apps (web + React Native) with measurable delivery speed (+30% faster release cycles).",
    de: "KI/RAG- und Full-Stack-Produkte für EU-Kunden geliefert; manuelle Abläufe um ~40% reduziert; 4+ Produktiv-Apps (Web + React Native) mit ~30% schnelleren Release-Zyklen.",
  },
  "Backend Engineer": {
    en: "Built scalable MERN/PERN APIs powering multi-tenant dashboards; improved API response times ~35%; supported 10+ client products with real-time WebSocket features and 99.5%+ uptime targets.",
    de: "Skalierbare MERN/PERN-APIs für Multi-Tenant-Dashboards; API-Antwortzeiten um ~35% verbessert; 10+ Kundenprodukte mit WebSockets und 99,5%+ Verfügbarkeitsziel unterstützt.",
  },
  "Software Engineer": {
    en: "Delivered MERN backends and React integrations for commercial web apps; reduced integration defects ~25%; accelerated feature delivery for multiple concurrent client roadmaps.",
    de: "MERN-Backends und React-Integrationen für kommerzielle Web-Apps; Integrationsfehler um ~25% gesenkt; Feature-Lieferung für parallele Kunden-Roadmaps beschleunigt.",
  },
  "Jr MERN Developer": {
    en: "Implemented React + third-party API flows that reduced manual data entry effort and improved frontend delivery consistency across early product releases.",
    de: "React- und Drittanbieter-API-Flows umgesetzt, die manuellen Dateneingabeaufwand reduzierten und die Frontend-Lieferqualität in frühen Releases steigerten.",
  },
  "Jr. MERN Developer": {
    en: "Implemented React + third-party API flows that reduced manual data entry effort and improved frontend delivery consistency across early product releases.",
    de: "React- und Drittanbieter-API-Flows umgesetzt, die manuellen Dateneingabeaufwand reduzierten und die Frontend-Lieferqualität in frühen Releases steigerten.",
  },
};

const projectMetrics: Record<string, { en: string; de: string }> = {
  "Automated Accounting": {
    en: "DATEV pre-booking automation — reduced bookkeeping review time ~50%; multi-source imports (Bank/PayPal/JTL/Amazon) with HITL queues for audit-ready exports.",
    de: "DATEV-Vorbuchungsautomatisierung — Prüfzeit in der Buchhaltung um ~50% gesenkt; Multi-Source-Imports (Bank/PayPal/JTL/Amazon) mit HITL-Queues für exportfertige Buchungen.",
  },
  FieldOps: {
    en: "Multi-tenant field-service SaaS — streamlined Anfrage→Rechnung; role portals + React Native apps; Stripe billing ready for recurring revenue growth.",
    de: "Multi-Tenant-Außendienst-SaaS — Anfrage→Rechnung effizienter; Rollenportale + React-Native-Apps; Stripe-Abos für wiederkehrende Umsätze vorbereitet.",
  },
  "Marketplace Multi Vendor App": {
    en: "Admin + Vendor + native iOS/Android marketplace — end-to-end commerce ops (orders, commissions, payouts) to scale multi-vendor GMV.",
    de: "Admin + Vendor + native iOS/Android-Marketplace — End-to-End-Commerce (Bestellungen, Provisionen, Auszahlungen) zur Skalierung von Multi-Vendor-GMV.",
  },
  "TalentSync AI": {
    en: "AI resume + HR matching — ATS PDF export + top-10 candidate ranking; cuts screening time for recruiters and improves shortlist quality.",
    de: "KI-Lebenslauf + HR-Matching — ATS-PDF-Export + Top-10-Kandidaten-Ranking; verkürzt Screening-Zeit und verbessert Shortlist-Qualität.",
  },
  "Financial Dashboard": {
    en: "Private-debt investor dashboard — real-time KPIs for portfolio value, collections, and overdue risk to speed finance decisions.",
    de: "Private-Debt-Investor-Dashboard — Echtzeit-KPIs zu Portfoliowert, Einzügen und Überfälligkeit für schnellere Finanzentscheidungen.",
  },
  "AI CRM": {
    en: "AI CRM — lead scoring & pipeline insights; helps sales teams prioritize high-intent deals and improve conversion focus.",
    de: "KI-CRM — Lead-Scoring & Pipeline-Insights; hilft Vertriebsteams, High-Intent-Deals zu priorisieren und Conversion zu steigern.",
  },
};

const projectHighlights = [
  "Automated Accounting",
  "FieldOps",
  "Marketplace Multi Vendor App",
  "TalentSync AI",
  "Financial Dashboard",
  "AI CRM",
];

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildResumeHtml(lang: Lang): string {
  const L = labels[lang];
  const name = profileData.name;
  const title = pick(profileData.title, lang);
  const bio = pick(profileData.bio, lang);
  const location = pick(profileData.location, lang);
  const portfolioUrl = "https://resume-builder-alpha-beryl.vercel.app/";

  const skills = skillsData
    .map(
      (s) => `
      <div class="skill-item">
        <strong>${escapeHtml(pick(s.title, lang))}:</strong>
        <span> ${escapeHtml(pick(s.description, lang))}</span>
      </div>`
    )
    .join("");

  const experience = experienceData
    .map((exp) => {
      const roleTitle = pick(exp.title, lang);
      const highlight =
        experienceHighlights[roleTitle] ??
        experienceHighlights[pick(exp.title, "en")] ??
        { en: pick(exp.description, "en"), de: pick(exp.description, "de") };
      return `
        <div class="item">
          <div class="row">
            <strong class="left">${escapeHtml(roleTitle)}</strong>
            <span class="date">${escapeHtml(pick(exp.duration, lang))}</span>
          </div>
          <div class="sub">${escapeHtml(pick(exp.company, lang))} · ${escapeHtml(pick(exp.location, lang))}</div>
          <div class="desc">${escapeHtml(pick(highlight, lang))}</div>
        </div>`;
    })
    .join("");

  const education = educationData
    .map(
      (edu) => `
      <div class="item">
        <div class="row">
          <strong class="left">${escapeHtml(pick(edu.degree, lang))}</strong>
          <span class="date">${escapeHtml(edu.year)}</span>
        </div>
        <div class="sub">${escapeHtml(pick(edu.institution, lang))}</div>
      </div>`
    )
    .join("");

  const projects = projectsData
    .filter((p) => projectHighlights.includes(pick(p.title, "en")))
    .map((p) => {
      const enTitle = pick(p.title, "en");
      const tech = p.technologies.slice(0, 5).join(", ");
      const metric = projectMetrics[enTitle];
      const desc = metric
        ? pick(metric, lang)
        : pick(p.description, lang).slice(0, 110).replace(/\s+\S*$/, "") + "…";
      return `
        <div class="item">
          <strong>${escapeHtml(pick(p.title, lang))}</strong>
          <div class="tech">${escapeHtml(tech)}</div>
          <div class="desc">${escapeHtml(desc)}</div>
        </div>`;
    })
    .join("");

  const certifications = certificationData
    .map(
      (c) =>
        `${pick(c.degree, lang)} (${c.year}, ${pick(c.institution, lang)})`
    )
    .join(" · ");

  return `
    <div id="resume-pdf-root" style="
      width: 794px;
      min-height: 1123px;
      box-sizing: border-box;
      padding: 28px 40px 28px 36px;
      background: #ffffff;
      color: #111827;
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      font-size: 11px;
      line-height: 1.35;
      overflow: visible;
    ">
      <style>
        #resume-pdf-root * { box-sizing: border-box; }
        #resume-pdf-root h1 { margin: 0; font-size: 26px; letter-spacing: 0.2px; color: #0f172a; }
        #resume-pdf-root .headline { margin: 4px 0 8px; font-size: 12px; color: #1d4ed8; font-weight: 600; word-wrap: break-word; }
        #resume-pdf-root .contact { margin: 0 0 12px; color: #334155; font-size: 10.5px; }
        #resume-pdf-root .contact-line { margin: 0 0 2px; word-break: break-all; overflow-wrap: anywhere; }
        #resume-pdf-root h2 {
          margin: 10px 0 5px;
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0f172a;
          border-bottom: 1.5px solid #1d4ed8;
          padding-bottom: 2px;
        }
        #resume-pdf-root .item { margin-bottom: 5px; }
        #resume-pdf-root .row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }
        #resume-pdf-root .left {
          flex: 1 1 auto;
          min-width: 0;
          word-wrap: break-word;
        }
        #resume-pdf-root .date {
          flex: 0 0 auto;
          color: #64748b;
          font-size: 10px;
          white-space: nowrap;
          text-align: right;
        }
        #resume-pdf-root .sub { color: #475569; font-size: 10.5px; word-wrap: break-word; }
        #resume-pdf-root .tech { color: #64748b; font-size: 10px; margin-top: 1px; word-wrap: break-word; }
        #resume-pdf-root .desc { color: #1f2937; margin-top: 1px; word-wrap: break-word; overflow-wrap: anywhere; }
        #resume-pdf-root .skill-item { color: #1f2937; margin-bottom: 3px; word-wrap: break-word; }
        #resume-pdf-root .skill-item strong { color: #0f172a; }
      </style>
      <h1>${escapeHtml(name)}</h1>
      <div class="headline">${escapeHtml(title)}</div>
      <div class="contact">
        <div class="contact-line">${escapeHtml(profileData.email)} · ${escapeHtml(profileData.phone)} · ${escapeHtml(location)}</div>
        <div class="contact-line">${L.linkedin}: ${escapeHtml(profileData.socialLinks.linkedin)}</div>
        <div class="contact-line">${L.github}: ${escapeHtml(profileData.socialLinks.github)}</div>
        <div class="contact-line">${L.portfolio}: ${escapeHtml(portfolioUrl)}</div>
      </div>

      <h2>${L.summary}</h2>
      <div class="desc">${escapeHtml(bio)}</div>

      <h2>${L.skills}</h2>
      ${skills}

      <h2>${L.experience}</h2>
      ${experience}

      <h2>${L.projects}</h2>
      ${projects}

      <h2>${L.education}</h2>
      ${education}

      <h2>${L.certifications}</h2>
      <div class="desc">${escapeHtml(certifications)}</div>
    </div>
  `;
}

export async function downloadResumePdf(lang: Lang): Promise<void> {
  const host = document.createElement("div");
  host.style.position = "fixed";
  host.style.left = "-10000px";
  host.style.top = "0";
  host.style.zIndex = "-1";
  host.innerHTML = buildResumeHtml(lang);
  document.body.appendChild(host);

  const root = host.querySelector("#resume-pdf-root") as HTMLElement;

  try {
    const canvas = await html2canvas(root, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      width: 794,
      height: Math.max(root.scrollHeight, 1123),
      windowWidth: 794,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let width = pageWidth;
    let height = (canvas.height * pageWidth) / canvas.width;
    if (height > pageHeight) {
      const scale = pageHeight / height;
      width = pageWidth * scale;
      height = pageHeight;
    }
    const x = (pageWidth - width) / 2;
    pdf.addImage(imgData, "JPEG", x, 0, width, height, undefined, "FAST");

    const suffix = lang === "de" ? "DE" : "EN";
    pdf.save(`Zaeem_Uz_Zafar_Resume_${suffix}.pdf`);
  } finally {
    document.body.removeChild(host);
  }
}
